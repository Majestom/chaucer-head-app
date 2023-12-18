import React, { useState } from "react";
import { Button } from "../Button/Button";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import * as classes from "./FilterMenu.css";

export default function FilterMenu({
  setMenuOpen,
  textFilter,
  setTextFilter,
}: {
  setMenuOpen: () => void;
  textFilter: string;
  setTextFilter: (text: string) => void;
}) {
  const [showOffsale, setShowOffsale] = useState(true);
  const [showDrafts, setShowDrafts] = useState(true);
  return (
    <menu className={classes.menu}>
      <input
        id="textFilter"
        type="text"
        className={classes.textInput}
        value={textFilter}
        onChange={(e) => setTextFilter(e.target.value)}
      ></input>
      <div className={classes.controls}>
        <div className={classes.toggles}>
          <ToggleSwitch
            showLeft={showOffsale}
            setShowLeft={setShowOffsale}
            toggleLabel={"Show Offsale?"}
          />
          <ToggleSwitch
            showLeft={showDrafts}
            setShowLeft={setShowDrafts}
            toggleLabel={"Show Drafts?"}
          />
        </div>
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
