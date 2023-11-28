"use client";
import React, { useState } from "react";
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
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <button
      className={classes.card}
      onClick={() => setCardOpen(!cardOpen)}
    >
      <Image
        src="/images/1.png"
        alt={content.title}
        width={100}
        height={100}
      />
      <span className={classes.bookInfo}>
        <h2>{content.title}</h2>
        <p>{content.author}</p>
        {cardOpen ? (
          <p className={classes.descriptionText}>
            {content.description}
          </p>
        ) : null}
      </span>
    </button>
  );
}
