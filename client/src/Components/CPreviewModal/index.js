import React, { PureComponent } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import CModal from "../CModal";
import BaseColor from "../../Config/Color";

class CPreviewModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      image: "",
      type: "",
    };
    this.draggleRef = React.createRef(null);
  }

  open(image) {
    const fileName = image.substring(image.lastIndexOf("/") + 1);
    const fileType = fileName?.split(".");
    const finalType = fileType[1];

    if (!_.isEmpty(image) && _.isString(image)) {
      this.setState({
        image: image,
        visible: true,
        type: finalType,
      });
    }
    if (finalType === "mp4") {
      if (document) document.querySelector("video")?.play();
    }
  }

  close() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { modalTitle = "", sm, md } = this.props;

    const title = _.isEmpty(modalTitle)
      ? `Preview ${
          this.state.type === "pdf"
            ? "PDF"
            : this.state.type === "mp4"
            ? "Video"
            : "Image"
        }`
      : modalTitle;
    return (
      <CModal
        visible={this.state.visible}
        header={false}
        onClose={() => {
          this.close();
        }}
        style={{
          backgroundColor: BaseColor.transparent,
          width: sm ? "85%" : md ? "70%" : "50%",
        }}
      >
        <div
          style={{
            height: sm ? "100%" : "55vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {this.state.type === "pdf" ? (
            <iframe
              src={`${this.state.image}`}
              title="iframe"
              height={sm ? "100%" : "700"}
              width="100%"
            ></iframe>
          ) : this.state.type === "mp4" ? (
            <video
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={this.state.image}
              type="video/mp4"
              controls
              autoPlay
            />
          ) : (
            <img
              src={this.state.image}
              alt="image"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          )}
        </div>
      </CModal>
    );
  }
}

export default connect(null, null, null, {
  forwardRef: true,
})(CPreviewModal);
