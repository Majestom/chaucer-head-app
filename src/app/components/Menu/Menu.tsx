import React from "react";
import { Button, menuButtons } from "../Button/Button";
import * as classes from "./Menu.css";

export default function Menu() {
  return (
    <menu className={classes.menu}>
      {menuButtons.map(({ label, className, icon }) => (
        <Button
          key={label}
          label={label}
          className={className}
          icon={icon}
        />
      ))}
    </menu>
  );
}
