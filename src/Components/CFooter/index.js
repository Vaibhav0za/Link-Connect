import {
  ButtonBase,
  Grid,
  InputBase,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BaseColor from "../../Config/Color";
// import {
//   footerCompanyHeaderData,
//   footerLegalHeaderData,
// } from "../../Config/staticData";
import styles from "./styles";
import Files from "../../Config/Files";
import BaseSetting from "../../Apis/setting";
import { TfiFacebook, TfiTwitterAlt, TfiLinkedin } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { isMobile } from "react-device-detect";

const CFooter = () => {
  const classes = styles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      className={classes.container}
      paddingLeft={isMobile ? 2 : sm ? 5 : 15}
      paddingRight={isMobile ? 2 : sm ? 5 : 15}
    >
      <Grid
        container
        className={classes.topGridContainer}
        display={"flex"}
        justifyContent={"space-between"}
        wrap={md ? "wrap" : "nowrap"}
        gap={3}
      >
        <Grid item xs={12} sm={12} md={3} lg={1}>
          <div>
            <img
              src={Files.images.logo}
              className={classes.logo}
              style={{ width: 150 }}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          display={"flex"}
          justifyContent={"space-between"}
          gap={3}
        >
          <Grid item xs={12} sm={2.5} md={2}>
            <div className={classes.companyAndLegalHeaderTextContainer}>
              <span className={classes.companyAndLegalHeaderText}>COMPANY</span>
            </div>
            {/* {footerCompanyHeaderData.map((item) => {
              return (
                <div className={classes.companyAndLegalContainer}>
                  <span className={classes.companyAndLegalText}>
                    {item.title}
                  </span>
                </div>
              );
            })} */}
          </Grid>
          <Grid item xs={12} sm={2.5} md={2}>
            <div className={classes.companyAndLegalHeaderTextContainer}>
              <span className={classes.companyAndLegalHeaderText}>LEGAL</span>
            </div>
            {footerLegalHeaderData.map((item) => {
              return (
                <div className={classes.companyAndLegalContainer}>
                  <span className={classes.companyAndLegalText}>
                    {item.title}
                  </span>
                </div>
              );
            })}
          </Grid>
          <Grid item sm={6} md={7} className={classes.newsLetterMainContainer}>
            <div className={classes.newsLetterTextContainer}>
              <span className={classes.newsletterText}>Newsletter</span>
              <span className={classes.newsletterDescriptionText}>
                Subscribe to our newsletter to get the update news related to
                our latest properties and time-limited discounts.
              </span>
            </div>

            <div className={classes.emailInputContainer}>
              <InputBase
                style={{
                  width: "70%",
                  background: BaseColor.whiteColor,
                  color: BaseColor.blackColor,
                  marginLeft: 15,
                }}
                placeholder="Enter your e-mail address"
                InputProps={{ "aria-label": "description" }}
              />
              <ButtonBase
                style={{
                  width: "30%",
                  padding: "12px 12px 12px 12px",
                  background: BaseColor.primary,
                }}
              >
                <span className={classes.subscribeBtnText}>Subscribe</span>
              </ButtonBase>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        borderBottom={"1px solid white"}
        style={{ marginTop: 10, marginBottom: 10 }}
      />
      <Grid container gap={2} className={classes.bottomGridContainer}>
        <Grid>
          <span className={classes.copyRightText}>
            {BaseSetting.copyRightText}
          </span>
        </Grid>
        <Grid gap={1} className={classes.socialMainIconContainer}>
          <div className={classes.socialIconContainer}>
            <TfiFacebook className={classes.socialIcon} />
          </div>
          <div className={classes.socialIconContainer}>
            <BsInstagram className={classes.socialIcon} />
          </div>
          <div className={classes.socialIconContainer}>
            <TfiTwitterAlt className={classes.socialIcon} />
          </div>
          <div className={classes.socialIconContainer}>
            <TfiLinkedin className={classes.socialIcon} />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CFooter;
