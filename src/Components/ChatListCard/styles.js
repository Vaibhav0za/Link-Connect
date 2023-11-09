import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";
import { FontFamily } from "../../Config/theme";

const styles = makeStyles({
  profileImageContainer: {
    position: "relative",
    height: 50,
    width: 50,
    borderRadius: "50%",
    background: BaseColor.disablePrimary,
  },
  profileImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  cName: {
    fontFamily: FontFamily.Bold,
    fontSize: 14,
    opacity: 1,
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
  },
  uName: {
    fontFamily: FontFamily.Medium,
    fontSize: 12,
    color: BaseColor.textColor,
    opacity: 0.5,
  },
  message: {
    fontFamily: FontFamily.Medium,
    fontSize: 12,
  },
  time: {
    fontFamily: FontFamily.RobotoLight,
    fontSize: 10,
  },

  //active card style
  cNameA: {
    fontFamily: FontFamily.Bold,
    fontSize: 14,
    color: BaseColor.white,
    textOverflow: "ellipsis",
    WebkitLineClamp: 1,
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
  },
  uNameA: {
    fontFamily: FontFamily.Medium,
    fontSize: 12,
    color: BaseColor.white,
    opacity: 0.5,
  },
  messageA: {
    fontFamily: FontFamily.Medium,
    fontSize: 12,
    color: BaseColor.white,
  },
  timeA: {
    fontFamily: FontFamily.RobotoLight,
    fontSize: 10,
    color: BaseColor.white,
  },
});

export default styles;
