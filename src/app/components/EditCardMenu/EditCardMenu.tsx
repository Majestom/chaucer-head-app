import React from "react";
import { Button } from "../Button/Button";
import * as classes from "./EditCardMenu.css";

export default function EditCardMenu() {
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
        label={"Back"}
        className={"backButton"}
        icon={"/icons/back.svg"}
        // onClick={setMenuOpen}
      />
    </menu>
  );
}
