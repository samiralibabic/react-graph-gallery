import { data } from "./data";
import { NetworkGraph } from "./NetworkGraph";

export const NetworkGraphBasicDemo = ({ width = 700, height = 400 }) => (
  <NetworkGraph data={data} width={width} height={height} />
);
