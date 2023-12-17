import React from "react";
import * as classes from "./ToggleSwitch.css";

export function ToggleSwitch({
  showLeft,
  setShowLeft,
  toggleLabel,
}: {
  showLeft: boolean;
  setShowLeft: (showLeft: boolean) => void;
  toggleLabel?: string;
}) {
  return (
    <div className={classes.toggleAndLabel}>
      <button
        className={classes.toggleSwitch}
        onClick={() => setShowLeft(!showLeft)}
      >
        <span
          className={
            showLeft
              ? classes.sliderOpen
              : classes.sliderClosed
          }
        ></span>
      </button>
      {toggleLabel}
    </div>
  );
}
