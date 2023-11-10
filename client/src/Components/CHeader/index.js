import {
  ButtonBase,
  Grid,
  InputBase,
  ListItemButton,
  MenuItem,
  Popover,
  Rating,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./styles";
import { BsPlus } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { IoChatbubbleEllipsesOutline, IoSearch } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoMdNotificationsOutline, IoIosArrowForward } from "react-icons/io";
import BaseColor from "../../Config/Color";
import Files from "../../Config/Files";
import theme, { FontFamily } from "../../Config/theme";
import styled from "@emotion/styled";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CModal from "../CModal";
import { FaCrown } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import { isMobile } from "react-device-detect";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: BaseColor.primary,
  },
});

const CHeader = () => {
  const classes = styles();

  const CInputBase = styled(InputBase)({
    paddingLeft: 10,
    fontFamily: FontFamily.Regular,
    color: BaseColor.whiteColor,
    width: "100%",
  });

  const [allPost, setAllPost] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const pop = Boolean(anchorEl);
  const id = pop ? "simple-popover" : undefined;
  const [open, setOpen] = useState(false);

  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={classes.root} wrap="nowrap">
      <Grid item xs={3} md={1.4}>
        <img src={Files.images.logo} className={classes.logo} />
      </Grid>
      <Grid item xs={6} md={5} className={classes.inputContainer}>
        {!md && (
          <Grid item>
            <Select
              displayEmpty
              value={allPost}
              onChange={(e) => setAllPost(e.target.value)}
              IconComponent={KeyboardArrowDownOutlinedIcon}
            >
              <MenuItem value="" selected hidden disabled>
                All Post
              </MenuItem>
              <MenuItem value="Most Popular">Most Popular</MenuItem>
              <MenuItem value="Relevence">Relevence</MenuItem>
              <MenuItem value="Recently Added">Most Recent</MenuItem>
            </Select>
          </Grid>
        )}
        <Grid item className={classes.searchInputContainer}>
          <IoSearch color={BaseColor.whiteColor} size={24} />
          <CInputBase placeholder="Search post..." />
        </Grid>
        <Grid item className={classes.filterContainer}>
          <HiOutlineAdjustmentsHorizontal size={28} />
        </Grid>
      </Grid>
      <Grid item xs={3} md={4}>
        <Grid item container alignItems={"center"} wrap="nowrap">
          {!md && (
            <Grid item xs={5} lg={4}>
              <ButtonBase
                style={{
                  background: BaseColor.whiteColor,
                  color: BaseColor.primary,
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  padding: "12px 14px",
                  marginLeft: md ? 25 : "3vw",
                }}
              >
                <div className={classes.postIconContainer}>
                  <BsPlus size={16} color={BaseColor.primary} />
                </div>
                <span className={classes.createPostText}>Create post</span>
              </ButtonBase>
            </Grid>
          )}
          <Grid item xs={4} lg={5} className={classes.threeIconContainer}>
            {!md && (
              <>
                <TiShoppingCart size={34} color={BaseColor.whiteColor} />
                <IoChatbubbleEllipsesOutline
                  size={34}
                  color={BaseColor.whiteColor}
                />
              </>
            )}
            <IoMdNotificationsOutline size={34} color={BaseColor.whiteColor} />
          </Grid>
          <Grid
            item
            xs={2}
            className={classes.userProfileContainer}
            padding={md ? "0 15px" : "0 20px"}
          >
            <div
              className={classes.userProfileImg}
              onClick={(event) => {
                md ? setAnchorEl(event.currentTarget) : setOpen(true);
              }}
            >
              <img
                src={Files.images.logo}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <IoIosArrowForward
              style={{
                fontSize: 18,
                color: BaseColor.whiteColor,
                transform: "rotate(90deg)",
              }}
            />

            {md && (
              <Popover
                onClose={() => setAnchorEl(null)}
                anchorEl={anchorEl}
                id={id}
                open={pop}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <ListItemButton onClick={() => setOpen(true)}>
                  User Profile
                </ListItemButton>
                <ListItemButton>Create Post</ListItemButton>
                <ListItemButton>My Cart</ListItemButton>
                <ListItemButton>Messages</ListItemButton>
              </Popover>
            )}
          </Grid>
        </Grid>
      </Grid>

      <CModal
        visible={open}
        onClose={() => setOpen(false)}
        children={
          <Grid
            style={{
              minWidth: isMobile ? "350px" : "600px",
              width: "30vw",
              position: "relative",
              maxHeight: "80vh",
              overflowY: "scroll",
            }}
          >
            <Grid container justifyContent={"center"}>
              <CloseIcon
                onClick={() => setOpen(false)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  fontSize: "22px",
                }}
              />
              <Typography
                style={{
                  fontFamily: FontFamily.SemiBold,
                  fontSize: "26px",
                  padding: "30px",
                }}
              >
                User Profile
              </Typography>
            </Grid>
            <Grid
              container
              wrap={isMobile ? "wrap" : "nowrap"}
              justifyContent={isMobile && "center"}
              padding={isMobile ? "0 30px" : "0 50px"}
            >
              <Grid item>
                <img
                  src={Files.images.profile}
                  alt="Profile_image"
                  style={{
                    width: isMobile ? 150 : 134,
                    height: isMobile ? 150 : 134,
                    borderRadius: "100%",
                    marginRight: !isMobile && 30,
                    marginBottom: isMobile && 20,
                  }}
                />
              </Grid>
              <Grid container wrap="wrap">
                <Grid item xs={12} textAlign={isMobile && "center"}>
                  <Typography
                    style={{
                      fontFamily: FontFamily.SemiBold,
                      fontSize: "20px",
                    }}
                  >
                    Maria Zenova
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      color: BaseColor.disablePrimary,
                      fontSize: "16px",
                      padding: isMobile ? 0 : "10px 0",
                    }}
                  >
                    Member since: 02-05-2023
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: FontFamily.Regular,
                      color: BaseColor.disablePrimary,
                      fontSize: "16px",
                      paddingBottom: 13,
                    }}
                  >
                    Last seen: 02-05-2023 | 19:34 (IST)
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: isMobile && "center",
                    }}
                  >
                    <CheckCircleIcon style={{ color: BaseColor.primary }} />
                    <div
                      style={{
                        backgroundColor: BaseColor.primary,
                        padding: "2px 3px",
                        borderRadius: 5,
                        display: "flex",
                        alignItems: "center",
                        margin: "0 10px",
                      }}
                    >
                      <FaCrown style={{ color: BaseColor.offWhite }} />
                    </div>
                    <img
                      src={Files.images.indiaFlag}
                      style={{ width: "22px", height: "18px", borderRadius: 3 }}
                    />
                    <div
                      style={{
                        border: `1px solid ${BaseColor.primary}`,
                        display: "flex",
                        alignItems: "center",
                        padding: "2px 5px",
                        borderRadius: 5,
                        marginLeft: 30,
                      }}
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
                  padding: isMobile ? "20px" : "25px",
                  color: BaseColor.textGray,
                }}
              >
                You both are following each other
              </Typography>
            </Grid>
            <Grid
              container
              rowGap={1}
              padding={isMobile ? "0 20px 20px" : "0 50px 50px"}
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
                <StyledRating
                  name="half-rating"
                  defaultValue={3.5}
                  precision={0.5}
                  size="large"
                  readOnly
                />
              </Grid>
              <Grid
                item
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
                  Fiber & Materials Pvt. Ltd.
                </Typography>
              </Grid>
              <Grid
                item
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
                  Manufacturer
                </Typography>
              </Grid>
              <Grid
                item
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
                  +91 98765 43210
                </Typography>
              </Grid>
              <Grid
                item
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
                  nisargdev11@gmail.com
                </Typography>
              </Grid>
              <Grid
                item
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
                  98765 43210
                </Typography>
              </Grid>
              <Grid
                item
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
                  www.fiber&materials.com
                </Typography>
              </Grid>
              <Grid
                item
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
                  Rajkot, Gujarat
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        }
      />
    </Grid>
  );
};
export default CHeader;
