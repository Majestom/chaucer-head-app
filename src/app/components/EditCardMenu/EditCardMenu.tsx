import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../Button/Button";
import * as classes from "./EditCardMenu.css";

export default function EditCardMenu({
  setCurrentMenu,
}: {
  setCurrentMenu: Dispatch<SetStateAction<string>>;
}) {
  return (
    <menu className={classes.menu}>
      <Button
        label={"Menu"}
        className={"menuButton"}
        icon={"/icons/menu.svg"}
      />
      <Button
        label={"Put On Sale"}
        className={"addButton"}
        icon={"/icons/add.svg"}
        onClick={() => setCurrentMenu("add-menu")}
      />
      <Button
        label={"Back"}
        className={"backButton"}
        icon={"/icons/back.svg"}
        onClick={() => setCurrentMenu("main-menu")}
      />
    </menu>
  );
}
