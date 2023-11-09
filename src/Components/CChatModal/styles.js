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
    borderRadius:5,
    background: BaseColor.whiteColor,
    "&:focus": {
      outline: "none",
    },
  },
});

export default styles;
