import React from "react";
import * as classes from "./Card.css";

type CardContentType = { id: number; name: string };

export default function Card({
  content,
}: {
  content: CardContentType;
}) {
  return <div className={classes.card}>{content.name}</div>;
}
