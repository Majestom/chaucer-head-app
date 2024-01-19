import { style } from "@vanilla-extract/css";

export const card = style({
  background: "none",
  border: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: 20,
  padding: 20,
  margin: 20,
  borderRadius: 10,
  color: "black",
  backgroundColor: "#E8D4A2",
  boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.75)",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  flexBasis: "100%",
});

export const inputHolder = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: 10,
  flex: 1,
  padding: 10,
  margin: 10,
});

export const formField = style({
  padding: 10,
  background: "white",
  color: "black",
  border: "none",
  borderRadius: 10,
});

export const buttonHolder = style({
  display: "flex",
  height: 144,
  padding: 10,
});

export const submitButton = style({
  flex: 1,
  padding: 10,
  margin: 10,
  backgroundColor: "#E71EE3",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  fontSize: 20,
  color: "white",
  ":hover": {
    opacity: 0.8,
    boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.75)",
  },
  ":active": {
    backgroundColor: "#7A6E4E",
    boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.75)",
  },
});

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
