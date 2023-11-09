import { MenuItem, Select } from "@mui/material";
import React, { useState, useEffect } from "react";
import BaseColor from "../../Config/Color";
import styles from "./styles";
import PropTypes from "prop-types";
import ReactCountryFlag from "react-country-flag";
import styled from "@emotion/styled";
import { FontFamily } from "../../Config/theme";
import CIcon from "../CIcon";

// Import the necessary functions and variables
import { isEmpty, isArray } from "lodash";

export default function CSelectMultiple(props) {
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
    value = [],
    readOnly = false,
    currency,
    style,
  } = props;

  const classes = styles();
  const [selectedValue, setSelectedValue] = useState(Array.isArray(value) ? value : []);
  const SelectBase = styled(Select)({
    height: 44,
    background: BaseColor.whiteColor,
    fontFamily: FontFamily.Regular,
    borderRadius: "5px !important",
  });

  const handleSelectChange = (event) => {
    const selectedValues = event.target.value;
    setSelectedValue(selectedValues);
    onSelect(selectedValues);
  };

  // Ensure that value and selectedValue are synchronized
  useEffect(() => {
    setSelectedValue(Array.isArray(value) ? value : []);
  }, [value]);

  return (
    <div style={style}>
      <SelectBase
        multiple
        value={selectedValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleSelectChange}
        style={{
          color: BaseColor.primary,
          borderRadius: 10,
          padding: 0,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        readOnly={readOnly}
        renderValue={(selected) => (
          <div style={{display:'flex' , flexWrap:'wrap'}}>
            {selected.map((selectedItem) => (
              <span style={{marginRight:10}} key={selectedItem}>
                {selectedItem}
              </span>
            ))}
          </div>
        )}
        className={classes.select}
        inputProps={{ "aria-label": "Without label" }}
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
        {!isEmpty(data) && isArray(data) && data.map((item, index) => {
          const name = !isEmpty(key) ? item[key] : item.name;
          const allValue = fullObj ? item : name;
          
          return (
            <MenuItem key={index} value={allValue}>
              {country ? (
                <ReactCountryFlag
                  svg
                  countryCode={item?.country_code}
                  style={{
                    marginRight: 10,
                  }}
                />
              ) : null}
              {currency ? `${item.currency_symbol} ${item.code}` : String(name).length > 40 ? `${name.slice(0, 40)}....` : name}
            </MenuItem>
          );
        })}
      </SelectBase>
      {!isEmpty(errorMsg) && (
        <div className={classes.errorMsgContainer}>
          <span className={classes.errorMsgText}>{errorMsg}</span>
        </div>
      )}
    </div>
  );
}

CSelectMultiple.propTypes = {
  onSelect: PropTypes.func,
  key: PropTypes.string,
  fullObj: PropTypes.bool,
  country: PropTypes.bool,
  placeholder: PropTypes.string,
  data: PropTypes.array,
  errorMsg: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
};
