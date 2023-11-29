import { style } from "@vanilla-extract/css";

export const menu = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100vw",
  height: 144,
  display: "flex",
  flexDirection: "row",
  padding: 10,
  backgroundColor: "#97581F",
  boxShadow: "0px 0px 10px 8px rgba(0,0,0,0.75)",
});

// export const menuButton = style({
//   background: "#8E1EE7",
// });

// export const addButton = style({});

// export const filterButton = style({});
