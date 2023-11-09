import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";

const styles = makeStyles({
  scrollBar: {
    display: "flex",
    // overflowX: "scroll",
    "&::-webkit-scrollbar": {
      width: 5,
    },

    /* Track */
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px transparent",
      borderRadius: 10,
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: BaseColor.disablePrimary,
      borderRadius: 10,
    },

    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      boxShadow: "inset 0 0 5px grey",
    },
  },
});

export default styles;
