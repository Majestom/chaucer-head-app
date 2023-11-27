import React from "react";
import Card from "../Card/Card";
import * as classes from "./Desktop.css";

const data = [
  { id: 1, name: "foo" },
  { id: 2, name: "bar" },
];

export default function Desktop() {
  return (
    <div className={classes.desktop}>
      {data.map((item) => (
        <Card key={item.id} content={item} />
      ))}
    </div>
  );
}
