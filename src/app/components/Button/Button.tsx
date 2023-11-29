import React from "react";
import Image from "next/image";
import * as classes from "./Button.css";

export default function Button({
  label,
}: {
  label: string;
}) {
  return (
    <button className={classes.button}>
      <div className={classes.buttonLayout}>
        <Image
          src={"/icons/menu.svg"}
          alt={label}
          width={20}
          height={20}
        />
        <label>{label}</label>
      </div>
    </button>
  );
}
