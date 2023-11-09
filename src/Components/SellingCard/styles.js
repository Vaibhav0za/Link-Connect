import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";
import { FontFamily } from "../../Config/theme";
import { windowWidth } from "../../Config/Dimension";
import { isMobile, isTablet } from "react-device-detect";

const styles = makeStyles({
  main: {
    display: "flex",
    position: "relative",
    margin: 5,
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: BaseColor.whiteColor,
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: 10,
    boxShadow: "0 0 10px 2px rgb(0 0 0 / 10%)",
    // height: 280,
    // width: isMobile && !isTablet ? "100%" : 280,
    // "@media (min-width: 1500px)": {
    //   // height: 280,
    //   width: "100%",
    // },
    width:"100%"
  },
  img: {
    height: 300,
    width: isMobile && !isTablet ? "100%" : "100%",
    alignItems: "center",
    overflow: "hidden",
    "@media (min-width: 1500px)": {
      // height: 280,
      width: "100%",
    },
  },
  desView: {
    padding: 8,
  },
  title: {
    fontSize: 15,
    fontFamily: FontFamily.SemiBold,
  },
  rowView: {
    display: "flex",
    paddingTop: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 15,
    fontFamily: FontFamily.Bold,
    color: BaseColor.primary,
    textAlign: "center",
    justifyContent: "center",
  },
  countryImg: {
    height: 20,
    width: 25,
    justifyContent: "center",
  },
  buying: {
    position: "absolute",
    top: 15,
    zIndex: 1,
    height: 30,
    width: 30,
    right: 10,
    borderRadius: 5,
  },
  checkView: {
    top: 5,
    zIndex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
  },
  iconStyle: {
    marginRight: 5,
  },
  expire: {
    backgroundColor: BaseColor.primary,
    color: BaseColor.white,
    position: "absolute",
    width: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.Bold,
  },
  expireText: {
    fontFamily:`${FontFamily.Bold} !important`, 
    fontSize: "20px !imporatnt",
  },
  buySellIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 6,
    backgroundColor: BaseColor.whiteColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    boxShadow: "0 0 5px 2px rgb(103	65	136 / 20%)",
  },
  buySellIcon: {
    height: 15,
    width: 15,
    right: 10,
    borderRadius: 5,
  },
});

export default styles;
