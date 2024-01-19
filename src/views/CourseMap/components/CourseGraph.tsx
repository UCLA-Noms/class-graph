import { useState } from 'react';
import Graph from 'react-graph-vis';
import { Course } from 'types/Course';

interface CourseGraphProps {
  courses: Course[];
  edges: { prereq: number; postreq: number }[];
  onCourseClick: (courseIds: number) => void;
  selected: number;
}

export default function CourseGraph({ courses, edges, onCourseClick, selected }: CourseGraphProps) {
  const [state, setState] = useState({
    graph: {
      nodes: courses.map((item) => ({ id: item.id, label: item.code })),
      edges: edges.map((item) => ({ from: item.prereq, to: item.postreq })),
      // edges: [
      //   { from: 1, to: 2 },
      //   { from: 3, to: 2 },
      //   //{ from: 2, to: 4 },
      // ],
    },
    options: {
      interaction: {
        navigationButtons: true,
      },
      nodes: {
        shape: 'dot',
        size: 32,
      },
      edges: {
        color: '#000000',
      },
      height: '100%',
      width: `${innerWidth * 0.8}px`,
    },
    events: {
      select: ({ nodes, edges }: { nodes: any; edges: any }) => {
        if (nodes.length > 0) {
          onCourseClick(nodes);
        } else {
          onCourseClick(-1);
        }
      },
      doubleClick: ({ pointer: { canvas } }: { pointer: { canvas: any } }) => {
        alert('double click! at ' + canvas.x + ', ' + canvas.y);
      },
    },
  });

  const { graph, options, events } = state;

  return <Graph graph={graph} options={options} events={events} />;
}
