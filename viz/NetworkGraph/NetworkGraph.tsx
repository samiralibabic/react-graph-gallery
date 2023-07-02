import * as d3 from "d3";

type NetworkGraphData = {
  width: number;
  height: number;
  data: {
    nodes: { index: number; name: string }[];
    links: { source: number; target: number }[];
  };
};

export const NetworkGraph = ({ width, height, data }: NetworkGraphData) => {
  const { nodes, links } = data;

  const simulation = d3
    .forceSimulation()
    .nodes(nodes)
    .force("link", d3.forceLink(links))
    .force("charge", d3.forceManyBody().strength(-50))
    .force("center", d3.forceCenter(width / 2, height / 2));

  const linkElements = links.map((link, index) => (
    <line
      key={index}
      x1={link.source.x}
      y1={link.source.y}
      x2={link.target.x}
      y2={link.target.y}
      stroke="#ccc"
    />
  ));

  const nodeElements = nodes.map((node) => (
    <circle key={node.id} cx={node.x} cy={node.y} r={5} fill="#9d174d" />
  ));

  return (
    <div>
      <svg width={width} height={height}>
        <g>{linkElements}</g>
        <g>{nodeElements}</g>
      </svg>
    </div>
  );
};
