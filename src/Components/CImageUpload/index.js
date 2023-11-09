import styles from "./styles";
import _, { isEmpty } from "lodash";
import CButton from "../CButton";
import { HiPlus } from "react-icons/hi";
import Files from "../../Config/Files";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import BaseColor from "../../Config/Color";
import { CircularProgress, Link, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import CIcon from "../CIcon";
import theme from "../../Config/theme";
import { toast } from "react-toastify";
import { isMobile } from "react-device-detect";
import BaseSetting from "../../Apis/setting";
import { getApiData } from "../../Apis/apiHelper";
import DeleteModal from "../../Components/DeleteModal";

const CImageUpload = forwardRef((props, ref) => {
  const {
    createProfile = false,
    multiple = false,
    video = false,
    chatUpload = false,
    file = [],
    disabled = false,
    hideRemoveBtn = false,
    hideCameraBtn = false,
    onChange = () => {},
    onUploadImage = () => {},
    onChangeMainImage = () => {},
    onRemove = () => {},
    documentType = "",
    removeImageLoader = false,
    onRemoveImageSuccess = () => {},
    maxLength = 10,
    errorMsg = "",
    accept = "",
    editBtn,
    thumbnail = {},
  } = props;

  const classes = styles();
  const multipleRef = useRef();
  const videoRef = useRef();
  const deleteModalRef = useRef();

  //media queries
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  useImperativeHandle(ref, () => ({
    removeLocalImage(data, index) {
      const tempData = data;

      // if (_.isArray(tempData) && tempData.length > 0) {
      //   if (index > -1) {
      //     tempData.splice(index, 1);
      //   }
      //   onChange(tempData);
      // }
    },
    removeLiveImage(data, path) {
      removeFileApi(data, path);
    },
  }));

  const renderVideo = () => {
    const isDisabled = !_.isEmpty(file);
    const disableColor = isDisabled
      ? BaseColor.disablePrimary
      : BaseColor.primary;

    const videoUrl =
      _.isArray(file) && !_.isEmpty(file)
        ? URL.createObjectURL(file[0])
        : file?.url;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <label
          className={`${classes.videoContainer} ${classes.border} ${classes.shadow}`}
          style={{
            cursor: !isDisabled && "pointer",
            pointerEvents: isDisabled && "none",
            color: disableColor,
            borderColor: disableColor,
            background: isDisabled
              ? BaseColor.disableOffWhite
              : BaseColor.whiteColor,
          }}
        >
          <>
            <HiPlus
              style={{
                fontSize: lg ? 60 : 70,
              }}
            />
            <input
              accept="video/mp4,video/x-m4v,video/*"
              type="file"
              id="inputTag"
              onChange={(e) => {
                const files = e.target.files;
                if (!_.isEmpty(files)) {
                  onChange(files);
                  onUploadImage([files[0]]);
                }
              }}
              style={{
                display: "none",
              }}
            />
          </>
        </label>
        {!_.isEmpty(file) && (
          <div
            className={`${classes.videoContainer} ${classes.shadow}`}
            style={{
              marginLeft: 25,
            }}
          >
            <div className={classes.singleUploadImageContainer}>
              <CButton
                removeImg
                onClick={() => {
                  if (!_.isUndefined(file?.url)) {
                    deleteModalRef?.current?.open([file, thumbnail]);
                  } else {
                    onRemove();
                  }
                }}
              />
              <video
                style={{ borderRadius: 5 }}
                width="100%"
                height={"100%"}
                controls
              >
                <source type="video/mp4" src={videoUrl}></source>
              </video>
            </div>
          </div>
        )}
      </div>
    );
  };

  const removeFileApi = (item, docType = "") => {
    let data = {};
    if (!_.isEmpty(docType)) {
      data.key = docType;
    } else {
      const id = _.isArray(item) ? item.map((v) => v.id) : [item?.id];
      // const path = _.isArray(item) ? item.map((v) => v.url) : [item?.url];
      data.id = id;
      // data.path = path;
    }
    const endpoint = !_.isEmpty(docType)
      ? BaseSetting?.endpoint?.removeDocumentFile
      : BaseSetting?.endpoint?.removeFile;
    getApiData(endpoint, "post", data)
      .then((result) => {
        if (result.status) {
          onRemoveImageSuccess(true);
          deleteModalRef?.current?.close();
        } else {
          onRemoveImageSuccess(false);
          deleteModalRef?.current?.close();
          toast(result.message, { type: "error" });
        }
      })
      .catch((err) => {
        onRemoveImageSuccess(false);
        toast(err.message, { type: "error" });
        deleteModalRef?.current?.close();
      });
  };

  const renderMultiple = () => {
    const isDisabled = file.length >= maxLength;
    const disableColor = isDisabled
      ? BaseColor.disablePrimary
      : BaseColor.primary;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <label
          className={`${classes.multipleImageContainer} ${classes.border} ${classes.shadow}`}
          style={{
            cursor: !isDisabled && "pointer",
            color: disableColor,
            borderColor: disableColor,
            background: isDisabled
              ? BaseColor.disableOffWhite
              : BaseColor.whiteColor,
            pointerEvents: isDisabled && "none",
          }}
        >
          <HiPlus
            style={{
              fontSize: lg ? 60 : 70,
            }}
          />
          <input
            ref={multipleRef}
            accept=".png, .jpg, .jpeg"
            type="file"
            id="inputTag"
            multiple
            onChange={(e) => {
              let newImages = [];
              if (e.target.files.length > 0) {
                const file = e.target.files;
                for (let i = 0; i < file.length; i++) {
                  if (file[i].size >= 2000000) {
                    toast(
                      `you can not upload more then 2MB file - ${file[i].name}`,
                      { type: "warning" }
                    );
                  } else {
                    newImages.push(file[i]);
                  }
                }
              }

              const totalCount = newImages.length + file.length;
              if (totalCount <= maxLength) {
                let tempFile = file;
                newImages.map((im, index) => {
                  if (_.isEmpty(file) && index === 0) {
                    im.isMainImage = true;
                    im.isLocal = true;
                    im.isLoading = true;
                  } else {
                    im.isLoading = true;
                    im.isLocal = true;
                  }
                });
                tempFile = tempFile.concat(newImages);
                if (typeof onChange === "function") {
                  onChange(tempFile);
                  onUploadImage(tempFile);
                }
              } else {
                toast(`only ${maxLength} images are allowed`, {
                  type: "error",
                });
              }
            }}
            style={{
              display: "none",
            }}
          />
        </label>

        {!_.isEmpty(file) && _.isArray(file)
          ? file.map((item, index) => {
              const imageUrl =
                item?.isLocal && _.isUndefined(item?.url)
                  ? URL?.createObjectURL(item)
                  : item?.url;
              return (
                <div
                  className={`${classes.multipleImageContainer} ${classes.shadow}`}
                  style={{}}
                >
                  <div className={classes.multipleUploadImageContainer}>
                    {!hideRemoveBtn && !item?.isLoading && (
                      <CButton
                        removeImg
                        onClick={() => {
                          if (item?.isLocal) {
                            const tempData = file;
                            if (_.isArray(tempData) && tempData.length > 0) {
                              if (index >= 0) {
                                if (item?.isMainImage) {
                                  if (tempData.length >= 0) {
                                    tempData.splice(index, 1);
                                    if (tempData.length > 0) {
                                      tempData[0].isMainImage = true;
                                    }
                                    onChange(tempData);
                                  }
                                } else {
                                  tempData.splice(index, 1);
                                  onChange(tempData);
                                }
                              }
                            }
                          } else {
                            setOpenDeleteModal(true);
                            deleteModalRef?.current?.open(item);
                            onRemove();
                          }
                        }}
                      />
                    )}
                    <div
                      className={classes.singleImage}
                      onClick={() => {
                        if (item.main_image == 0) item.isLoading = true;
                        onChange([...file]);
                        onChangeMainImage(item?.id);
                        // const findMainImageIndex = file.findIndex(
                        //   (v) => v?.isMainImage
                        // );
                        // const findLiveMainImageIndex = file.findIndex(
                        //   (v) => v?.isLiveMainImage
                        // );
                        // const tempFile = file;
                        // if (
                        //   !_.isEmpty(tempFile) &&
                        //   findMainImageIndex >= 0 &&
                        //   findMainImageIndex !== index
                        // ) {
                        //   tempFile[findMainImageIndex].isMainImage = false;
                        //   tempFile[
                        //     findMainImageIndex
                        //   ].isMainImageChange = false;
                        //   tempFile[index].isMainImage = true;
                        //   tempFile[index].isMainImageChange = true;
                        //   if (
                        //     !_.isEmpty(tempFile) &&
                        //     findLiveMainImageIndex >= 0 &&
                        //     findLiveMainImageIndex == index
                        //   ) {
                        //     tempFile[
                        //       findLiveMainImageIndex
                        //     ].isMainImageChange = false;
                        //   }
                        // } else {
                        // }
                        // onChange([...tempFile]);
                      }}
                    >
                      {item?.isLoading ? (
                        <div
                          style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CircularProgress size={25} />
                        </div>
                      ) : (
                        <img
                          src={imageUrl}
                          alt="uploadImage"
                          className={classes.singleImage}
                        />
                        // ) : (
                        //   <div
                        //     style={{
                        //       background: BaseColor.lightPurple,
                        //       display: "flex",
                        //       justifyContent: "center",
                        //       alignItems: "center",
                        //       borderRadius: 5,
                        //       padding: "17px 20px",
                        //     }}
                        //   >
                        //     <img
                        //       src={Files?.svgIcons?.watermarkLogo}
                        //       alt={"watermark"}
                        //       className={classes.singleImage}
                        //     />
                        //   </div>
                      )}
                    </div>
                    {!_.isUndefined(item?.main_image) &&
                      item?.main_image === 1 && (
                        <div className={classes.mainImageTextContainer}>
                          <Link
                            style={{
                              fontSize: isMobile ? 12 : 16,
                              color: BaseColor.whiteColor,
                              marginBottom: 4,
                              cursor: "pointer",
                            }}
                          >
                            Main image
                          </Link>
                        </div>
                      )}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  };

  const singleImage = () => {
    const url =
      !_.isEmpty(file) && _.isArray(file) && _.isUndefined(file[0]?.url)
        ? URL.createObjectURL(file[0])
        : !_.isEmpty(file) && _.isArray(file) && !_.isUndefined(file[0]?.url)
        ? file[0]?.url
        : !_.isEmpty(file) && _.isObject(file) && !_.isUndefined(file?.url)
        ? file?.url
        : _.isString(file)
        ? file
        : "";

    const liveImageSplit = _.isString(file)
      ? file.split(".")
      : !_.isEmpty(file) && _.isArray(file) && !_.isUndefined(file[0]?.url)
      ? file[0]?.url.split(".")
      : !_.isEmpty(file) && _.isObject(file) && !_.isUndefined(file?.url)
      ? file?.url.split(".")
      : "";

    const liveFileType = !_.isEmpty(liveImageSplit)
      ? liveImageSplit[liveImageSplit.length - 1]
      : !_.isEmpty(file) && _.isArray(file)
      ? file[0]?.type == "application/pdf"
        ? "pdf"
        : ""
      : "";

    const isLiveImage =
      (!_.isEmpty(file) && _.isArray(file) && !_.isUndefined(file[0]?.url)) ||
      _.isString(file);

    const showImage =
      !_.isEmpty(file) && _.isArray(file) && !_.isUndefined(file[0]?.url)
        ? file[0]?.is_compress == "true" || file[0]?.isLocal
        : true;

    return (
      <div
        className={`${classes.singleImageContainer} ${classes.border}`}
        style={{
          background: disabled
            ? BaseColor.disableOffWhite
            : BaseColor.whiteColor,
          borderColor: disabled ? BaseColor.disablePrimary : BaseColor.primary,
          color: disabled ? BaseColor.disablePrimary : BaseColor.primary,
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "default" : "pointer",
        }}
      >
        {!_.isEmpty(file) ? (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!hideRemoveBtn && !editBtn && (
              <CButton
                style={{ position: "absolute", top: 0, right: 0 }}
                removeImg
                loading={removeImageLoader}
                onClick={() => {
                  onRemove(isLiveImage);
                  if (isLiveImage) {
                    removeFileApi({}, documentType);
                  }
                }}
              />
            )}
            {editBtn && (
              <div
                className={classes.editBtnContainer}
                style={{ position: "absolute", top: 0, right: 0 }}
                onClick={() => {}}
              >
                <label className={classes.editBtn}>
                  {removeImageLoader ? (
                    <CircularProgress size={12} color="error" />
                  ) : (
                    <CIcon
                      src={Files.svgIcons.editFill}
                      style={{
                        cursor: "pointer",
                      }}
                      size={16}
                    />
                  )}

                  <input
                    type="file"
                    id="editUpload"
                    // disabled={disabled}
                    onChange={(e) => {
                      const files = e.target.files;
                      if (!_.isEmpty(files)) {
                        onChange(files);
                      }
                    }}
                    style={{
                      display: "none",
                    }}
                    accept={accept}
                  />
                </label>
              </div>
            )}

            {showImage ? (
              liveFileType == "pdf" ? (
                <img
                  src={Files?.images?.pdf}
                  alt="uploadImage"
                  className={classes.pdfImage}
                />
              ) : (
                <img
                  src={url}
                  alt="uploadImage"
                  className={classes.singleImage}
                />
              )
            ) : (
              <div
                style={{
                  background: BaseColor.lightPurple,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  padding: "18px 20px",
                }}
              >
                <img
                  src={Files?.svgIcons?.watermarkLogo}
                  alt={"watermark"}
                  className={classes.singleImage}
                />
              </div>
            )}
          </div>
        ) : (
          <label
            style={{
              background: disabled
                ? BaseColor.disableOffWhite
                : BaseColor.whiteColor,
              borderColor: disabled
                ? BaseColor.disablePrimary
                : BaseColor.primary,
              color: disabled ? BaseColor.disablePrimary : BaseColor.primary,
              cursor: disabled ? "default" : "pointer",
            }}
            className={classes.singleImageContainer}
          >
            <HiPlus
              style={{
                fontSize: lg ? 60 : 70,
              }}
            />
            <input
              type="file"
              id="inputTag"
              disabled={disabled}
              onChange={(e) => {
                const files = e.target.files;
                if (!_.isEmpty(files)) {
                  onChange(files);
                }
              }}
              style={{
                display: "none",
              }}
              accept={accept}
            />
          </label>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {createProfile ? (
        <div className={classes.createProfileContainer}>
          <div className={classes.createProfileImageContainer}>
            {!_.isEmpty(file) ? (
              <img
                src={
                  !_.isEmpty(file) &&
                  _.isArray(file) &&
                  _.isUndefined(file[0].url)
                    ? URL.createObjectURL(file[0])
                    : !_.isEmpty(file) &&
                      _.isArray(file) &&
                      !_.isUndefined(file[0].url)
                    ? file[0].url
                    : _.isString(file)
                    ? file
                    : ""
                }
                alt="uploadImage"
                className={classes.createProfileImage}
              />
            ) : (
              <img
                src={Files.svgIcons.user}
                alt="uploadImage"
                className={classes.createProfilePlaceholderImg}
              />
            )}
          </div>
          {hideCameraBtn ? (
            ""
          ) : (
            <label>
              <CButton cameraIcon onClick={() => {}} />
              <input
                className={classes.createProfileContainer}
                type="file"
                id="inputTag"
                onChange={(e) => {
                  if (!_.isEmpty(e.target.files)) {
                    onChange(e.target.files);
                  }
                }}
                style={{
                  display: "none",
                }}
              />
            </label>
          )}
        </div>
      ) : multiple ? (
        renderMultiple()
      ) : video ? (
        renderVideo()
      ) : chatUpload ? (
        <label style={{}}>
          <CIcon
            src={Files.svgIcons.attachmentIcon}
            style={{
              cursor: "pointer",
              fontSize: 24,
              color: BaseColor.primary,
            }}
          />
          <input
            type="file"
            id="inputTag"
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,video/mp4,video/mov,"
            onChange={(e) => {
              const files = e.target.files;
              if (!_.isEmpty(files)) {
                onChange(files);
              }
            }}
            style={{
              display: "none",
            }}
          />
        </label>
      ) : (
        singleImage()
      )}

      {!_.isEmpty(errorMsg) && (
        <div className={classes.errorMsgContainer}>
          <span className={classes.errorMsgText}>{errorMsg}</span>
        </div>
      )}

      <DeleteModal
        ref={deleteModalRef}
        headerTitle={"Remove image"}
        descriptionTitle={"Are you sure you want to remove this image?"}
        onRemove={(item) => {
          removeFileApi(item);
        }}
      />
    </div>
  );
});

CImageUpload.propTypes = {
  createProfile: PropTypes.bool,
  multiple: PropTypes.bool,
  video: PropTypes.bool,
  chatUpload: PropTypes.bool,
  hideRemoveBtn: PropTypes.bool,
  hideCameraBtn: PropTypes.bool,
  file: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabledRemove: PropTypes.bool,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  maxLength: PropTypes.number,
  errorMsg: PropTypes.string,
};
export default CImageUpload;
