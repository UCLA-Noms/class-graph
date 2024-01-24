import { useState } from 'react';
import Graph from 'react-graph-vis';
import { Course } from 'types/Course';

interface CourseGraphProps {
  courses: Course[];
  onCourseClick: (courseIds: number) => void;
  selected: number;
  borderColor?: string;
  size?: number;
  arrow?: boolean;
  arrowType?: string;
}

export default function CourseGraph({
  courses,
  onCourseClick,
  selected,
  borderColor = '#000000',
  size = 100,
  arrow = true,
  arrowType = 'arrow',
}: CourseGraphProps) {
  const [state, setState] = useState({
    graph: {
      nodes: [
        { id: 1, label: 'CS31' },
        { id: 2, label: 'CS32' },
        { id: 3, label: 'CS33' },
        { id: 4, label: 'CS35L' },
        { id: 5, label: 'PHYS1longtexttesttest' },
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
        shape: 'circle',
        widthConstraint: size,
        borderWidth: 1.5,
        color: {
          border: borderColor,
          background: '#FFFFFF',
        },
        font: {
          size: 14,
          align: 'center',
        },
      },
      edges: {
        arrows: {
          to: {
            enabled: arrow,
            type: arrowType,
          },
        },
        width: 1.5,
        color: '#000000',
        chosen: false,
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
