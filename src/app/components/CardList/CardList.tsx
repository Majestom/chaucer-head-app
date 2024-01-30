import React from "react";
import { BookItem } from "@/app/hooks/useFetchBooks";
import Card from "../Card/Card";
import * as classes from "./CardList.css";

export default function CardList({
  data,
  textFilter,
  showOffSale,
  showDrafts,
}: {
  data: BookItem[];
  textFilter: string;
  showOffSale: boolean;
  showDrafts: boolean;
}) {
  return (
    <div className={classes.cardList}>
      {data
        .filter((item: BookItem) => {
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
        .filter((item: BookItem) => {
          if (
            (item.onSale === false && showOffSale) ||
            item.onSale === true ||
            item.onSale === undefined // Todo: is this right?
          ) {
            return true;
          }
          return false;
        })
        .filter((item: BookItem) => {
          if (item.draft === true && !showDrafts) {
            return false;
          }
          return true;
        })
        .map((item: BookItem) => (
          <Card
            key={item.id}
            content={item}
            textFilter={textFilter}
          />
        ))}
    </div>
  );
}
