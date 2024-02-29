import { useState, useContext } from 'react';
import Graph from 'react-graph-vis';

import { SelectedCourse } from 'providers/SelectedCourse';

type CourseGraphProps = {
  borderColor?: string;
  size?: number;
  arrow?: boolean;
  arrowType?: string;
  dashes?: boolean | number[];
};

const _data = {
  nodes: [
    { id: 1, label: 'CS31' },
    { id: 2, label: 'CS32' },
    { id: 3, label: 'CS33' },
    { id: 4, label: 'CS35L' },
    { id: 5, label: 'PHYS1A' },
    { id: 6, label: 'FOUNDATIONS OF SOCIETY AND CULTURE' },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
  ],
};

const CourseGraph: React.FC<CourseGraphProps> = ({
  borderColor = '#000000',
  size = 100,
  arrow = true,
  arrowType = 'arrow',
  dashes = false,
}) => {
  const { setSelectedCourse } = useContext(SelectedCourse);
  const [data, setData] = useState(_data);

  const options = {
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
        highlight: {
          border: 'borderColor',
          background: '#FFFFFF',
        },
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
      dashes,
      width: 1.5,
      color: '#000000',
      chosen: false,
    },
    height: '100%',
    width: `${innerWidth * 0.8}px`,
  };

  const events = {
    select: ({ nodes, edges }: { nodes: any; edges: any }) => {
      setSelectedCourse(nodes?.[0]);
    },
    doubleClick: ({ pointer: { canvas } }: { pointer: { canvas: any } }) => {
      alert('double click! at ' + canvas.x + ', ' + canvas.y);
    },
  };

  return (
    <div className="bg-blue-600 relative h-full flex-1 overflow-hidden">
      <Graph graph={data} options={options} events={events} />
    </div>
  );
};

export default CourseGraph;
