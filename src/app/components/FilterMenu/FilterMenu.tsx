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
      <form>
        <input
          type="text"
          className={classes.textInput}
        ></input>
      </form>
      <div>
        <label className={classes.switchLabel}>
          <input
            type="checkbox"
            checked={true}
            className={classes.switchInput}
          ></input>
          <span className={classes.sliderRound}></span>
        </label>
        <Button
          label={"Back"}
          className={"backButton"}
          icon={"/icons/back.svg"}
          onClick={setMenuOpen}
        />
      </div>
    </menu>
  );
}
