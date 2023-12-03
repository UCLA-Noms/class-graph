import { useState } from 'react';
import Graph from 'react-graph-vis';
import { Course } from 'types/Course';

interface ClassGraphProps {
  courses: Course[];
  onCourseClick: (courseIds: number) => void;
  selected: number;
}

export default function ClassGraph({ courses, onCourseClick, selected }: ClassGraphProps) {
  const [state, setState] = useState({
    graph: {
      nodes: [
        { id: 1, label: 'CS31' },
        { id: 2, label: 'CS32' },
        { id: 3, label: 'CS33' },
        { id: 4, label: 'CS35L' },
        { id: 5, label: 'PHYS1A' },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
      ],
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
