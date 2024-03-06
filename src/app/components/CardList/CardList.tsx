import React from "react";
import { BookType } from "@/app/types/types";
import Card from "../Card/Card";
import * as classes from "./CardList.css";

export default function CardList({
  data,
  textFilter,
  showOffSale,
  showDrafts,
}: {
  data: BookType[];
  textFilter: string;
  showOffSale: boolean;
  showDrafts: boolean;
}) {
  return (
    <div className={classes.cardList}>
      {data
        .filter((item: BookType) => {
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
        .filter((item: BookType) => {
          if (
            (item.onSale === false && showOffSale) ||
            item.onSale === true ||
            item.onSale === undefined // Todo: is this right?
          ) {
            return true;
          }
          return false;
        })
        .filter((item: BookType) => {
          if (item.draft === true && !showDrafts) {
            return false;
          }
          return true;
        })
        .map((item: BookType) => (
          <Card
            key={item.id}
            content={item}
            textFilter={textFilter}
          />
        ))}
    </div>
  );
}
