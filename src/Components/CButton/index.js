import React from "react";
import { Button } from "@mui/material";
import styles from "./styles";
import PropTypes from "prop-types";

const CButton = (props) => {
  const classes = styles();
  const {
    children,
    variant = "contained",
    color = "primary",
    loading,
    onClick,
    loaderStyle,
    removeImg,
    cameraIcon,
  } = props;

  return removeImg ? (
    <div className={classes.removeBtnContainer} onClick={onClick}>
      <div className={classes.removeBtn}>
      </div>
    </div>
  ) : cameraIcon ? (
    <div className={classes.cameraIconBtnContainer} onClick={onClick}>
      <div className={classes.cameraIcon}>
      </div>
    </div>
  ) : (
    <div className={classes.root}>
      <Button
        variant={variant}
        color={color}
        disabled={loading}
        onClick={onClick}
        className={classes.button}
        {...props}
      >
        {loading ? (
          <div
            style={{
              ...loaderStyle,
              position: "absolute",
              height: 40,
              width: 200,
              top: "-90%",
            }}
          ></div>
        ) : (
          children
        )}
      </Button>
    </div>
  );
};

CButton.propTypes = {
  color: PropTypes.string,
};

export default CButton;
