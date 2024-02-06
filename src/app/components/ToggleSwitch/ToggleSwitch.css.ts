import { style } from "@vanilla-extract/css";
import { colours } from "@/app/utils/vars";

export const toggleAndLabel = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const toggleSwitch = style({
  background: "none",
  color: "inherit",
  border: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  position: "relative",
  display: "inline-block",
  width: 60,
  height: 36,
});

export const switchInput = style({
  opacity: 0,
  width: 0,
  height: 0,
});

const sliderRound = style({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: colours.sliderBrown,
  borderRadius: 34,
  boxShadow: `inset 0px 0px 8px ${colours.anotherBlack}`,
});

export const sliderOpen = style([
  sliderRound,
  {
    ":before": {
      position: "absolute",
      content: '""',
      height: 26,
      width: 26,
      left: 4,
      bottom: 5,
      backgroundColor: colours.white,
      transition: ".4s",
      borderRadius: 34,
      boxShadow: `inset 0px 0px 4px ${colours.anotherBlack}`,
    },
  },
]);

export const sliderClosed = style([
  sliderRound,
  {
    ":before": {
      position: "absolute",
      content: '""',
      height: 26,
      width: 26,
      left: 30,
      bottom: 5,
      backgroundColor: "white",
      transition: ".4s",
      borderRadius: 34,
      boxShadow: `inset 0px 0px 4px ${colours.anotherBlack}`,
    },
  },
]);
