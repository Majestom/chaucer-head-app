"use client";
import React, { useState } from "react";
import Card from "../Card/Card";
import Menu from "../Menu/Menu";
import FilterMenu from "../FilterMenu/FilterMenu";
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
    title: "More About Worzel Gummidge",
    author: `Todd, Barbara Euphan ("Euphan")`,
    description: `Hardback, 8vo (13cm x 19cm) red cloth boards, black titles, first edition, 1st impression, , 138pp. Black and white illustrations. Good/NoWrapper. Gift Inscription. Binding tight, slight "lean". Spine faded, corners bumped, top and bottom of spine slightly bumped, small closed tear to bottom of spine. Binding tight. Boards and spine have slight staining and grubiness. Page block has slight discolouration and fading. Foxing to free front and back endpapers. Pages generally clean with the (very) occasional mark and a few corners are creased where previous readers have marked their place. As the title says, more about the classic scarecrow, Worzel Gummidge.`,
  },
  {
    id: 3,
    title:
      "Rome and the Friendly King - The Character of Client Kingship",
    author: "Braund, David C.",
    description: `Hardback, 223mm x 137mm black cloth boards, gilt titles, first edition, 226pp. plus index, Very Good/Good +++. Book is tight and clean with no obvious imperfections. Dustwrapper is clean with minimal wear, just a little colour fading to spine, tanning to flaps. A keenly-researched account of how the Roman state worked with local and regional rulers during the late Republican and Imperial periods. Book is presented in a Courier font, right margin ragged. Catalogue: Greek / Roman culture.`,
  },
];

export default function Desktop() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [textFilter, setTextFilter] = useState("");
  return (
    <div className={classes.desktop}>
      {data
        .filter((item) => {
          if (textFilter === "") {
            return true;
          }
          return (
            item.title
              .toLowerCase()
              .includes(textFilter.toLowerCase()) ||
            item.author
              .toLowerCase()
              .includes(textFilter.toLowerCase())
          );
        })
        .map((item) => (
          <Card key={item.id} content={item} />
        ))}
      {menuOpen ? (
        <Menu setMenuOpen={() => setMenuOpen(!menuOpen)} />
      ) : (
        <FilterMenu
          setMenuOpen={() => setMenuOpen(!menuOpen)}
          textFilter={textFilter}
          setTextFilter={setTextFilter}
        />
      )}
    </div>
  );
}
