import { style } from "@vanilla-extract/css";

export const card = style({
  background: "none",
  border: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: 20,
  padding: 20,
  margin: 20,
  borderRadius: 10,
  color: "black",
  backgroundColor: "#E8D4A2",
  boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.75)",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  flexBasis: "100%",
});

export const inputHolder = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: 10,
  flex: 1,
  padding: 10,
  margin: 10,
});

export const formField = style({
  padding: 10,
  background: "white",
  color: "black",
  border: "none",
  borderRadius: 10,
});

export const buttonHolder = style({
  display: "flex",
  height: 144,
  padding: 10,
});

export const button = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  border: "none",
  borderRadius: 10,
  padding: 10,
  margin: 10,
  cursor: "pointer",
  background: "#46E71E",
  ":hover": {
    opacity: 0.8,
  },
  ":active": {
    opacity: 0.6,
  },
});
