import { style } from "@vanilla-extract/css";

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
  backgroundColor: "#97581F",
  boxShadow: "0px 0px 10px 8px rgba(0,0,0,0.75)",
});

export const textInput = style({
  height: 40,
  padding: 10,
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: 5,
  border: "none",
  margin: 10,
  fontSize: 16,
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
