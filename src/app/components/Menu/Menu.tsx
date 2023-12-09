import React from "react";
import { Button } from "../Button/Button";
import * as classes from "./Menu.css";

export default function Menu() {
  return (
    <menu className={classes.menu}>
      <Button
        label={"Menu"}
        className={"menuButton"}
        icon={"/icons/menu.svg"}
      />
      <Button
        label={"Add"}
        className={"addButton"}
        icon={"/icons/add.svg"}
      />
      <Button
        label={"Filter"}
        className={"filterButton"}
        icon={"/icons/filter.svg"}
      />
    </menu>
  );
}
