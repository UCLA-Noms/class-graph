import { css } from '@emotion/react';
import { useState } from 'react';

import CourseGraph from './components/CourseGraph';
import DarsPanel from 'panels/DarsPanel';
import CourseDetails from 'panels/Inspector/CourseDetails';
import { Course } from 'types/Course';

export const CourseMap: React.FC = () => {
  const res = {
    course_nodes: [
      { class_code: 'SOCIOL 1', class_name: 'temp course name 1', id: 1 },
      { class_code: 'SOCIOL 2', class_name: 'temp course name 2', id: 2 },
      { class_code: 'SOCIOL 3', class_name: 'temp course name 3', id: 3 },
    ],
    subcat_nodes: [],
    prereq_edges: [
      { prereq: 1, postreq: 3 },
      { prereq: 3, postreq: 2 },
    ],
  };

  const class_list = res.course_nodes;
  const edge_list = res.prereq_edges;

  // let course = [];
  const courses: Course[] = [];

  for (const x of class_list) {
    const curClass: Course = {
      id: x.id,
      code: x.class_code,
      name: x.class_name,
      description: 'DUMMY DISC',
      units: 5,
      instructor: 'DUMMY INSTRUCTOR',
    };
    // var curClass: Course = []
    // //let curClass: { [key: string]: any } = {};
    // //someObj[field as keyof ObjectType]

    courses.push(curClass);
  }

  //TODO: MAKE PREREQ MAPPING BY ID SUCH THAT
  //REQ_DIC = {PREREQID: POSTREQID} AND PASS INTO COURSEGRAPH

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  //const courses: Course[] =  course
  // const courses: Course[] = [
  //   {
  //     id: 1,
  //     code: 'CS 31',
  //     name: 'Intro to Computer Science 1',
  //     description:
  //       'Lecture, four hours; discussion, two hours; outside study, six hours. Introduction to computer science via theory, applications, and programming. Basic data types, operators and control structures. Input/output. Procedural and data abstraction. Introduction to object-oriented software development. Functions, recursion. Arrays, strings, pointers. Abstract data types, object-oriented programming. Examples and exercises from computer science theory and applications. Letter grading.',
  //     units: 4,
  //     instructor: 'David Smallberg',
  //   },
  //   {
  //     id: 2,
  //     code: 'CS 32',
  //     name: 'Intro to Computer Science 2',
  //     description:
  //       'Lecture, four hours; discussion, two hours; outside study, six hours. Enforced requisite: course 31. Object-oriented software development. Abstract data type definition and use. Overloading, inheritance, polymorphism. Object-oriented view of data structures: stacks, queues, lists. Algorithm analysis. Trees, graphs, and associated algorithms. Searching and sorting. Case studies and exercises from computer science applications. Letter grading.',
  //     units: 4,
  //     instructor: 'Carey Nachenberg',
  //   },
  //   {
  //     id: 3,
  //     code: 'CS 33',
  //     name: 'Computer Organization',
  //     description:
  //       ' Lecture, four hours; discussion, two hours; outside study, nine hours. Enforced requisite: course 32. Introductory course on computer architecture, assembly language, and operating systems fundamentals. Number systems, machine language, and assembly language. Procedure calls, stacks, interrupts, and traps. Assemblers, linkers, and loaders. Operating systems concepts: processes and process management, input/output (I/O) programming, memory management, file systems. Letter grading.',
  //     units: 5,
  //     instructor: 'Glenn Reinman',
  //   },
  //   {
  //     id: 4,
  //     code: 'CS 35L',
  //     name: 'Software Construction Laboratory',
  //     description:
  //       'Laboratory, four hours; outside study, five hours. Requisite: course 31. Fundamentals of commonly used software tools and environments, particularly open-source tools to be used in upper-division computer science courses. Letter grading.',
  //     units: 4,
  //     instructor: 'Paul Eggert',
  //   },
  //   {
  //     id: 5,
  //     code: 'PHYSICS 1A',
  //     name: 'Physics for Scientists and Engineers: Mechanics',
  //     description:
  //       'Lecture/demonstration, four hours; discussion, one hour. Recommended preparation: high school physics, one year of high school calculus or Mathematics 31A and 31B. Enforced requisites: Mathematics 31A, 31B. Enforced corequisite: Mathematics 32A. Recommended corequisite: Mathematics 32B. Motion, Newton laws, work, energy, linear and angular momentum, rotation, equilibrium, gravitation. P/NP or letter grading.',
  //     units: 5,
  //     instructor: 'Brent Corbin',
  //   },
  // ];

  const handleCourseClick = (courseId: number) => {
    console.log('courseId: ', courseId);
    if (courseId < 0) {
      setSelectedCourse(null);
      return;
    }
    const selected: Course = courses.find((c) => c.id == courseId)!;
    setSelectedCourse(selected);
  };

  return (
    <div css={style.courseMap}>
      <div css={style.darsPanel}>
        <DarsPanel />
      </div>
      <div css={style.mainPanel}>
        <CourseGraph
          courses={courses}
          edges={edge_list}
          onCourseClick={handleCourseClick}
          selected={selectedCourse ? selectedCourse.id : -1}
        ></CourseGraph>
      </div>
      {selectedCourse ? (
        <div css={style.inspectorPanel}>
          <CourseDetails course={selectedCourse}></CourseDetails>
        </div>
      ) : null}
    </div>
  );
};

export default CourseMap;

const style = {
  courseMap: css({
    width: '100vw',
    height: '100vh',
    maxHeight: 'fill-available',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  }),
  mainPanel: css({
    minWidth: '50%',
    minHeight: '80%',
    backgroundColor: 'green',
  }),
  darsPanel: css({ width: '20%', backgroundColor: 'red' }),
  inspectorPanel: css({ width: '30%', backgroundColor: 'rgb(0 183 255)' }),
};
