import React from "react";
import Image from "next/image";
import * as classes from "./Button.css";

type ButtonProps = {
  label: string;
  className: keyof typeof classes;
  icon: string;
};

export const menuButtons: ButtonProps[] = [
  {
    label: "Menu",
    className: "menuButton",
    icon: "/icons/menu.svg",
  },
  {
    label: "Add",
    className: "addButton",
    icon: "/icons/add.svg",
  },
  {
    label: "Filter",
    className: "filterButton",
    icon: "/icons/filter.svg",
  },
];

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
          width={20}
          height={20}
        />
        <label>{label}</label>
      </div>
    </button>
  );
}
