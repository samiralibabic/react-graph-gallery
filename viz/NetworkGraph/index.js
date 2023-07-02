import ReactDOM from "react-dom";
import { data } from "./data/";
import { NetworkGraph } from "./NetworkGraph";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <NetworkGraph data={data} width={400} height={400} />,
  rootElement
);
