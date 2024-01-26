require('dotenv').config();
const express = require('express');
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

const neo4j = require('neo4j-driver');

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

app.get('/getprereqs/:department', async (req, res) => {
  let result = await session.run(
    `
        MATCH (c1:Course)-[:IS_PREREQ_OF]->(c2:Course {Department: "${req.params.department}"}) RETURN c1.CourseID, c1.Name, c2.CourseID, c2.Name
        `,
  );
  // res.send(result.records[0]._fields)
  // res.send(result.records.map(record => record._fields[0]));
  res.send(
    result.records.map((record) => [
      [record._fields[0], record._fields[1]],
      [record._fields[2], record._fields[3]],
    ]),
  );
});

app.get('/getcourses/:department', async (req, res) => {
  let result = await session.run(
    `
        MATCH (c1:Course {Department: "${req.params.department}"}) RETURN c1.CourseID
        `,
  );
  res.send(result.records.map((record) => record._fields[0]));
});

app.get('/getcoursesbycat/:major/:category', async (req, res) => {
  let course_result = await session.run(
    `
        MATCH (:Category {Major: "${req.params.major}", Name: "${req.params.category}"})-[edge]->(node) OPTIONAL MATCH (node)<-[edge2]-(l:Lecture) RETURN node, l
        `,
  );
  console.log(course_result.records[0]);
  let prereq_result = await session.run(
    `
        MATCH (:Category {Major: "${req.params.major}", Name: "${req.params.category}"})-[edge]->(c1:Course)-[:IS_PREREQ_OF]->(c2:Course) RETURN c1, c2
        `,
  );
  res.send({
    // TODO: Figure out how to map course to multiple professors
    course_nodes: course_result.records
      .filter((record) => record._fields[0].labels[0] === 'Course')
      .map((record) => ({
        class_code: record._fields[0].properties.CourseID,
        class_name: record._fields[0].properties.Name,
        class_description: record._fields[0].properties.Description,
        class_units: record._fields[0].properties.Units,
        professors: course_result.records
          .filter(
            (r) =>
              r._fields[0].labels[0] === 'Course' &&
              r._fields[0].properties.CourseID === record._fields[0].properties.CourseID,
          )
          .map((record) => record._fields[1].properties.Professor),
        id: record._fields[0].identity.low,
      })),
    subcat_nodes: course_result.records
      .filter((record) => record._fields[0].labels[0] === 'Category')
      .map((record) => record._fields[0].properties.Name),
    prereq_edges: prereq_result.records.map((record) => ({
      prereq: record._fields[0].identity.low,
      postreq: record._fields[1].identity.low,
    })),
  });
});

app.get('/closeconnection', (req, res) => {
  driver.close();
});
