import { style } from "@vanilla-extract/css";
import { colours } from "@/app/utils/vars";

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
  backgroundColor: colours.dirtyCard,
  boxShadow: `10px 10px 10px 0px ${colours.shadowBlack}`,
  ":hover": {
    backgroundColor: colours.dirtierCard,
    boxShadow: `5px 5px 10px 0px ${colours.shadowBlack}`,
  },
  ":active": {
    boxShadow: `5px 5px 10px 0px ${colours.shadowBlack}`,
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

export const priceText = style({
  textAlign: "left",
});

export const soldText = style({});

export const draftText = style({});

export const descriptionText = style({
  font: "Roboto",
  fontSize: 12,
  height: 100,
  maxHeight: 100,
  overflow: "auto",
});

export const filteredText = style({
  backgroundColor: "yellow",
});

export const statusIndicator = style({
  display: "flex",
  gap: 10,
});
