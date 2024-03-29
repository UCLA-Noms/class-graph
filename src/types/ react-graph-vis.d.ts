// From: https://gist.github.com/ChadJPetersen/2e2587bbd753c6a384c02519183e2031

/* eslint-disable import/no-unresolved */
declare module 'react-graph-vis' {
  import { Component } from 'react';

  import { Network, NetworkEvents, Options, Node, Edge, DataSet } from 'vis';

  export { Network, NetworkEvents, Options, Node, Edge, DataSet } from 'vis';

  export type graphEvents = {
    [event in NetworkEvents]?: (params?: any) => void;
  };

  // Doesn't appear that this module supports passing in a vis.DataSet directly.
  // Once it does graph can just use the Data object from vis.

  export interface graphData {
    nodes: Node[];
    edges: Edge[];
  }

  export interface NetworkGraphProps {
    graph: graphData;
    options?: Options;
    events?: graphEvents;
    getNetwork?: (network: Network) => void;
    identifier?: string;
    style?: React.CSSProperties;
    getNodes?: (nodes: DataSet<Node>) => void;
    getEdges?: (edges: DataSet<Edge>) => void;
  }

  export interface NetworkGraphState {
    identifier: string;
  }

  export default class NetworkGraph extends Component<NetworkGraphProps, NetworkGraphState> {
    render(): React.ReactNode;
  }
}
