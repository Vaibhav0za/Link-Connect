import { Grid } from "@mui/material";
import React from "react";
import styles from "./styles";

const CPageHeader = (props) => {

    const {title,subtitle,subsubtitle} = props;
  const classes = styles();

  return (
    <Grid container>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
      <Grid
        item
        xs={10}
        sm={10}
        md={10}
        lg={10}
        xl={10}
        className={classes.subContainer}
      >
        <span className={classes.headerText}>{title}{subtitle}{subsubtitle}</span>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
    </Grid>
  );
};

export default CPageHeader;
