import React from "react";
import Button from "../Button/Button";
import * as classes from "./Menu.css";

export default function Menu() {
  return (
    <menu className={classes.menu}>
      <Button label={"Menu"} />
      <Button label={"Add"} />
      <Button label={"Filter"} />
    </menu>
  );
}
