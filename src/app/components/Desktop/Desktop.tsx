import React from "react";
import Card from "../Card/Card";
import * as classes from "./Desktop.css";

const data = [
  {
    id: 1,
    title: "Master Richard Quyny",
    author: "Fripp, Edgar I",
    description:
      "Hardback, 8vo blue cloth boards, gilt titles, first edition, First impression, , 215pp. plus index, Good +/NoWrapper. Front board has slight marking to bottom right-hand corner. Block edge rough-cut and aged. A few lightly penciled lines marking certain passages in the test, also a (very) few lightly pencilled notes throughout. Page 214 of the index has small ink stains and a very few pages have slight ink stains to edges. Book also has very slight lean. Catalogue: Local Topography. Keywords: Quyney, Quiney, Quinee, Quinie, Queeny, Queeney, Queney, Queny, Quene, Quiny, Quinny.",
  },
  {
    id: 2,
    title: "bar",
    author: "Someone",
    description: "foo",
  },
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
