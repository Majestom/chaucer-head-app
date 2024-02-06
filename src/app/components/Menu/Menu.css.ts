import { style } from "@vanilla-extract/css";
import { colours } from "@/app/utils/vars";

export const menu = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100vw",
  height: 144,
  display: "flex",
  flexDirection: "row",
  padding: 10,
  backgroundColor: colours.woodBrown,
  boxShadow: `0px 0px 10px 8px ${colours.shadowBlack}`,
});
