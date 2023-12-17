import React, { useState } from "react";
import { Button } from "../Button/Button";
import * as classes from "./FilterMenu.css";

export default function FilterMenu({
  setMenuOpen,
}: {
  setMenuOpen: () => void;
}) {
  const [showOffsale, setShowOffsale] = useState(true);
  return (
    <menu className={classes.menu}>
      <input
        type="text"
        className={classes.textInput}
      ></input>
      <div>
        {/* <label className={classes.switchLabel}>
          <input
            type="checkbox"
            checked={true}
            className={classes.switchInput}
          ></input>
          <span className={classes.sliderRound}></span>
        </label> */}
        <button
          className={classes.toggleSwitch}
          onClick={() => setShowOffsale(!showOffsale)}
        >
          <span
            className={
              showOffsale
                ? classes.sliderOpen
                : classes.sliderClosed
            }
          ></span>
        </button>
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
