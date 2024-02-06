import { style } from "@vanilla-extract/css";
import { colours } from "@/app/utils/vars";

export const menu = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100vw",
  height: 200,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  padding: 10,
  backgroundColor: colours.woodBrown,
  boxShadow: `0px 0px 10px 8px ${colours.shadowBlack}`,
});

export const textInput = style({
  height: 40,
  padding: 10,
  backgroundColor: colours.dirtyCard,
  color: colours.black,
  borderRadius: 5,
  border: `1px solid ${colours.black}`,
  margin: 10,
  fontSize: 16,
  boxShadow: `inset 0px 0px 4px ${colours.anotherBlack}`,
});

export const controls = style({
  display: "flex",
  alignItems: "center",
});

export const toggles = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  margin: 10,
});
