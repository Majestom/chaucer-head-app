import React from "react";
import Image from "next/image";
import * as classes from "./Button.css";

export type ButtonProps = {
  label: string;
  className: keyof typeof classes;
};

type MenuButtonsType = {
  label: string;
  styleClass: keyof typeof classes;
};

export const menuButtons: MenuButtonsType[] = [
  {
    label: "Menu",
    styleClass: "menuButton",
  },
  {
    label: "Add",
    styleClass: "addButton",
  },
  {
    label: "Filter",
    styleClass: "filterButton",
  },
];

export function Button({ label, className }: ButtonProps) {
  return (
    <button
      className={`${classes.button} ${classes[className]}`}
    >
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
