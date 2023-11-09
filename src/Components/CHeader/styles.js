import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";
import { FontFamily } from "../../Config/theme";

const styles = makeStyles({
  root: {
    position: "sticky",
    zIndex: 100,
    top: 0,
    display: "flex",
    alignSelf: "start",
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    backgroundColor: BaseColor.primary,
  },
  logo: {
    height: "65%",
    width: "70%",
    objectFit: "contain",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    border: `1px solid ${BaseColor.whiteColor}`,
    borderRadius: 3,
    color: BaseColor.whiteColor,
  },
  downArrowIcon: {
    fontSize: 22,
    color: BaseColor.whiteColor,
    transform: "rotate(90deg)",
  },
  searchInputContainer: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    padding: "0px 10px",
    borderRight: 1,
    borderLeft: 1,
    borderRightStyle: "solid",
    borderLeftStyle: "solid",
    borderRightColor: BaseColor.whiteColor,
    borderLeftColor: BaseColor.whiteColor,
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  allPostText: {
    marginLeft: "8px",
    fontSize: 18,
    fontFamily: FontFamily.Medium,
    color: BaseColor.whiteColor,
  },

  iconsContainer: {
    background: BaseColor.primary,
  },

  createPostBtn: {
    background: BaseColor.whiteColor,
    color: BaseColor.primary,
    height: 40,
    borderRadius: 3,
    padding: "5px 15px 5px 15px",
  },
  postIconContainer: {
    border: `2px solid ${BaseColor.primary}`,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createPostText: {
    marginLeft: "8px",
    fontSize: 16,
    fontFamily: FontFamily.Medium,
  },

  threeIconContainer: {
    borderRight: `1px solid ${BaseColor.whiteColor}`,
    display: "flex",
    justifyContent: "space-evenly",
  },

  userProfileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 20px",
  },
  userProfileImg: {
    height: 40,
    width: 40,
    borderRadius: 25,
    border: `1px solid ${BaseColor.whiteColor}`,
  },
});
export default styles;
