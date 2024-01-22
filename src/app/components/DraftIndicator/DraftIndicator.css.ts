import { style } from "@vanilla-extract/css";

export const nonDraftMarker = style({
  backgroundColor: "purple",
  borderRadius: 10,
  padding: 5,
  color: "white",
  fontSize: 12,
  fontWeight: "bold",
  alignSelf: "flex-start",
});

export const draftMarker = style({
  backgroundColor: "green",
  borderRadius: 10,
  padding: 5,
  color: "white",
  fontSize: 12,
  fontWeight: "bold",
  alignSelf: "flex-start",
});
