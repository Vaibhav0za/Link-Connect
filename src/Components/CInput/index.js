import { InputAdornment, TextField } from "@mui/material";
import styles from "./styles";
import BaseColor from "../../Config/Color";
import _ from "lodash";
import PropTypes from "prop-types";

const CInput = (props) => {
  const classes = styles();
  const {
    value = "",
    placeholder = "",
    size = "small",
    errorMsg = "",
    variant = "outlined",
    sx = {},
    onChange = () => {},
    startIcon,
    endIcon,
    multiline,
    rows,
    maxRows,
    readOnly = false,
    type,
    onKeyDown = () => {},
    onBlur = () => {},
    onFocus = () => {},
  } = props;
  return (
    <>
      <TextField
        placeholder={placeholder}
        variant={variant}
        size={size}
        value={value}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        type={type}
        sx={[{ width: "100%", backgroundColor: BaseColor.whiteColor }, sx]}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        InputProps={{
          readOnly: readOnly,
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">{endIcon}</InputAdornment>
          ),
        }}
        onKeyDown={onKeyDown}
      />
      {!_.isEmpty(errorMsg) && (
        <div className={classes.errorMsgContainer}>
          <span className={classes.errorMsgText}>{errorMsg}</span>
        </div>
      )}
    </>
  );
};

CInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
  errorMsg: PropTypes.string,
  sx: PropTypes.object,
  onChange: PropTypes.func,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
};

CInput.defaultProps = {
  value: "",
  placeholder: "",
  showError: false,
  errorMsg: "",
  sx: {},
  onChange: () => {},
};
export default CInput;
