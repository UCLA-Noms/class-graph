require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
var cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;

const neo4j = require("neo4j-driver");

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

app.get("/getprereqs/:department", async (req, res) => {
    let result = await session.run(
        `
        MATCH (c1:Course)-[:IS_PREREQ_OF]->(c2:Course {Department: "${req.params.department}"}) RETURN c1.CourseID, c1.Name, c2.CourseID, c2.Name
        `
    );
    // res.send(result.records[0]._fields)
    // res.send(result.records.map(record => record._fields[0]));
    res.send(result.records.map(record => ([[record._fields[0], record._fields[1]],[record._fields[2], record._fields[3]]])));
});

app.get("/getcourses/:department", async (req, res) => {
    let result = await session.run(
        `
        MATCH (c1:Course {Department: "${req.params.department}"}) RETURN c1.CourseID
        `
    );
    res.send(result.records.map(record => record._fields[0]));
});

app.get("/getcoursesbycat/:major/:category", async (req, res) => {
    let course_result = await session.run(
        `
        MATCH (:Category {Major: "${req.params.major}", Name: "${req.params.category}"})-[edge]->(node) RETURN node
        `
    )
    let prereq_result = await session.run(
        `
        MATCH (:Category {Major: "${req.params.major}", Name: "${req.params.category}"})-[edge]->(c1:Course)-[:IS_PREREQ_OF]->(c2:Course) RETURN c1.CourseID, c1.Name, c2.CourseID, c2.Name
        `
    )
    res.send(
        {
            "course_nodes": course_result.records.filter(record => record._fields[0].labels[0] === "Course").map(record => [record._fields[0].properties.CourseID, record._fields[0].properties.Name]),
            "subcat_nodes": course_result.records.filter(record => record._fields[0].labels[0] === "Category").map(record => record._fields[0].properties.Name),
            "prereq_edges": prereq_result.records.map(record => ({"prereq": [record._fields[0], record._fields[1]],"postreq": [record._fields[2], record._fields[3]]}))
        }    
            );
})

app.get("/closeconnection", (req, res) => {
    driver.close();
});

async function importFromJSON(data) {
    const classes = data.classes;
    console.log(classes)
    try {
        for (let cls in classes) {
            cls = classes[cls];
            console.log("creating/updating course node")
            console.log(cls)
            let result = await session.run(
                `
                MERGE (c:Course {Name: "${cls.courseName}"})
                ON CREATE SET c.CourseID = "${cls.courseID}", c.Units = "${cls.units}", c.Department = "${cls.departmentID}", c.Description = "${cls.courseDescription}", c.CoursePageLink = "${cls.coursePageLink}", c.AvailabilityLink = "${cls.courseAvailabilityLink}"
                ON MATCH SET c.CourseID = "${cls.courseID}", c.Units = "${cls.units}", c.Department = "${cls.departmentID}", c.Description = "${cls.courseDescription}", c.CoursePageLink = "${cls.coursePageLink}", c.AvailabilityLink = "${cls.courseAvailabilityLink}"
                `
            );
            console.log("creating/updating lecture and term nodes")
            for (const lecture in cls.lectures) {
                const lec = cls.lectures[lecture]
                console.log("lec")
                console.log(lec)
                result = await session.run(
                    `
                    MERGE (l1:Lecture {InternalID: "${lec.internalID}", Quarter: "${lec.quarter}"})
                    ON CREATE SET l1.Section = "${lec.lecture}", l1.Professor = "${lec.professor}", l1.Location = "${lec.location}", l1.Days = "${lec.days.join(",")}", l1.Time = "${lec.time}"
                    ON MATCH SET l1.Section = "${lec.lecture}", l1.Professor = "${lec.professor}", l1.Location = "${lec.location}", l1.Days = "${lec.days.join(",")}", l1.Time = "${lec.time}"
                    MERGE (c1:Course {CourseID: "${cls.courseID}"}) MERGE (l1)-[:FROM_COURSE]->(c1)
                    MERGE (t1:Term {Quarter: "${lec.quarter}"}) MERGE (l1)-[:TAUGHT_IN]->(t1)`
                );
                console.log("creating discussion node/relationships")
                for (const discussion of lec.discussions) {
                    result = await session.run(
                        `
                        MERGE (d1:Discussion {InternalID: "${discussion.internalID}", Quarter: "${discussion.quarter}"})
                        ON CREATE SET d1.Section = "${discussion.section}", d1.TA = "${discussion.ta}", d1.Location = "${discussion.location}", d1.Days = "${discussion.days.join(",")}", d1.Time = "${discussion.time}"
                        ON MATCH SET d1.Section = "${discussion.section}", d1.TA = "${discussion.ta}", d1.Location = "${discussion.location}", d1.Days = "${discussion.days.join(",")}", d1.Time = "${discussion.time}"
                        MERGE (l1:Lecture {Section: "${lec.lecture}", Professor: "${lec.professor}", Location: "${lec.location}", Days: "${lec.days.join(",")}", Time: "${lec.time}", Quarter: "${lec.quarter}"}) MERGE (l1)-[:HAS_DISCUSSION]->(d1)
                        MERGE (t1:Term {Quarter: "${lec.quarter}"}) MERGE (d1)-[:TAUGHT_IN]->(t1)`
                    );
                }
            }
            // console.log("creating course lecture relationship")
            console.log("creating prereq relationships")
            for (const prereq of cls.prereqs) {
                console.log("prereq")
                console.log(prereq)
                result = await session.run(
                    `MERGE (c1:Course {Name: "${prereq}"}) MERGE (c2:Course {CourseID: "${cls.courseID}"}) MERGE (c1)-[:IS_PREREQ_OF]->(c2)`
                );
            }
            console.log("done");
        }
    } finally {
        // await session.close();
    }

    // on application exit:
    // await driver.close();
}


// test();
