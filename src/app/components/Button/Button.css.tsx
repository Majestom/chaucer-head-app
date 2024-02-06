import { style } from "@vanilla-extract/css";
import { colours } from "@/app/utils/vars";

export const button = style({
  flexGrow: 1,
  border: "none",
  borderRadius: 10,
  padding: 10,
  margin: 10,
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
});

export const buttonLayout = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 5,
});

export const menuButton = style({
  background: colours.vividPurple,
});

export const addButton = style({
  background: colours.vividGreen,
});

export const filterButton = style({
  background: colours.vividPink,
});

export const backButton = style({
  background: colours.vividOrange,
});

export const imageButton = style({
  background: colours.vividYellow,
});

export const label = style({
  fontSize: 20,
  color: "white",
});
