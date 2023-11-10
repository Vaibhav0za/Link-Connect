import { Grid, Typography } from "@mui/material";
import React from "react";
import BaseColor from "../../Config/Color";
import styles from "./styles";
import PropTypes from "prop-types";
import _ from "lodash";
import { FontFamily } from "../../Config/theme";

const ChatListCard = (props) => {
  const {
    name = "",
    time = "",
    userImage = "",
    sellerName = "",
    lastMsg = "",
    activeChat = false,
    isOnline = false,
    isTyping = false,
    onClick = () => {},
    backgroundColor = "",
    style,
    count,
  } = props;

  const classes = styles();
  return (
    <div style={style} onClick={onClick} {...props}>
      <Grid
        container
        display="flex"
        wrap={"nowrap"}
        style={{
          backgroundColor: activeChat ? BaseColor.primary : BaseColor.white,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          padding: 10,
        }}
      >
        <Grid>
          <div className={classes.profileImageContainer}>
            {!_.isNull(userImage) ? (
              <img src={userImage} className={classes.profileImage} />
            ) : (
              <div
                className={classes.profileImage}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: backgroundColor,
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    fontFamily: FontFamily.Medium,
                    color: BaseColor.whiteColor,
                  }}
                >
                  {name?.charAt(0)?.toUpperCase()}
                </span>
              </div>
            )}
            {isOnline && (
              <div
                style={{
                  position: "absolute",
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  background: BaseColor.green,
                  right: 3,
                  bottom: 3,
                }}
              />
            )}
          </div>
        </Grid>
        <Grid container style={{ marginLeft: 20 }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className={activeChat ? classes.cNameA : classes.cName}>
                {name}
              </span>
              <div
                style={{
                  whiteSpace: "nowrap",
                  width: "150px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className={activeChat ? classes.messageA : classes.message}
              >
                {isTyping ? "Typing..." : lastMsg}
              </div>
            </div>
            <div
              style={{
                width: "20%",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <span className={activeChat ? classes.timeA : classes.time}>
                {time}
              </span>

              {count > 0 && (
                <div
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    background: BaseColor.primary,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className={activeChat ? classes.time : classes.timeA}>
                    {count}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

ChatListCard.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  userImage: PropTypes.string,
  sellerName: PropTypes.string,
  lastMsg: PropTypes.string,
  activeChat: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ChatListCard;
