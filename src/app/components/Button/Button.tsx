import React from "react";
import Image from "next/image";
import * as classes from "./Button.css";

type ButtonProps = {
  label: string;
  className: keyof typeof classes;
  icon: string;
  onClick?: () => void;
};

export function Button({
  label,
  className,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${classes.button} ${classes[className]}`}
      onClick={onClick}
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
