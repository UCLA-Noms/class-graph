import React, { useState } from 'react';
import Graph from 'react-graph-vis';
import { Course } from '../App';

interface ClassGraphProps {
  courses: Course[];
  onCourseClick: (courseIds: number) => void;
}

export default function ClassGraph({ courses, onCourseClick }: ClassGraphProps) {
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
      width: '100%',
    },
    events: {
      select: ({ nodes, edges }: { nodes: any; edges: any }) => {
        if (nodes.length > 0) {
          onCourseClick(nodes);
        }
      },
      doubleClick: ({ pointer: { canvas } }: { pointer: { canvas: any } }) => {
        alert('double click! at ' + canvas.x + ', ' + canvas.y);
      },
    },
  });

  const { graph, options, events } = state;

  return (
    <>
      Here is our graph!
      <Graph graph={graph} options={options} events={events} />
    </>
  );
}
