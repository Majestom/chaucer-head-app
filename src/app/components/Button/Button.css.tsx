import { style } from "@vanilla-extract/css";

export const button = style({
  width: "100%",
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
});

export const menuButton = style({
  background: "#8E1EE7",
});

export const addButton = style({
  background: "#46E71E",
});

export const filterButton = style({
  background: "#E31EE7",
});
