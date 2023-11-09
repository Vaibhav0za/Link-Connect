import { Grid } from "@mui/material";
import React from "react";
import { FontFamily } from "../../Config/theme";

export default function NoData(props) {
  const { Height } = props;
  return (
    <Grid
      item
      style={{
        height: Height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FontFamily.Medium,
      }}
    >
      No data found
    </Grid>
  );
}
