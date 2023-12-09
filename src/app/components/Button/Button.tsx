import React from "react";
import Image from "next/image";
import * as classes from "./Button.css";

type ButtonProps = {
  label: string;
  className: keyof typeof classes;
  icon: string;
};

export function Button({
  label,
  className,
  icon,
}: ButtonProps) {
  return (
    <button
      className={`${classes.button} ${classes[className]}`}
    >
      <div className={classes.buttonLayout}>
        <Image
          src={icon}
          alt={label}
          width={50}
          height={50}
        />
        <label className={classes.label}>{label}</label>
      </div>
    </button>
  );
}
