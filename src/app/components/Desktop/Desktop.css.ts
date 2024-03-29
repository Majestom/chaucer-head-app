import { style } from "@vanilla-extract/css";
import { colours } from "@/app/utils/vars";

export const desktop = style({
  height: "calc(100vh - 144px)",
  overflowY: "auto",
  backgroundColor: colours.baizeGreen,
  padding: 20,
  display: "flex",
  flexDirection: "column",
});

export const transitionalState = style({
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});
