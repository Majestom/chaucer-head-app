import { style } from "@vanilla-extract/css";

export const card = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: 20,
  padding: 20,
  margin: 20,
  borderRadius: 10,
  color: "black",
  backgroundColor: "#E8D4A2",
});

export const bookInfo = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: 10,
  flex: 1,
});

export const descriptionText = style({
  font: "Roboto",
  fontSize: 12,
  height: 100,
  maxHeight: 100,
  overflow: "auto",
});
