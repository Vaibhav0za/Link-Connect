/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import {
  Grid,
  IconButton,
  Link,
  ListItemButton,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Files from "../../Config/Files";
import CIcon from "../CIcon";
import BaseColor from "../../Config/Color";
import theme, { FontFamily } from "../../Config/theme";
import styles from "./styles";
import ReactCountryFlag from "react-country-flag";
import _ from "lodash";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { isMobile } from "react-device-detect";

const CChat = (props) => {
  const {
    isPosted = false,
    productBar = false,
    productImage = "",
    productName = "",
    productPrice = "",
    countryCode = "in",
    onClickProduct = () => {},

    chatSender = false,
    senderImage = "",
    senderName = "",
    senderMsg = "",
    senderMsgTime = "",

    chatReceiver = false,
    receiverImage = "",
    receiverName = "",
    languageList = [],
    translatedText = "",
    onTranslateClick = () => {},
    onSelectLanguage = () => {},
    receiverMsg = "",
    isTyping = false,
    onImageClick,
    receiverMsgTime = "",
    isTypeImage,
    isVideo,
    fileUrl,
  } = props;

  const imageSplit = _.isString(fileUrl) ? fileUrl.split(".") : null;
  const nameSplit = _.isString(fileUrl) ? fileUrl.split("/") : null;
  const fileType = !_.isEmpty(imageSplit)
    ? imageSplit[imageSplit.length - 1]
    : "";
  const fileName = !_.isEmpty(nameSplit) ? nameSplit[nameSplit.length - 1] : "";

  const classes = styles();
  //  use md & mediaquery for responsive
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.down("xs"));

  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const pop = Boolean(isTranslateOpen);
  const id = pop ? "simple-popover" : undefined;

  return (
    <>
      {productBar ? (
        <Grid
          container
          lg={12}
          xl={12}
          style={{
            backgroundColor: BaseColor.primary,
            borderRadius: 5,
            zIndex: 5,
            padding: "8px 12px",
            display: "flex",
            position: "absolute",
            width: xl ? "96.5%" : "97.5%",
            top: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: sm ? "flex-start" : "flex-end",
                marginRight: 10,
                // width: isMobile ? "40%" : "35%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {!sm ? (
                  !_.isEmpty(productImage) &&
                  !_.isUndefined(productImage) &&
                  !_.isNull(productImage) ? (
                    <img
                      alt="product_image"
                      src={productImage}
                      className={classes.chatImg}
                    />
                  ) : (
                    <div className={classes.placeHolder}>
                      <span className={classes.placeHolderText}>
                        {productName?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>
                  )
                ) : (
                  ""
                )}
              </div>
              <div
                style={{ marginLeft: sm ? 10 : 15, wordBreak: "break-word" }}
              >
                <Typography
                  style={{
                    fontSize: 14,
                    fontFamily: FontFamily.SemiBold,
                    fontWeight: "900",
                    color: BaseColor.white,
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 1,
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                  }}
                >
                  {productName}
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // width: md || xs ? "100%" : "60%",
              }}
            >
              <span
                style={{
                  fontSize: sm ? 10 : 14,
                  fontFamily: FontFamily.RobotoBold,
                  fontWeight: "900",
                  color: BaseColor.white,
                  padding: sm ? "0 10px" : "0px 20px",
                  borderRight: 1,
                  borderRightStyle: "solid",
                  borderRightColor: BaseColor.whiteColor,
                  borderLeft: 1,
                  borderLeftStyle: "solid",
                  borderLeftColor: BaseColor.whiteColor,
                }}
              >
                {productPrice}
              </span>
              <div
                style={{
                  marginLeft: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ReactCountryFlag
                  countryCode={countryCode}
                  svg
                  style={{
                    fontSize: sm ? 18 : 24,
                    marginLeft: sm ? "5px" : "10px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    cursor: isPosted ? "pointer" : "default",
                    pointerEvents: !isPosted && "none",
                    opacity: isPosted ? 1 : 0.5,
                  }}
                  onClick={onClickProduct}
                >
                  <Link
                    style={{
                      fontSize: sm ? 10 : 14,
                      margin: "0px 10px",
                      fontFamily: FontFamily.SemiBold,
                      fontWeight: "900",
                      color: BaseColor.white,
                    }}
                  >
                    Go to product
                  </Link>
                  <CIcon
                    src={Files.svgIcons?.forward}
                    style={{
                      cursor: "pointer",
                      marginTop: 2,
                      width: sm && "15px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      ) : chatSender ? (
        <Grid
          container
          marginBottom="20px"
          paddingLeft={isMobile ? "35%" : "25%"}
          wrap="nowrap"
          style={{
            marginLeft: "auto",
            flexDirection: "row-reverse",
          }}
        >
          <Grid item>
            {!_.isEmpty(senderImage) && _.isString(senderImage) ? (
              <img
                style={{
                  height: sm ? 40 : 50,
                  width: sm ? 40 : 50,
                  objectFit: "contain",
                  borderRadius: "50%",
                  margin: "0 0 0 10px",
                }}
                src={senderImage}
                alt="profile_img"
              />
            ) : (
              <div style={{ margin: "0 0 0 10px" }}>
                <FaUserCircle
                  size={md ? 40 : isMobile ? 30 : 50}
                  color={BaseColor.disablePrimary}
                />
              </div>
            )}
          </Grid>

          <Grid item alignItems={"center"}>
            {!_.isEmpty(senderName) && !_.isEmpty(senderMsgTime) && (
              <Grid
                item
                xs={12}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"row-reverse"}
                style={{
                  wordBreak: "break-word",
                }}
              >
                <span
                  style={{
                    color: BaseColor.textColor,
                    fontFamily: FontFamily.SemiBold,
                    fontWeight: "900",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                    fontSize: xs && isMobile ? 10 : isMobile ? 12 : 16,
                  }}
                >
                  {senderName}
                </span>
                <div
                  style={{
                    height: 5,
                    width: 5,
                    borderRadius: "100%",
                    backgroundColor: BaseColor.blackColor,
                    margin: "0px 8px",
                  }}
                />
                <span
                  style={{
                    color: BaseColor.numberText,
                    fontSize: xs ? 8 : sm ? 10 : 12,
                    fontFamily: FontFamily.RobotoRegular,
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 1,
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                  }}
                >
                  {senderMsgTime}
                </span>
              </Grid>
            )}
            {!_.isEmpty(senderMsg) || isTypeImage ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Grid
                  item
                  style={{
                    backgroundColor: BaseColor.whiteColor,
                    border: `0.5px solid ${BaseColor.disablePrimary}`,
                    borderRadius: "18px 0px 18px 18px",
                    marginTop: 2,
                    wordBreak: "break-word",
                  }}
                >
                  <div
                    style={{
                      padding:
                        isTypeImage || isVideo
                          ? "1px 1px"
                          : sm
                          ? "4px 10px"
                          : "6px 15px",
                    }}
                  >
                    {isTypeImage ? (
                      <div>
                        {fileType === "pdf" ? (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              maxWidth: md ? 180 : 250,
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              const pdfUrl = fileUrl;
                              window.open(pdfUrl, "_blank");
                            }}
                          >
                            <img
                              src={Files?.images?.pdf}
                              alt="uploadImage"
                              className={classes.pdfImage}
                            />
                            <div style={{ marginLeft: 5 }}>
                              <span
                                style={{
                                  fontSize: 12,
                                  fontFamily: FontFamily.RobotoBold,
                                  fontWeight: "900",
                                  color: BaseColor.blackColor,
                                  textOverflow: "ellipsis",
                                  WebkitLineClamp: 1,
                                  overflow: "hidden",
                                  WebkitBoxOrient: "vertical",
                                  display: "-webkit-box",
                                }}
                              >
                                {fileName}
                              </span>
                            </div>
                          </div>
                        ) : fileType === "doc" ? (
                          <a href={fileUrl} download>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                maxWidth: md ? 180 : 250,
                              }}
                            >
                              <img
                                src={Files?.images?.doc}
                                alt="uploadImage"
                                className={classes.pdfImage}
                              />
                              <div style={{ marginLeft: 5 }}>
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontFamily: FontFamily.RobotoBold,
                                    fontWeight: "900",
                                    color: BaseColor.blackColor,
                                    textOverflow: "ellipsis",
                                    WebkitLineClamp: 1,
                                    overflow: "hidden",
                                    WebkitBoxOrient: "vertical",
                                    display: "-webkit-box",
                                  }}
                                >
                                  {fileName}
                                </span>
                              </div>
                            </div>
                          </a>
                        ) : (
                          <div
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={onImageClick}
                          >
                            <img
                              src={fileUrl}
                              style={{
                                height: md ? 180 : 250,
                                width: md ? 180 : 250,
                                objectFit: "cover",
                                borderRadius: "15px 0px 15px 15px",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ) : isVideo ? (
                      <div
                        onClick={onImageClick}
                        style={{
                          height: md ? 130 : 200,
                          width: md ? 130 : 200,
                          objectFit: "contain",
                          background: BaseColor.textGray,
                          borderRadius: "15px 0px 15px 15px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <BsPlayCircle size={50} color={BaseColor.whiteColor} />
                      </div>
                    ) : (
                      <span
                        style={{
                          fontSize: sm || isMobile ? 12 : 16,
                          fontFamily: FontFamily.Medium,
                          color: BaseColor.textColor,
                          lineHeight: 1.5,
                        }}
                      >
                        {senderMsg}
                      </span>
                    )}
                  </div>
                </Grid>
              </div>
            ) : null}
          </Grid>
        </Grid>
      ) : chatReceiver ? (
        <Grid
          container
          marginBottom="20px"
          paddingRight={isMobile ? "35%" : "25%"}
          wrap="nowrap"
        >
          <Grid item>
            {!_.isEmpty(receiverImage) && _.isString(receiverImage) ? (
              <img
                style={{
                  height: sm ? 40 : 50,
                  width: sm ? 40 : 50,
                  objectFit: "contain",
                  borderRadius: "50%",
                  margin: "0 10px 0 0",
                }}
                src={receiverImage}
                alt=""
              />
            ) : (
              <div style={{ margin: "0 10px 0 0" }}>
                <FaUserCircle size={md ? 40 : 50} color={BaseColor.primary} />
              </div>
            )}
          </Grid>
          <Grid item alignItems={"center"}>
            {!_.isEmpty(receiverName) &&
              !_.isEmpty(receiverMsgTime) &&
              !isTyping && (
                <Grid
                  item
                  alignItems={"center"}
                  display={"flex"}
                  flexDirection={"row"}
                  style={{
                    wordBreak: "break-word",
                  }}
                >
                  <span
                    style={{
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 1,
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      display: "-webkit-box",
                      fontSize: xs && isMobile ? 10 : isMobile ? 12 : 16,
                      color: BaseColor.textColor,
                      fontFamily: FontFamily.SemiBold,
                      fontWeight: "900",
                    }}
                    data-hover={receiverName}
                  >
                    {receiverName}
                  </span>
                  {!_.isEmpty(receiverMsgTime) && (
                    <>
                      <div
                        style={{
                          height: 6,
                          width: 6,
                          borderRadius: "100%",
                          backgroundColor: BaseColor.blackColor,
                          color: BaseColor.blackColor,
                          margin: "0 5px",
                        }}
                      />
                      <span
                        style={{
                          color: BaseColor.numberText,
                          fontSize: xs ? 8 : sm ? 10 : 12,
                          fontFamily: FontFamily.RobotoRegular,
                          textOverflow: "ellipsis",
                          WebkitLineClamp: 1,
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                        }}
                      >
                        {receiverMsgTime}
                      </span>
                    </>
                  )}
                </Grid>
              )}
            {!_.isEmpty(receiverMsg) || isTyping || isTypeImage || isVideo ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Grid
                  item
                  style={{
                    backgroundColor: BaseColor.offWhite,
                    border: `0.5px solid ${BaseColor.disablePrimary}`,
                    borderRadius: "0px 18px 18px 18px",
                    marginTop: 2,
                    wordBreak: "break-word",
                  }}
                >
                  <div
                    style={{
                      padding:
                        isTypeImage || isVideo
                          ? "1px 1px"
                          : sm
                          ? "4px 10px"
                          : "6px 15px",
                    }}
                  >
                    {isTyping ? (
                      <div
                        style={{
                          position: "relative",
                          height: 15,
                          width: 55,
                        }}
                      >
                        <div
                          style={{
                            top: "-325%",
                            left: "-100%",
                            height: 50,
                            width: 150,
                            position: "absolute",
                          }}
                        >
                          <Lottie
                            style={{ zIndex: 1 }}
                            animationData={Files.lottie.typing}
                            loop={true}
                          />
                        </div>
                      </div>
                    ) : isTypeImage ? (
                      <div>
                        {fileType === "pdf" ? (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              maxWidth: md ? 180 : 250,
                              cursor: "pointer",
                            }}
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   const pdfUrl = fileUrl;
                            //   window.open(pdfUrl, "_blank");
                            // }}
                          >
                            <img
                              src={Files?.images?.pdf}
                              alt="uploadImage"
                              className={classes.pdfImage}
                            />
                            <div style={{ marginLeft: 5 }}>
                              <span
                                style={{
                                  fontSize: 12,
                                  fontFamily: FontFamily.RobotoBold,
                                  fontWeight: "900",
                                  color: BaseColor.blackColor,
                                  textOverflow: "ellipsis",
                                  WebkitLineClamp: 1,
                                  overflow: "hidden",
                                  WebkitBoxOrient: "vertical",
                                  display: "-webkit-box",
                                }}
                              >
                                {fileName}
                              </span>
                            </div>
                          </div>
                        ) : fileType === "doc" ? (
                          <a href={fileUrl} download>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                maxWidth: md ? 180 : 250,
                              }}
                            >
                              <img
                                src={Files?.images?.doc}
                                alt="uploadImage"
                                className={classes.pdfImage}
                              />
                              <div style={{ marginLeft: 5 }}>
                                <span
                                  style={{
                                    fontSize: 12,
                                    fontFamily: FontFamily.RobotoBold,
                                    fontWeight: "900",
                                    color: BaseColor.blackColor,
                                    textOverflow: "ellipsis",
                                    WebkitLineClamp: 1,
                                    overflow: "hidden",
                                    WebkitBoxOrient: "vertical",
                                    display: "-webkit-box",
                                  }}
                                >
                                  {fileName}
                                </span>
                              </div>
                            </div>
                          </a>
                        ) : (
                          <div
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={onImageClick}
                          >
                            <img
                              src={fileUrl}
                              style={{
                                height: md ? 180 : 250,
                                width: md ? 180 : 250,
                                borderRadius: "0px 15px 15px 15px",
                                objectFit: "cover",
                                backgroundColor: "pink",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ) : isVideo ? (
                      <div
                        onClick={onImageClick}
                        style={{
                          height: md ? 130 : 200,
                          width: md ? 130 : 200,
                          objectFit: "contain",
                          background: BaseColor.textGray,
                          borderRadius: "0px 15px 15px 15px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <BsPlayCircle size={50} color={BaseColor.whiteColor} />
                      </div>
                    ) : (
                      <span
                        style={{
                          fontSize: sm || isMobile ? 12 : 16,
                          fontFamily: FontFamily.Medium,
                          color: BaseColor.textColor,
                          lineHeight: 1.5,
                        }}
                      >
                        {receiverMsg}
                      </span>
                    )}
                  </div>

                  {!_.isEmpty(translatedText) && (
                    <div
                      style={{
                        borderTop: `1px solid ${BaseColor.disablePrimary}`,
                      }}
                    >
                      <div
                        style={{
                          padding: "6px 15px",
                        }}
                      >
                        <Typography style={{ fontSize: 12, lineHeight: 1.5 }}>
                          {translatedText}
                        </Typography>
                        <Typography
                          style={{ marginTop: 4, fontSize: 8, lineHeight: 1.5 }}
                        >
                          Translated by Google
                        </Typography>
                      </div>
                    </div>
                  )}
                </Grid>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                  }}
                >
                  {!isVideo 
                    ? !isTypeImage &&
                      !isTyping && (
                        <IconButton
                          onClick={(e) => {
                            onTranslateClick(e);
                            setIsTranslateOpen(e.currentTarget);
                          }}
                        >
                          <CIcon src={Files.svgIcons.translate} />
                        </IconButton>
                      )
                    : null}
                  <Popover
                    onClose={() => setIsTranslateOpen(null)}
                    anchorEl={isTranslateOpen}
                    id={id}
                    open={pop}
                    style={{
                      left: isMobile ? 100 : 140,
                    }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <Grid
                      container
                      style={{
                        padding: 8,
                        border: `1px solid ${BaseColor.primary}`,
                        borderRadius: 5,
                        height: isMobile ? 150 : 200,
                        width: isMobile ? 120 : 150,
                        overflowY: "scroll",
                      }}
                      className={classes.scrollBar}
                    >
                      {languageList?.map((item, index) => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "100%",
                            }}
                          >
                            <ListItemButton
                              style={{
                                marginLeft: -8,
                                fontSize: 14,
                                fontFamily: FontFamily.SemiBold,
                                fontWeight: "900",
                                color: BaseColor.primary,
                              }}
                              key={index}
                              onClick={() => {
                                setIsTranslateOpen(false);
                                onSelectLanguage(item);
                              }}
                            >
                              {item.name}
                            </ListItemButton>
                            {languageList.length - 1 !== index && (
                              <div
                                style={{
                                  border: `1px solid ${BaseColor.primary}`,
                                  opacity: 0.3,
                                }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </Grid>
                  </Popover>
                </div>
              </div>
            ) : null}
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

CChat.propTypes = {
  productBar: PropTypes.bool,
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.string,
  onClickProduct: PropTypes.func,

  chatSender: PropTypes.bool,
  senderImage: PropTypes.string,
  senderName: PropTypes.string,
  senderMsg: PropTypes.string,
  senderMsgTime: PropTypes.string,

  chatReceiver: PropTypes.bool,
  receiverImage: PropTypes.string,
  receiverName: PropTypes.string,
  receiverMsg: PropTypes.string,
  receiverMsgTime: PropTypes.string,
};
export default CChat;
