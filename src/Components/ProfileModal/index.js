import {
  Grid,
  IconButton,
  Radio,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BaseColor from "../../Config/Color";
import Files from "../../Config/Files";
import theme, { FontFamily } from "../../Config/theme";
import styled from "@emotion/styled";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CModal from "../CModal";
import { FaCrown } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import { isMobile } from "react-device-detect";
import styles from "./styles";
// import authActions from "../../Redux/Reducers/auth/actions";
import { useSelector } from "react-redux";
import _, { isEmpty, isObject } from "lodash";
import CIcon from "../CIcon";
import { getApiData } from "../../Apis/apiHelper";
import BaseSetting from "../../Apis/setting";
import { toast } from "react-toastify";
import moment from "moment";
import { BsStarFill } from "react-icons/bs";
import { reportList } from "../../Config/staticData";
import CInput from "../CInput";
import CButton from "../CButton";
import { useNavigate } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

// style for rating component
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: BaseColor.primary,
  },
});

export default function ProfileModal(props) {
  const { handlePress = () => null, userId, open = false } = props;
  const { userData, accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [data, setData] = useState({});

  // rating state
  const [ratingValue, setRatingValue] = useState("");

  // report modal state
  const [reportModal, setReportModal] = useState(false);
  const [reportModalBtnLoader, setReportModalBtnLoader] = useState(false);
  const [selectedReport, setSelectedReport] = useState({});
  const [reportUserComment, setReportUserComment] = useState("");

  const userPersonalInfo =
    !_.isEmpty(userData?.personal_info) &&
    !_.isNull(userData?.personal_info) &&
    !_.isUndefined(userData?.personal_info)
      ? userData?.personal_info
      : null;

  const classes = styles();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (!_.isEmpty(accessToken) && open) {
      getUserDataApiCall(userId);
      getUserRating();
    }
  }, [ratingValue, open]);

  async function getUserDataApiCall(id) {
    try {
      const response = await getApiData(
        BaseSetting.endpoint.getUserModelData,
        "POST",
        { user_id: id, login_user_id: userData?.personal_info?.id }
      );
      if (response?.status) {
        if (isObject(response?.data) && !isEmpty(response?.data)) {
          setData(response?.data);
          setRatingValue(response?.data?.ratings);
        }
      } else {
        toast(response?.message, { type: "error" });
      }
    } catch (error) {
      toast(error.toString(), { type: "error" });
    }
  }

  // apply user rating api integration
  async function getRatingApiCall(rate) {
    try {
      const response = await getApiData(BaseSetting.endpoint.rateUser, "POST", {
        user_id: userId,
        rate: rate,
      });
      if (response?.status) {
      } else {
      }
    } catch (error) {}
  }

  // get user rating value api integration
  async function getUserRating() {
    try {
      const response = await getApiData(
        BaseSetting.endpoint.getUserRating,
        "POST",
        { user_id: userId, page: 1 }
      );
      if (response?.status) {
      } else {
      }
    } catch (error) {}
  }

  //  report user modal validation
  const reportUserValidation = () => {
    if (_.isEmpty(selectedReport)) {
      toast("Please select anyone option", { type: "error" });
    } else if (selectedReport?.id == 4 && reportUserComment.trim() === "") {
      toast("Please enter you comment", { type: "warning" });
    } else {
      ReportUserApi();
    }
  };

  // report user api integration
  const ReportUserApi = () => {
    setReportModalBtnLoader(true);
    const data = {
      user_id: userId,
      type: selectedReport.id,
      description: reportUserComment,
    };
    const endpoint = BaseSetting.endpoint.reportUser;
    getApiData(endpoint, "post", data)
      .then((result) => {
        if (result.status) {
          setReportModalBtnLoader(false);
          setReportModal(false);
          setSelectedReport({});
          setReportUserComment("");
          toast(result.message, { type: "success" });
        } else {
          setReportModalBtnLoader(false);
          toast(result.message, { type: "error" });
        }
      })
      .catch((err) => {
        setReportModalBtnLoader(false);
        toast(err.message, { type: "error" });
      });
  };

  return (
    <>
      <CModal
        visible={open}
        onClose={() => handlePress(false)}
        children={
          <Grid style={{ position: "relative" }}>
            <Grid
              container
              style={{
                width: md ? "80vw" : "600px",
                maxHeight: "80vh",
                overflowY: "scroll",
              }}
              className={classes.scrollBar}
            >
              <CloseIcon
                onClick={() => handlePress(false)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 15,
                  fontSize: 30,
                  cursor: "pointer",
                  color: BaseColor.primary,
                }}
              />
              <Grid container justifyContent={"center"} mt={3} mb={3}>
                <Typography
                  style={{
                    fontFamily: FontFamily.Medium,
                    fontSize: "24px",
                    color: BaseColor.textColor,
                  }}
                >
                  User Profile
                </Typography>
              </Grid>
              <Grid
                // item
                container
                wrap={md ? "wrap" : "nowrap"}
                justifyContent={md && "center"}
                padding={isMobile ? "0 30px" : "0 50px"}
              >
                <Grid item>
                  <div
                    style={{ position: "relative", cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/user-profile/${data?.personal_info?.id}`);
                    }}
                  >
                    <img
                      src={data?.user_image || Files?.svgIcons?.user}
                      alt={"Profile_image"}
                      style={{
                        maxWidth: 130,
                        maxHeight: 130,
                        minHeight: 130,
                        minWidth: 130,
                        borderRadius: "50%",
                        border: `0.5px solid ${BaseColor.primary}`,
                        cursor: "pointer",
                      }}
                    />
                    {data?.personal_info?.status === "1" ? (
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: BaseColor.activeStatus,
                          borderRadius: "50%",
                          position: "absolute",
                          bottom: 15,
                          right: 4,
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: BaseColor.red,
                          borderRadius: "50%",
                          position: "absolute",
                          bottom: 15,
                          right: 4,
                        }}
                      />
                    )}
                  </div>
                </Grid>
                <Grid
                  container
                  wrap="wrap"
                  justifyContent={md && "center"}
                  ml={!md && 4}
                >
                  <Grid
                    item
                    xs={12}
                    textAlign={md && "center"}
                    onClick={() => {
                      navigate(`/user-profile/${data?.personal_info?.id}`);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <Typography
                      style={{
                        fontFamily: FontFamily.Bold,
                        fontSize: "20px",
                      }}
                    >
                      {data?.personal_info?.first_name}{" "}
                      {data?.personal_info?.last_name}
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: FontFamily.RobotoMedium,
                        color: BaseColor.disablePrimary,
                        fontSize: "16px",
                        padding: isMobile ? 0 : "10px 0",
                      }}
                    >
                      Member since:{" "}
                      {moment(data?.personal_info?.createdAt).format(
                        "DD-MM-yyyy"
                      ) || "blank"}
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: FontFamily.RobotoMedium,
                        color: BaseColor.disablePrimary,
                        fontSize: "16px",
                        paddingBottom: 13,
                      }}
                    >
                      Last seen:{" "}
                      {moment(data?.last_seen).format("DD-MM-yyyy | hh:mm ") ||
                        "Blank"}{" "}
                      (IST)
                    </Typography>
                  </Grid>
                  <Grid item xs={12} textAlign={md && "center"}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: md && "center",
                        alignItems: "center",
                      }}
                    >
                      {data?.personal_info?.isVerified ? (
                        <CIcon
                          style={{
                            marginRight: "8px",
                          }}
                          src={Files.svgIcons.fillVerified}
                          size={22}
                        />
                      ) : null}
                      {data?.personal_info?.isPrimary && (
                        <div
                          style={{
                            backgroundColor: BaseColor.primary,
                            padding: "3px 3px",
                            borderRadius: 5,
                            display: "flex",
                            alignItems: "center",
                            marginRight: "8px",
                          }}
                        >
                          <CIcon
                            src={Files.svgIcons.fillSubscription}
                            style={{ color: BaseColor.offWhite }}
                          />
                        </div>
                      )}
                      {!_.isEmpty(data?.personal_info?.country_code) &&
                        !_.isNull(data?.personal_info?.country_code) && (
                          <ReactCountryFlag
                            svg
                            countryCode={data?.personal_info?.country_code}
                            // cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                            // cdnSuffix="svg"
                            style={{
                              fontSize: 24,
                              cursor: "default",
                              // boxShadow: "0 0 5px 2px rgb(103	65	136 / 20%)",
                            }}
                          />
                        )}
                      <div
                        style={{
                          backgroundColor: BaseColor.primary,
                          color: BaseColor.offWhite,
                          padding: "5px 10px",
                          borderRadius: 5,
                          marginLeft: 30,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {Number(data?.personal_info?.avg_rating)?.toFixed(1) ||
                          0}{" "}
                        <BsStarFill style={{ marginLeft: 3 }} />
                      </div>
                      <div
                        style={{
                          border: `1px solid ${BaseColor.primary}`,
                          color: BaseColor.primary,
                          display: "flex",
                          alignItems: "center",
                          padding: "5px 10px",
                          borderRadius: 5,
                          cursor: "pointer",
                          marginLeft: 8,
                        }}
                        onClick={() => setReportModal(true)}
                      >
                        Report
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justifyContent={"center"}>
                <Typography
                  style={{
                    fontFamily: FontFamily.Medium,
                    fontSize: "18px",
                    padding: isMobile ? "10px" : "15px",
                    color: BaseColor.textGray,
                  }}
                >
                  {data?.both_follow
                    ? "You both are following each other"
                    : null}
                </Typography>
              </Grid>
              <Grid
                container
                rowGap={1}
                padding={isMobile ? "0 20px 20px" : "0 50px 30px"}
              >
                <Grid
                  item
                  container
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    padding: "14px 22px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                    }}
                  >
                    Rating
                  </Typography>

                  {!_.isEmpty(accessToken) && (
                    <StyledRating
                      name="half-rating"
                      value={ratingValue}
                      size="large"
                      onChange={(event, newValue) => {
                        getRatingApiCall(newValue);
                        setRatingValue(newValue);
                      }}
                    />
                  )}
                </Grid>
                <Grid
                  // item
                  container
                  wrap="nowrap"
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    padding: "14px 22px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                    }}
                  >
                    Business name
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                      color: BaseColor.textGray,
                      textAlign: "end",
                    }}
                  >
                    {data?.business_info?.name || "blank"}
                  </Typography>
                </Grid>
                <Grid
                  // item
                  container
                  wrap="nowrap"
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    padding: "14px 22px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                    }}
                  >
                    Business type
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                      color: BaseColor.textGray,
                      textAlign: "end",
                    }}
                  >
                    {data?.business_info?.type || "blank"}
                  </Typography>
                </Grid>
                <Grid
                  // item
                  container
                  wrap="nowrap"
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    padding: "14px 22px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                    }}
                  >
                    Mobile number
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                      color: BaseColor.textGray,
                      textAlign: "end",
                    }}
                  >
                    {data?.personal_info?.phone || "blank"}
                  </Typography>
                </Grid>
                <Grid
                  // item
                  container
                  wrap="nowrap"
                  gap={3}
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    padding: "14px 22px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                      color: BaseColor.textGray,
                      textAlign: "end",
                      wordWrap: "break-word",
                      whiteSpace: "break-spaces",
                      overflow: "hidden",
                    }}
                  >
                    {data?.personal_info?.email || "blank"}
                  </Typography>
                </Grid>
                <Grid
                  // item
                  container
                  wrap="nowrap"
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    padding: "14px 22px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                    }}
                  >
                    Landline number
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                      color: BaseColor.textGray,
                      textAlign: "end",
                    }}
                  >
                    {data?.business_info?.landline_number || "blank"}
                  </Typography>
                </Grid>
                <Grid
                  // item
                  container
                  wrap="nowrap"
                  gap={3}
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    padding: "14px 22px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                    }}
                  >
                    Website
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                      color: BaseColor.textGray,
                      textAlign: "end",
                      wordWrap: "break-word",
                      whiteSpace: "break-spaces",
                      overflow: "hidden",
                    }}
                  >
                    {data?.business_info?.website || "blank"}
                  </Typography>
                </Grid>
                <Grid
                  // item
                  container
                  wrap="nowrap"
                  gap={3}
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    padding: "14px 22px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      fontSize: "18px",
                      color: BaseColor.textGray,
                      textAlign: "end",
                      wordWrap: "break-word",
                      whiteSpace: "break-spaces",
                      overflow: "hidden",
                    }}
                  >
                    {data?.business_info?.city || "blank"},
                    {data?.business_info?.state || "blank"},
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
      />
      <CModal
        visible={reportModal}
        onClose={() => {
          setReportModal(false);
          setSelectedReport({});
          setReportUserComment("");
        }}
        // style={{ width: "24%" }}
        style={{ width: isMobile ? "75%" : "" }}
      >
        <div style={{ padding: "20px 25px 30px 25px", position: "relative" }}>
          <CloseIcon
            onClick={() => {
              setReportModal(false);
              setSelectedReport({});
              setReportUserComment("");
            }}
            style={{
              position: "absolute",
              top: 10,
              right: 15,
              fontSize: 30,
              cursor: "pointer",
              color: BaseColor.primary,
            }}
          />
          <Grid
            container
            justifyContent={"center"}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              style={{
                color: BaseColor.textColor,
                fontFamily: FontFamily.SemiBold,
                margin: "10px 0px 25px 0px",
               fontSize: isMobile ? 16 : 18,
              }}
            >
              Report user
            </Typography>
            <Grid container>
              {reportList.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    marginBottom: 10,
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "row",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      setSelectedReport(item);
                      setReportUserComment("");
                    }}
                  >
                    <Radio
                      checked={item.id == selectedReport.id}
                      id={item?.id}
                    />
                    <label
                      for={item?.id}
                      style={{
                        fontSize: isMobile ? 14 : 16,
                        fontFamily: FontFamily.SemiBold,
                        cursor: "pointer",
                      }}
                    >
                      {item.title}
                    </label>
                  </div>
                </Grid>
              ))}
              {selectedReport?.id == 4 ? (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    marginBottom: 10,
                    borderRadius: "5px",
                    padding: "5px 5px",
                  }}
                >
                  <CInput
                    placeholder={"Specify here..."}
                    variant="standard"
                    value={reportUserComment}
                    onChange={(val) => {
                      setReportUserComment(val);
                    }}
                    disableUnderline
                    multiline
                    rows={6}
                    style={{
                      fontSize: 18,
                      fontFamily: FontFamily.Medium,
                      backgroundColor: BaseColor.offWhite,
                    }}
                  />
                </Grid>
              ) : null}
            </Grid>
          </Grid>
          <CButton
            loading={reportModalBtnLoader}
            style={{ marginTop: "10px" }}
            onClick={() => {
              reportUserValidation();
            }}
            variant="contained"
          >
            Submit
          </CButton>
        </div>
      </CModal>
    </>
  );
}
