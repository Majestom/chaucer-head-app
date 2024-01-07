import React from "react";
import Card from "../Card/Card";

type BookItem = {
  id: number;
  title: string;
  author: string;
  description: string;
};

export default function CardList({
  data,
  textFilter,
}: {
  data: BookItem[];
  textFilter: string;
}) {
  return (
    <div>
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
