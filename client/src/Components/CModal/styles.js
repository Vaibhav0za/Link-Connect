import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";

const styles = makeStyles({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(3px)",
  },
  modalContainer: {
    outline: 0,
    maxHeight: "80vh",
    overflowY: "auto",
    borderRadius: 5,
    background: BaseColor.whiteColor,
    "&:focus": {
      outline: "none",
    },
  },
  scrollBar: {
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
});

export default styles;
