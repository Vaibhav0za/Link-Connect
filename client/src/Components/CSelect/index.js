import { MenuItem, Select } from "@mui/material";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import BaseColor from "../../Config/Color";
import styles from "./styles";
import _, { isArray, isEmpty, isObject } from "lodash";
import PropTypes from "prop-types";
import ReactCountryFlag from "react-country-flag";
import styled from "@emotion/styled";
import { FontFamily } from "../../Config/theme";
import CIcon from "../CIcon";

export default function CSelect(props) {
  const {
    onSelect = () => {},
    key = "",
    fullObj = false,
    country = false,
    placeholder = "",
    disabled = false,
    data = [],
    svgIcon = "",
    icon,
    errorMsg = "",
    value,
    readOnly = false,
    currency,
    style,
  } = props;
  const classes = styles();
  const SelectBase = styled(Select)({
    height: 44,
    background: BaseColor.whiteColor,
    fontFamily: FontFamily.Regular,
    color: `${BaseColor.blackColor} !important`,
    borderRadius: "5px !important",
    "& .MuiSelect-select": {
      marginLeft: 10,
    },
  });

  return (
    <div style={style}>
      <SelectBase
        value={value}
        displayEmpty
        placeholder={placeholder}
        onChange={(e) => {
          onSelect(e.target.value);
        }}
        disabled={disabled}
        IconComponent={KeyboardArrowDownOutlinedIcon}
        style={{
          color: BaseColor.primary,
          borderRadius: 10,
          padding: 0,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        readOnly={readOnly}
        renderValue={(value) => {
          const name = !_.isEmpty(value)
            ? !_.isEmpty(key)
              ? value[key]
              : isObject(value)
              ? value.name
              : value
            : "";
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {!_.isEmpty(svgIcon) ? (
                <CIcon
                  src={svgIcon}
                  style={{
                    marginRight: 10,
                  }}
                  className="CInputStartIcon"
                />
              ) : (
                icon
              )}
              {country ? (
                <ReactCountryFlag
                  svg
                  countryCode={value?.country_code}
                  style={{
                    marginRight: 10,
                    cursor: "default",
                  }}
                />
              ) : null}
              <span
                style={{
                  fontFamily: FontFamily.Regular,
                  color: !_.isEmpty(name)
                    ? BaseColor.textColor
                    : BaseColor.textGray,
                }}
              >
                {!_.isEmpty(name)
                  ? String(name).length > 35
                    ? `${name.slice(0, 35)}....`
                    : name
                  : currency
                  ? value
                  : placeholder}
              </span>
            </div>
          );
        }}
        className={classes.select}
        inputProps={{ "aria-label": "Without label" }}
        MenuProps={{
          sx: {
            "& .MuiSelect-root": {
              backgroundColor: BaseColor.pink,
              // color: BaseColor.white,
              marginLeft: 15,
              marginRight: 1,
              borderRadius: 1,
            },
            "& .MuiSelect-nativeInput": {
              backgroundColor: "pink",
            },
          },
        }}
      >
        <MenuItem selected disabled value="">
          <span
            style={{
              fontFamily: FontFamily.Regular,
              color: BaseColor.textGray,
            }}
          >
            {placeholder}
          </span>
        </MenuItem>
        {!isEmpty(data) &&
          isArray(data) &&
          data.map((item, index) => {
            const name = !_.isEmpty(key) ? item[key] : item.name;
            const allValue = fullObj ? item : name;
            return (
              <MenuItem value={allValue} className={classes.menu}>
                {country ? (
                  <ReactCountryFlag
                    svg
                    countryCode={item?.country_code}
                    style={{
                      marginRight: 10,
                    }}
                  />
                ) : null}
                {currency
                  ? `${item.currency_symbol} ${item.code}`
                  : String(name).length > 40
                  ? `${name.slice(0, 40)}....`
                  : name}
              </MenuItem>
            );
          })}
      </SelectBase>
      {!_.isEmpty(errorMsg) && (
        <div className={classes.errorMsgContainer}>
          <span className={classes.errorMsgText}>{errorMsg}</span>
        </div>
      )}
    </div>
  );
}

CSelect.propTypes = {
  onSelect: PropTypes.func,
  key: PropTypes.string,
  fullObj: PropTypes.bool,
  country: PropTypes.bool,
  placeholder: PropTypes.string,
  data: PropTypes.array,
  errorMsg: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
};
