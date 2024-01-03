import React from "react";
import { Button } from "../Button/Button";
import * as classes from "./EditCardMenu.css";

export default function EditCardMenu({
  setEditMenuOpen,
}: {
  setEditMenuOpen: () => void;
}) {
  return (
    <menu className={classes.menu}>
      <Button
        label={"Back"}
        className={"backButton"}
        icon={"/icons/back.svg"}
        onClick={setEditMenuOpen}
      />
      <Button
        label={"Add"}
        className={"menuButton"}
        icon={"/icons/add.svg"}
      />
      <Button
        label={"Image"}
        className={"imageButton"}
        icon={"/icons/add.svg"}
      />
    </menu>
  );
}
