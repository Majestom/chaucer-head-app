import React from "react";
import { Button, menuButtons } from "../Button/Button";
import * as classes from "./Menu.css";

export default function Menu() {
  return (
    <menu className={classes.menu}>
      {menuButtons.map(({ label, styleClass }) => (
        <Button
          key={label}
          label={label}
          className={styleClass}
        />
      ))}
    </menu>
  );
}
