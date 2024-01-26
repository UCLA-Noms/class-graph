import { useState } from 'react';

import { Course } from 'types/Course';

const courses: Course[] = [
  {
    id: 1,
    code: 'CS 31',
    name: 'Intro to Computer Science 1',
    description:
      'Lecture, four hours; discussion, two hours; outside study, six hours. Introduction to computer science via theory, applications, and programming. Basic data types, operators and control structures. Input/output. Procedural and data abstraction. Introduction to object-oriented software development. Functions, recursion. Arrays, strings, pointers. Abstract data types, object-oriented programming. Examples and exercises from computer science theory and applications. Letter grading.',
    units: 4,
    instructor: 'David Smallberg',
  },
  {
    id: 2,
    code: 'CS 32',
    name: 'Intro to Computer Science 2',
    description:
      'Lecture, four hours; discussion, two hours; outside study, six hours. Enforced requisite: course 31. Object-oriented software development. Abstract data type definition and use. Overloading, inheritance, polymorphism. Object-oriented view of data structures: stacks, queues, lists. Algorithm analysis. Trees, graphs, and associated algorithms. Searching and sorting. Case studies and exercises from computer science applications. Letter grading.',
    units: 4,
    instructor: 'Carey Nachenberg',
  },
  {
    id: 3,
    code: 'CS 33',
    name: 'Computer Organization',
    description:
      ' Lecture, four hours; discussion, two hours; outside study, nine hours. Enforced requisite: course 32. Introductory course on computer architecture, assembly language, and operating systems fundamentals. Number systems, machine language, and assembly language. Procedure calls, stacks, interrupts, and traps. Assemblers, linkers, and loaders. Operating systems concepts: processes and process management, input/output (I/O) programming, memory management, file systems. Letter grading.',
    units: 5,
    instructor: 'Glenn Reinman',
  },
  {
    id: 4,
    code: 'CS 35L',
    name: 'Software Construction Laboratory',
    description:
      'Laboratory, four hours; outside study, five hours. Requisite: course 31. Fundamentals of commonly used software tools and environments, particularly open-source tools to be used in upper-division computer science courses. Letter grading.',
    units: 4,
    instructor: 'Paul Eggert',
  },
  {
    id: 5,
    code: 'PHYSICS 1A',
    name: 'Physics for Scientists and Engineers: Mechanics',
    description:
      'Lecture/demonstration, four hours; discussion, one hour. Recommended preparation: high school physics, one year of high school calculus or Mathematics 31A and 31B. Enforced requisites: Mathematics 31A, 31B. Enforced corequisite: Mathematics 32A. Recommended corequisite: Mathematics 32B. Motion, Newton laws, work, energy, linear and angular momentum, rotation, equilibrium, gravitation. P/NP or letter grading.',
    units: 5,
    instructor: 'Brent Corbin',
  },
];

const useSelectedCourse = () => {
  // const [selectedCourse, setSelectedCourse] = useState(courses.find((c) => c.id == courseId)!);
  const [selected, setSelected] = useState({ id: -1 });

  const setSelectedCourse = (courseId: number) => {
    setSelected(courses.find((c) => c.id == courseId)!);
    console.log(selected);
  };

  return { selectedCourse: selected, setSelectedCourse };
};

export default useSelectedCourse;
