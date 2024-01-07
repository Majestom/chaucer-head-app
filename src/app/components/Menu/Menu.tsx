import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../Button/Button";
import * as classes from "./Menu.css";

export default function Menu({
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
        label={"Add"}
        className={"addButton"}
        icon={"/icons/add.svg"}
        onClick={() => setCurrentMenu("add-menu")}
      />
      <Button
        label={"Filter"}
        className={"filterButton"}
        icon={"/icons/filter.svg"}
        onClick={() => setCurrentMenu("filter-menu")}
      />
    </menu>
  );
}
