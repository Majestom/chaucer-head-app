"use client";
import React, { useState } from "react";
import Image from "next/image";
import { imageArrayToBlobUrl } from "@/app/utils/helper";
import { BookType } from "@/app/types/types";
import { SaleIndicator } from "../SaleIndicator/SaleIndicator";
import { DraftIndicator } from "../DraftIndicator/DraftIndicator";
import * as classes from "./Card.css";

export default function Card({
  content,
  textFilter,
}: {
  content: BookType;
  textFilter: string;
}) {
  const [cardOpen, setCardOpen] = useState(false);

  if (!content.image?.data) {
    return;
  }
  const blobUrl = imageArrayToBlobUrl(content.image?.data);

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
      {blobUrl ? (
        <Image
          src={blobUrl}
          alt={`${content.title}`}
          width={100}
          height={100}
          unoptimized={true}
        />
      ) : null}
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
