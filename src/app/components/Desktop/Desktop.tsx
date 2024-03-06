"use client";
import React, { useState } from "react";
import useFetchBooks from "@/app/hooks/useFetchBooks";
import Menu from "../Menu/Menu";
import FilterMenu from "../FilterMenu/FilterMenu";
import EditCardMenu from "../EditCardMenu/EditCardMenu";
import CardList from "../CardList/CardList";
import AddCard from "../AddCard/AddCard";
import * as classes from "./Desktop.css";

export default function Desktop() {
  const [textFilter, setTextFilter] = useState("");
  const [showOffSale, setShowOffSale] = useState(true);
  const [showDrafts, setShowDrafts] = useState(true);
  const [currentMenu, setCurrentMenu] =
    useState("main-menu"); // main-menu, filter-menu, add-menu

  const response = useFetchBooks();

  if (!response || response.loading) {
    return (
      <div className={classes.transitionalState}>
        Loading...
      </div>
    );
  }

  if (response.error) {
    return (
      <div className={classes.transitionalState}>
        Error {response.error}
      </div>
    );
  }

  const { data } = response;

  const renderCurrentMenu = (showOffSale: boolean) => {
    switch (currentMenu) {
      case "main-menu":
        return <Menu setCurrentMenu={setCurrentMenu} />;
      case "filter-menu":
        return (
          <FilterMenu
            setCurrentMenu={setCurrentMenu}
            textFilter={textFilter}
            setTextFilter={setTextFilter}
            showOffSale={showOffSale}
            setShowOffSale={setShowOffSale}
            showDrafts={showDrafts}
            setShowDrafts={setShowDrafts}
          />
        );
      case "add-menu":
        return (
          <EditCardMenu setCurrentMenu={setCurrentMenu} />
        );
    }
  };

  const renderDesktopContent = (showOffSale: boolean) => {
    switch (currentMenu) {
      case "main-menu":
        return (
          <CardList
            data={data}
            textFilter={textFilter}
            showOffSale={showOffSale}
            showDrafts={showDrafts}
          />
        );
      case "filter-menu":
        return (
          <CardList
            data={data}
            textFilter={textFilter}
            showOffSale={showOffSale}
            showDrafts={showDrafts}
          />
        );
      case "add-menu":
        return <AddCard />;
    }
  };

  return (
    <div className={classes.desktop}>
      {renderDesktopContent(showOffSale)}
      {renderCurrentMenu(showOffSale)}
    </div>
  );
}
