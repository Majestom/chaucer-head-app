import { style } from "@vanilla-extract/css";

export const desktop = style({
  height: "calc(100vh - 144px)",
  overflowY: "auto",
  backgroundColor: "#085E10",
  padding: 20,
  display: "flex",
  flexDirection: "column",
});
