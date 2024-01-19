import { style } from "@vanilla-extract/css";

export const onSaleMarker = style({
  backgroundColor: "green",
  borderRadius: 10,
  padding: 5,
  color: "white",
  fontSize: 12,
  fontWeight: "bold",
  alignSelf: "flex-start",
});

export const offSaleMarker = style({
  backgroundColor: "red",
  borderRadius: 10,
  padding: 5,
  color: "white",
  fontSize: 12,
  fontWeight: "bold",
  alignSelf: "flex-start",
});
