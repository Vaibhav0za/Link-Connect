import * as React from "react";
import PropTypes from "prop-types";
import { useTheme, styled } from "@mui/material/styles";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import DoneIcon from "@mui/icons-material/Done";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import ButtonBase from "@mui/material/ButtonBase";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import BaseColor from "../../Config/Color";
import { FontFamily } from "../../Config/theme";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import _, { isArray, isEmpty, multiply } from "lodash";
import { IconButton, Popover, Typography, useMediaQuery } from "@mui/material";
import { IoClose } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";
import CIcon from "../CIcon";

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: `1px solid  ${
        theme.palette.mode === "light" ? " #eaecef" : "#30363d"
      }`,
      '&[aria-selected="true"]': {
        backgroundColor: "transparent",
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative",
  },
}));

function PopperComponent(props) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

PopperComponent.propTypes = {
  anchorEl: PropTypes.any,
  disablePortal: PropTypes.bool,
  open: PropTypes.bool.isRequired,
};

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${BaseColor.blackColor}`,
  boxShadow: `0 10px 24px ${
    theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"
  }`,
  borderRadius: 5,
  // width: "500px",
  zIndex: theme.zIndex.modal,
  fontSize: 14,
  color: theme.palette.mode === "light" ? "#24292e" : "#c9d1d9",
  backgroundColor: BaseColor.whiteColor,
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",
  "& input": {
    borderRadius: 5,
    backgroundColor: BaseColor.whiteColor,
    padding: 8,
    border: `1px solid ${BaseColor.primary}`,
    fontSize: 14,
    fontFamily: FontFamily.Medium,
    "&:focus": {
      borderColor: BaseColor.primary,
    },
  },
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  fontSize: 15,
  width: "100%",
  textAlign: "left",
  backgroundColor: BaseColor?.whiteColor,
  color: BaseColor.textGray,
  fontFamily: FontFamily.Regular,
  borderRadius: "5px",
  "& span": {
    width: "100%",
  },
  "& :hover": {
    outline: "0px",
  },
  "& svg": {
    width: 16,
    height: 16,
  },
}));

export default function CAutoComplete(props) {
  const {
    options = [],
    label,
    multiple = false,
    selectedValue = multiple ? [] : "",
    onSelect = () => {},
    disabled = false,
    errorMsg = "",
    style,
    currency,
    completeRef,
    popOverStyle,
    phoneCode,
    readOnly,
    svgIcon,
    icon,
    subCategory = false,
  } = props;
  const theme = useTheme();

  const buttonRef = React.useRef(null);

  const [buttonWidth, setButtonWidth] = React.useState("");
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef?.current?.getBoundingClientRect().width;
      setButtonWidth(buttonWidth);
    }
  }, [buttonRef]);

  const handleResize = () => {
    setWindowWidth(Window?.innerWidth);
    if (buttonRef?.current) {
      const buttonWidth = buttonRef?.current.getBoundingClientRect().width;
      setButtonWidth(buttonWidth);
    }
  };

  window.addEventListener("resize", handleResize);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([]);
  const [pendingValue, setPendingValue] = React.useState([]);

  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
    // setValue(pendingValue);
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  return (
    <React.Fragment>
      <Box
        style={{
          width: "100%",
          fontSize: 13,
          outline: !disabled
            ? `${BaseColor.primary} solid 1px`
            : `${BaseColor.textGray} solid 0.5px `,
          borderRadius: "5px",
          "& :hover": {
            outline: `${BaseColor.primary} solid 2px`,
          },
          ...style,
        }}
        ref={buttonRef}
      >
        <Button
          disableRipple
          aria-describedby={id}
          disabled={disabled || readOnly}
          onClick={handleClick}
          style={{
            width: "100%",
            height: !multiple && 44,
            minHeight: multiple && "44px",
            maxHeight: multiple && null,
          }}
        >
          <span
            style={{
              fontFamily: FontFamily.Medium,
              fontSize: "16px",
              color: BaseColor.textGray,
              width: "100%",
            }}
          >
            {multiple && !isEmpty(selectedValue) ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {selectedValue?.map((item, index) => {
                  return (
                    <div
                      style={{
                        margin: "5px 5px",
                        width: "auto",
                        padding: "2px 8px",
                        background: BaseColor.primary,
                        display: "flex",
                        marginRight: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: 5,
                        maxWidth: "80px",
                      }}
                    >
                      <span
                        style={{
                          width: "95%",
                          fontSize: 14,
                          fontFamily: FontFamily.SemiBold,
                          fontWeight: "900",
                          color: BaseColor.whiteColor,
                          textOverflow: "ellipsis",
                          WebkitLineClamp: 1,
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                        }}
                      >
                        {item?.name}
                      </span>
                      <IconButton
                        size="small"
                        style={{ padding: 0 }}
                        onClick={(e) => {
                          const tempArr = selectedValue;
                          tempArr.splice(index, 1);
                          onSelect([...tempArr]);
                          e.stopPropagation();
                        }}
                      >
                        <IoClose size={22} color={BaseColor.whiteColor} />
                      </IconButton>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <div style={{ display: "flex" }}>
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
                  {!isEmpty(selectedValue) ? (
                    <span
                      style={{
                        fontFamily: FontFamily.Medium,
                        color: disabled
                          ? BaseColor.textGray
                          : BaseColor.textColor,
                      }}
                    >
                      {currency ? (
                        selectedValue?.currency_symbol
                      ) : phoneCode ? (
                        <>
                          <ReactCountryFlag
                            svg
                            countryCode={selectedValue?.country_code}
                            // cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                            // cdnSuffix="svg"
                            style={{
                              fontSize: 15,
                              cursor: "default",
                            }}
                          />{" "}
                          <span style={{ marginLeft: "5px" }}>
                            {selectedValue?.phone_code}
                          </span>
                        </>
                      ) : (
                        selectedValue?.name
                      )}
                    </span>
                  ) : (
                    label
                  )}
                </div>

                {anchorEl ? (
                  <KeyboardArrowUpOutlinedIcon
                    style={{
                      color: BaseColor?.primary,
                      height: "25px",
                      width: "25px",
                    }}
                  />
                ) : (
                  <KeyboardArrowDownOutlinedIcon
                    style={{
                      color: BaseColor?.primary,
                      height: "25px",
                      width: "25px",
                    }}
                  />
                )}
              </div>
            )}
          </span>
        </Button>
      </Box>
      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        style={{ width: buttonWidth }}
        placement={(phoneCode || currency) && "bottom-start"}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Autocomplete
              open
              multiple={multiple}
              onClose={(event, reason) => {
                if (reason === "escape") {
                  handleClose();
                }
              }}
              value={isArray(selectedValue) ? selectedValue : null}
              onChange={(event, newValue, reason) => {
                setPendingValue(newValue);
                if (subCategory) {
                  newValue.map((item, index) => {
                    item.selected = true;
                  });
                }
                console.log("newValue---------->", newValue);
                onSelect(newValue);
                if (!multiple) {
                  handleClose();
                }
              }}
              PopperComponent={PopperComponent}
              noOptionsText={
                <div style={{ backgroundColor: BaseColor.whiteColor }}>
                  No Data
                </div>
              }
              renderOption={(props, option, { selected }, index) => {
                return (
                  <li
                    {...props}
                    style={{ backgroundColor: BaseColor.whiteColor }}
                    key={index}
                  >
                    <Box
                      component={selected && DoneIcon}
                      sx={{
                        width: 17,
                        height: 17,
                        mr: "5px",
                        ml: multiple ? "2px" : "-20px",
                      }}
                      style={{
                        // visibility: selected ? "visible" : "hidden",
                        border: multiple && `1px solid ${BaseColor.primary}`,
                        borderRadius: "3px",
                      }}
                    />
                    <Box
                      sx={{
                        flexGrow: 1,
                        fontFamily: FontFamily.Medium,
                        fontSize: "15px",
                        "& span": {
                          color:
                            theme.palette.mode === "light"
                              ? "#586069"
                              : "#8b949e",
                        },
                      }}
                    >
                      {currency ? (
                        option.currency_symbol + " " + option.currency_code
                      ) : phoneCode ? (
                        <>
                          <ReactCountryFlag
                            svg
                            countryCode={option?.country_code}
                            // cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                            // cdnSuffix="svg"
                            style={{
                              fontSize: 15,
                              cursor: "default",
                            }}
                          />{" "}
                          <span style={{ marginLeft: "5px" }}>
                            {option?.phone_code}
                          </span>
                        </>
                      ) : (
                        option.name
                      )}
                    </Box>
                  </li>
                );
              }}
              options={[...options].sort((a, b) => {
                // Display the selected labels first.
                let ai = value.indexOf(a);
                ai = ai === -1 ? value.length + options.indexOf(a) : ai;
                let bi = value.indexOf(b);
                bi = bi === -1 ? value.length + options.indexOf(b) : bi;
                return ai - bi;
              })}
              getOptionLabel={(option) =>
                phoneCode
                  ? option.phone_code + " " + option.name
                  : currency
                  ? option?.currency_symbol +
                    " " +
                    option?.currency_code +
                    " " +
                    option?.name
                  : option?.name
              }
              renderInput={(params) => {
                return (
                  <StyledInput
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                    autoFocus
                    placeholder={
                      phoneCode || currency ? "Search..." : `Search ${label}...`
                    }
                  />
                );
              }}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>

      <Typography
        style={{
          fontSize: 14,
          color: BaseColor.errorRed,
          fontFamily: FontFamily.Medium,
          marginTop: "5px",
        }}
      >
        {errorMsg}
      </Typography>
    </React.Fragment>
  );
}
