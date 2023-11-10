import { Button, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./styles";
import _ from "lodash";
import CIcon from "../CIcon";
import Files from "../../Config/Files";
import BaseColor from "../../Config/Color";
import ReactCountryFlag from "react-country-flag";

const SellingCard = (props) => {
  const classes = styles();
  const {
    title,
    image,
    currencySymbol,
    price,
    countryImg,
    buy = true,
    check,
    verify,
    subscription,
    expired,
    unit,
    viewMoreBtn,
    onClick,
    countryCode,
  } = props;
  return (
    <div className={classes.main}>
      {expired === true ? (
        <div className={classes.expire}>
          <Typography className={classes.expireText}>EXPIRED</Typography>
        </div>
      ) : null}

      {!_.isEmpty(check) ? (
        <div className={classes.checkView}>
          <Checkbox />
        </div>
      ) : null}
      <div
        className={classes.buySellIconContainer}
        onClick={(e) => {
          e?.preventDefault();
          e?.stopPropagation();
        }}
      >
        <img
          src={buy ? Files.svgIcons.buyer : Files.svgIcons.seller}
          alt={buy ? "B" : "S"}
          className={classes.buySellIcon}
        />
      </div>
      {image ? (
        <div
          style={{
            height: 300,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <img src={image} alt={"watermark"} className={classes.img} />
        </div>
      ) : (
        <div
          style={{
            height: 300,
            width: "100%",
            background: BaseColor.lightPurple,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            // padding: "20px 20px 20px 0px",
          }}
        >
          <img
            src={Files?.svgIcons?.watermarkLogo}
            alt={"watermark"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",

              display: "flex",
              alignSelf: "center",
              backgroundColor: BaseColor.primary,
            }}
          />

          {/* <img
              src={image || Files?.images?.colorLogoVertical}
              alt={title}
              className={classes.img}
            /> */}
        </div>
      )}

      <div className={classes.desView}>
        {!_.isEmpty(title) ? (
          <span className={classes.title}>{title}</span>
        ) : null}
        <div className={classes.rowView}>
          <span className={classes.price}>
            {!_.isEqual(currencySymbol) &&
              !_.isNull(currencySymbol) &&
              !_.isUndefined(currencySymbol) &&
              `${currencySymbol}`}
            {!_.isNull(price) && !_.isString(price)
              ? ` ${price.toLocaleString({
                  style: "currency",
                })}`
              : "Price on Req."}
            {!_.isEmpty(unit) && ` / ${unit}`}
          </span>
          <div>
            {!_.isEmpty(verify) ? (
              <CIcon
                src={Files.svgIcons.fillVerified}
                size={20}
                className={classes.iconStyle}
              />
            ) : null}

            {!_.isEmpty(subscription) ? (
              <CIcon
                src={Files.svgIcons.fillSubscription}
                size={20}
                className={classes.iconStyle}
              />
            ) : null}

            {!_.isEmpty(countryCode) && !_.isNull(countryCode) && (
              <ReactCountryFlag
                svg
                countryCode={countryCode}
                style={{
                  fontSize: 24,
                  cursor: "default",
                }}
              />
            )}
          </div>
        </div>
        {viewMoreBtn ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <Button variant="contained" onClick={onClick}>
              View more
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SellingCard;
