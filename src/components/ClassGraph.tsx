import React from 'react';
import Graph from 'react-graph-vis';

export default function ClassGraph() {
  const graph = {
    nodes: [
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  };

  const options = {
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
  };

  const events = {
    select: ({ nodes, edges }) => {
      if (nodes.length > 0) {
        alert('Selected node: ' + nodes);
      }
    },
    doubleClick: ({ pointer: { canvas } }) => {
      alert('double click! at ' + canvas.x + ', ' + canvas.y);
    },
  };

  return <Graph graph={graph} options={options} events={events} />;
}
