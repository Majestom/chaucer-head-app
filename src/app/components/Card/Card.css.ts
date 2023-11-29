import { style } from "@vanilla-extract/css";

export const card = style({
  background: "none",
  border: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: 20,
  padding: 20,
  margin: 20,
  borderRadius: 10,
  color: "black",
  backgroundColor: "#E8D4A2",
  boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.75)",
  ":hover": {
    backgroundColor: "#AB9A6F",
  },
  ":active": {
    // backgroundColor: "#7A6E4E",
    boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.75)",
  },
});

export const bookInfo = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 10,
  flex: 1,
});

export const titleText = style({
  textAlign: "left",
});

export const authorText = style({
  textAlign: "left",
});

export const descriptionText = style({
  font: "Roboto",
  fontSize: 12,
  height: 100,
  maxHeight: 100,
  overflow: "auto",
});
