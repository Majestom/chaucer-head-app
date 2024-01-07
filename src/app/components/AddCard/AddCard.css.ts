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
  ":hover": {
    backgroundColor: "#AB9A6F",
    boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.75)",
  },
  ":active": {
    // backgroundColor: "#7A6E4E",
    boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.75)",
  },
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

// export const bookInfo = style({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "flex-start",
//   justifyContent: "flex-start",
//   gap: 10,
//   flex: 1,
// });

// export const titleText = style({
//   textAlign: "left",
// });

// export const authorText = style({
//   textAlign: "left",
// });

// export const descriptionText = style({
//   font: "Roboto",
//   fontSize: 12,
//   height: 100,
//   maxHeight: 100,
//   overflow: "auto",
// });

// export const filteredText = style({
//   backgroundColor: "yellow",
// });
