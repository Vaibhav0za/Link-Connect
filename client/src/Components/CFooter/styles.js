import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";
import { FontFamily } from "../../Config/theme";

const styles = makeStyles({
  container: {
    background: BaseColor.primary,
  },
  topGridContainer: {
    minHeight: "220px",
    paddingTop: 30,
  },
  logo: {
    objectFit: "contain",
  },
  companyAndLegalMainContainer: {
    padding: "0px 15px 0px 15px",
    background: BaseColor.primary,
  },
  companyAndLegalContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  companyAndLegalText: {
    fontSize: 16,
    lineHeight: 2,
    fontFamily: FontFamily.Regular,
    textAlign: "left",
    color: BaseColor.whiteColor,
  },
  companyAndLegalHeaderTextContainer: {
    marginBottom: 15,
  },
  companyAndLegalHeaderText: {
    color: BaseColor.whiteColor,
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: FontFamily.SemiBold,
    textAlign: "left",
  },

  newsLetterMainContainer: {
    background: BaseColor.primary,
  },
  newsLetterTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  newsletterText: {
    fontSize: 22,
    fontFamily: FontFamily.SemiBold,
    letterSpacing: 1,
    color: BaseColor.whiteColor,
    textAlign: "left",
    marginBottom: 15,
  },
  newsletterDescriptionText: {
    fontSize: 13,
    fontFamily: FontFamily.Regular,
    color: BaseColor.whiteColor,
    textAlign: "left",
    lineHeight: 1.5,
  },
  emailInputContainer: {
    display: "flex",
    flexDirection: "row",
    background: BaseColor.whiteColor,
    padding: 2,
    marginTop: 10,
  },

  subscribeBtn: {},
  subscribeBtnText: {
    fontSize: 16,
    fontFamily: FontFamily.Bold,
    color: BaseColor.whiteColor,
  },

  bottomGridContainer: {
    minHeight: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Bottom First Grid Container
  copyRightText: {
    fontSize: 16,
    color: BaseColor.whiteColor,
    fontFamily: FontFamily.Medium,
  },

  // Bottom Second Grind Container
  socialMainIconContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  socialIconContainer: {
    border: `1px solid ${BaseColor.whiteColor}`,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 36,
  },
  socialIcon: {
    fontSize: 22,
    color: BaseColor.whiteColor,
  },
});

export default styles;
