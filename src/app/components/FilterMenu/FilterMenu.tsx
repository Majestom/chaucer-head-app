import React from "react";
import { Button } from "../Button/Button";
import * as classes from "./FilterMenu.css";

export default function FilterMenu({
  setMenuOpen,
}: {
  setMenuOpen: () => void;
}) {
  return (
    <menu className={classes.menu}>
      <Button
        label={"Back"}
        className={"backButton"}
        icon={"/icons/back.svg"}
        onClick={setMenuOpen}
      />
    </menu>
  );
}
