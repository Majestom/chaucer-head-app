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

/* Switch */

export const switchLabel = style({
  position: "relative",
  display: "inline-block",
  width: 60,
  height: 30,
});

export const switchInput = style({
  opacity: 0,
  width: 0,
  height: 0,
});

export const sliderRound = style({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#ccc",
  transition: ".4s",
  borderRadius: 34,
  ":before": {
    position: "absolute",
    content: '""',
    height: 26,
    width: 26,
    left: 2,
    bottom: 2,
    backgroundColor: "white",
    transition: ".4s",
    borderRadius: 34,
  },
});
