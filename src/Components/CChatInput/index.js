import {
    CircularProgress,
    Grid,
    IconButton,
    InputBase,
    useMediaQuery,
  } from "@mui/material";
  import BaseColor from "../../Config/Color";
  import CIcon from "../CIcon";
  import Files from "../../Config/Files";
  import theme, { FontFamily } from "../../Config/theme";
  import EmojiPicker from "emoji-picker-react";
  import CImageUpload from "../../Components/CImageUpload";
  import _ from "lodash";
  
  const CChatInput = (props) => {
    const {
      value,
      onChange = () => {},
      sendBtnLoader = false,
      onSend = () => {},
      onFileUpload = () => {},
      onClickEmoji = () => {},
      isEmojiPickerOpen = false,
    } = props;
  
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const xs = useMediaQuery(theme.breakpoints.down("xs"));
  
    return (
      <div
        style={{
          padding: "5px 0px",
          position: "absolute",
          width: "100%",
          bottom: -10,
        }}
      >
        <Grid
          container
          wrap="wrap"
          style={{
            backgroundColor: BaseColor.offWhite,
            border: `1px solid ${BaseColor.primary}`,
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          {isEmojiPickerOpen ? (
            <Grid item xs={12}>
              <EmojiPicker
                onEmojiClick={(item) => {
                  const emoji = item.emoji;
                  const val = value.concat("", emoji);
                  onChange(val);
                }}
                width={"100%"}
                height={300}
              />
            </Grid>
          ) : null}
          <Grid item xs={7} sm={9} md={9} lg={10} xl={10.7}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSend();
              }}
            >
              <InputBase
                fullWidth
                value={value}
                onChange={(e) => onChange(e?.target?.value)}
                placeholder="Type your message..."
                style={{
                  fontFamily: FontFamily.Medium,
                  padding: "4px 10px 2px 10px",
              
                }}
              />
            </form>
          </Grid>
          <Grid
            item
            xs={5}
            sm={3}
            md={3}
            lg={2}
            xl={1.3}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: 100,
              // paddingLeft: 10,
            }}
          >
            <IconButton
              style={{
                lineHeight: 0,
                cursor: "pointer",
                padding: 0,
              }}
              onClick={onClickEmoji}
            >
              <CIcon
                src={
                  isEmojiPickerOpen
                    ? Files.svgIcons.fillDownArrow
                    : Files.svgIcons.smile
                }
                style={{
                  fontSize: 24,
                  cursor: "pointer",
                  color: BaseColor.primary,
                }}
                size={isEmojiPickerOpen ? 15 : 20}
              />
            </IconButton>
            <CImageUpload chatUpload onChange={onFileUpload} />
            <IconButton
              style={{
                lineHeight: 0,
                cursor: "pointer",
                // padding: 0,
                backgroundColor: BaseColor.primary,
                padding: "6px 14px",
                margin: 2,
                borderRadius: 3,
              }}
              onClick={onSend}
            >
              {sendBtnLoader ? (
                <CircularProgress color="secondary" size={20} />
              ) : (
                <CIcon
                  src={Files.svgIcons.send}
                  style={{
                    cursor: "pointer",
                    fontSize: 20,
                  }}
                />
              )}
            </IconButton>
            {/* </Grid> */}
          </Grid>
        </Grid>
        <div
          style={{
            marginTop: 5,
          }}
        >
          <span
            style={{
              fontSize: sm ? 10 : xs ? 8 : 12,
              fontFamily: FontFamily.Medium,
              color: BaseColor.textColor,
            }}
          >
            Image formats, i.e., .jpg, .jpeg , .png, doc and pdf are supported
          </span>
        </div>
      </div>
    );
  };
  
  export default CChatInput;
  