import { style } from "@vanilla-extract/css";

export const menu = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100vw",
  height: 200,
  display: "flex",
  flexDirection: "column",
  padding: 10,
  backgroundColor: "#97581F",
  boxShadow: "0px 0px 10px 8px rgba(0,0,0,0.75)",
});

export const textInput = style({
  width: "100%",
  height: 40,
  padding: 10,
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: 5,
  border: "none",
  marginBottom: 10,
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
});
