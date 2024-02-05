"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SaleIndicator } from "../SaleIndicator/SaleIndicator";
import { DraftIndicator } from "../DraftIndicator/DraftIndicator";
import * as classes from "./Card.css";

type CardContentType = {
  id: number;
  title: string;
  description?: string;
  author?: string;
  price?: string;
  onSale?: boolean;
  draft?: boolean;
};

export default function Card({
  content,
  textFilter,
}: {
  content: CardContentType;
  textFilter: string;
}) {
  const [cardOpen, setCardOpen] = useState(false);

  const highlightText = (text: string) => {
    const parts = text.split(
      new RegExp(`(${textFilter})`, "gi")
    );
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() ===
          textFilter.toLowerCase() ? (
            <span key={i} className={classes.filteredText}>
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <button
      className={classes.card}
      onClick={() => setCardOpen(!cardOpen)}
    >
      <Image
        src={`/images/${content.id}`}
        alt={content.title}
        width={100}
        height={100}
      />
      <span className={classes.bookInfo}>
        <h2 className={classes.titleText}>
          {highlightText(content.title)}
        </h2>
        <p className={classes.authorText}>
          {content.author
            ? highlightText(content.author)
            : null}
        </p>
        <p className={classes.priceText}>
          {content.price ? content.price : null}
        </p>
        <div className={classes.statusIndicator}>
          <SaleIndicator onSale={content.onSale} />
          <DraftIndicator draft={content.draft} />
        </div>
        {cardOpen ? (
          <p className={classes.descriptionText}>
            {content.description}
          </p>
        ) : null}
      </span>
    </button>
  );
}
