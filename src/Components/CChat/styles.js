import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";
import theme, { FontFamily } from "../../Config/theme";

const styles = makeStyles({
  chatImg: {
    height: 35,
    width: 35,
    borderRadius: 5,
    objectFit: "contain",
  },
  placeHolder: {
    height: 35,
    width: 35,
    borderRadius: 5,
    backgroundColor: BaseColor.disablePrimary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  placeHolderText: {
    fontSize: 18,
    fontFamily: FontFamily.Bold,
    color: BaseColor.whiteColor,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  scrollBar: {
    // display: "flex",

    // overflowX: "scroll",
    "&::-webkit-scrollbar": {
      width: 5,
      height: 5,
    },

    /* Track */
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px transperent",
      borderRadius: 10,
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: BaseColor.primary,
      borderRadius: 10,
    },

    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      boxShadow: "inset 0 0 5px grey",
    },
  },
  pdfImage: {
    objectFit: "fill",
    height: 25,
    width: 25,
    borderRadius: 5,
  },
});

export default styles;
