import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import { NetworkGraphBasicDemo } from "viz/NetworkGraph/NetworkGraphBasicDemo";
import { ToDoSection } from "component/UI/ToDoSection";

const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/network.html">
        network diagram
      </a>{" "}
      (also called Graphs) show <b>interconnections</b> between a set of
      entities. Each entity is represented by a <code>Node</code> (or vertice).
      Connections between nodes are represented through <code>Link</code>(s) (or
      edges).
    </p>
    <p>
      Building a network diagram with React and D3.js relies on the{" "}
      <code>d3-force</code> module that simulates the forces between nodes for
      us. <code>React</code> can then be used to draw everything in SVG. This
      page is a step by step tutorial with code sandboxes. It will teach you how
      to build a <code>NetworkDiagram</code> component.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a network diagram with React and D3."
      seoDescription="A step-by-step guide to build your very own network diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title="Network diagram"
        description={graphDescription}
        chartType="network"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset required to build a network diagram consists of <b>nodes</b>{" "}
        and <b>links</b> between those nodes.
      </p>
      <p>
        In javascript, this structure is and object with two{" "}
        <b>
          <code>arrays</code>
        </b>
        . The first array represents nodes and the second array represents
        links.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />

      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>NetworkDiagram</code> component that
        will be stored in a <code>NetworkDiagram.tsx</code> file. This component
        requires 3 props to render: a <code>width</code>, a <code>height</code>,
        some <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the network
        diagram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>NetworkDiagram</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>circle</code>, but it's React that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>

      <ToDoSection text="Add simulate function description"></ToDoSection>
      <ToDoSection text="Add node drawing description"></ToDoSection>
      <ToDoSection text="Add link drawing description"></ToDoSection>

      <ChartOrSandbox
        VizComponent={NetworkGraphBasicDemo}
        vizName={"NetworkGraphBasicDemo"}
        maxWidth={400}
        height={400}
        caption={"A basic demo of network chart."}
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="network" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="network" />
      {/*
      //
      // First chord diagram
      //
      */}

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
// object with two arrays
export const data = {
  nodes: [
    { id: 1, name: "Name 1" },
    { id: 2, name: "Name 2" },
    { id: 3, name: "Name 3" },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 3 },
  ],
};

`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

interface Node extends d3.SimulationNodeDatum {
  id: number;
  name: string;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: Node;
  target: Node;
}

type NetworkGraphData = {
  width: number;
  height: number;
  data: { nodes: Node[]; links: Link[] };
};

export const NetworkDiagram = ({ width, height, data }: NetworkGraphData) => {

  // read the data
  // create d3 force simulation
  // create node elements
  // create links elements
  // start simulation

  return (
    <div>
      <svg width={width} height={height}>
        // render all the nodes and links
      </svg>
    </div>
  );
};
`.trim();
