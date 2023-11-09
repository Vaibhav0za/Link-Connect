import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";

const styles = makeStyles({
  loader: {
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  button: {
    width: "100%",
  },

  // Remove Image Btn
  removeBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  removeBtn: {
    marginTop: 5,
    marginRight: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    borderRadius: 5,
    position: "absolute",
    height: 22,
    width: 22,
    background: BaseColor.whiteColor,
  },

  // Camera Icon
  cameraIconBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  cameraIcon: {
    marginBottom: -4,
    marginRight: -4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    borderRadius: 15,
    position: "absolute",
    height: 30,
    width: 30,
    background: BaseColor.primary,
  },
});

export default styles;
