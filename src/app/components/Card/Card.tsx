import React from "react";
import Image from "next/image";
import * as classes from "./Card.css";

type CardContentType = {
  id: number;
  title: string;
  description?: string;
  author?: string;
};

export default function Card({
  content,
}: {
  content: CardContentType;
}) {
  return (
    <div className={classes.card}>
      <Image
        src="/images/1.png"
        alt={content.title}
        width={100}
        height={100}
      />
      <span className={classes.bookInfo}>
        <h2>{content.title}</h2>
        <p>{content.author}</p>
        <p className={classes.descriptionText}>
          {content.description}
        </p>
      </span>
    </div>
  );
}
