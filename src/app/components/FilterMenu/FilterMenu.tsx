import React, {
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Button } from "../Button/Button";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import * as classes from "./FilterMenu.css";

export default function FilterMenu({
  setCurrentMenu,
  textFilter,
  setTextFilter,
  showOffSale,
  setShowOffSale,
}: {
  setCurrentMenu: Dispatch<SetStateAction<string>>;
  textFilter: string;
  setTextFilter: (text: string) => void;
  showOffSale: boolean;
  setShowOffSale: Dispatch<SetStateAction<boolean>>;
}) {
  // const [showOffsale, setShowOffsale] = useState(true);
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
            showLeft={showOffSale}
            setShowLeft={setShowOffSale}
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
          onClick={() => setCurrentMenu("main-menu")}
        />
      </div>
    </menu>
  );
}
