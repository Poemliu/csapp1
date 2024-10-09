import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

const text = 1111;
const TextP = () => <p>{text}</p>;
const Marker = ({ props1 }) => (
  <div>
    <p>{props1}</p>
  </div>
);
const Map = ({ props1, props2 = 100 }) => (
  <div>
    <Marker props1={props1}></Marker>
    <p>{props2}</p>
  </div>
);
export default function Gallery() {
  const [fs, setFs] = useState(0);

  return (
    <section>
      <TextP />
      <Map props1={fs} />
      <li className="item">{isPacked ? 1 + " ✅" : 1}</li>
    </section>
  );
}
