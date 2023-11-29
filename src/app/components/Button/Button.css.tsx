import { style } from "@vanilla-extract/css";

export const button = style({
  width: "100%",
  border: "none",
  borderRadius: 10,
  padding: 10,
  margin: 10,
  cursor: "pointer",
});

export const menuButton = style({});

export const buttonLayout = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
