import React from "react";
import { Button } from "../Button/Button";
import * as classes from "./FilterMenu.css";

export default function FilterMenu() {
  return (
    <menu className={classes.menu}>
      <Button
        label={"Back"}
        className={"backButton"}
        icon={"/icons/back.svg"}
      />
    </menu>
  );
}
