import { style } from "@vanilla-extract/css";

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
  background: "#8E1EE7",
});

export const addButton = style({
  background: "#46E71E",
});

export const filterButton = style({
  background: "#E31EE7",
});

export const backButton = style({
  background: "#E78A1E",
});

export const imageButton = style({
  background: "#E3E71E",
});

export const label = style({
  fontSize: 20,
  color: "white",
});
