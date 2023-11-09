import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";
import theme, { FontFamily } from "../../Config/theme";
import { isMobile } from "react-device-detect";

const styles = makeStyles({
  border: {
    border: `1px dashed ${BaseColor.primary}`,
  },
  shadow: {
    boxShadow: "0 0 10px 5px rgb(0 0 0 / 6%)",
  },
  singleImageContainer: {
    border: `1px dashed ${BaseColor.primary}`,
    height: 150,
    width: 150,
    color: BaseColor.primary,
    background: BaseColor.whiteColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 5,
    [theme.breakpoints.down("xl")]: {
      height: isMobile ? 80 : 105,
      width: isMobile ? 80 : 105,
    },
  },
  videoContainer: {
    height: 150,
    width: 150,
    background: BaseColor.whiteColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    [theme.breakpoints.down("xl")]: {
      height: isMobile ? 80 : 105,
      width: isMobile ? 80 : 105,
    },
  },
  multipleImageContainer: {
    boxShadow: "0 0 10px 5px rgb(0 0 0 / 6%)",
    height: 140,
    width: 140,
    color: BaseColor.primary,
    marginRight: 15,
    marginBottom: 15,
    background: BaseColor.whiteColor,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "relative",
    [theme.breakpoints.down("xl")]: {
      height: isMobile ? 85 : 105,
      width: isMobile ? 85 : 105,
      marginRight: isMobile ? 10 : 15,
      marginBottom: 15,
    },
  },
  multipleUploadImageContainer: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
    // zIndex: 10,
  },
  mainImageTextContainer: {
    bottom: 0,
    position: "absolute",
    height: "30%",
    width: "100%",
    background: `linear-gradient(to bottom, #00000000 20%,${BaseColor.primary}  100%)`,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: "0px 0px 5px 5px",
  },
  mainImageText: {
    fontSize: isMobile ? 12 : 16,
    color: BaseColor.whiteColor,
    marginBottom: 4,
  },
  singleUploadImageContainer: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
  singleImage: {
    objectFit: "fill",
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },

  createProfileContainer: {
    height: isMobile ? 120 : 80,
    width: isMobile ? 120 : 80,
    borderRadius: "100%",
    // display:'flex',
    border: `1px solid ${BaseColor.primary}`,
    [theme.breakpoints.down("md")]: {
      height: 80,
      width: 80,
    },
  },
  createProfileImageContainer: {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createProfileImage: {
    objectFit: "fill",
    height: "100%",
    width: "100%",
    borderRadius: "50%",
  },
  createProfilePlaceholderImg: {
    height: "80%",
    width: "80%",
    display: "flex",
    alignSelf: "center",
    borderRadius: "50%",
  },

  errorMsgContainer: {
    marginTop: 5,
    marginLeft: 2,
  },
  errorMsgText: {
    fontSize: 14,
    color: BaseColor.errorRed,
    fontFamily: FontFamily.Medium,
  },
});
export default styles;
