import { Grid, IconButton, Typography } from "@mui/material";
import React, { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { FontFamily } from "../../Config/theme";
import BaseColor from "../../Config/Color";
import _ from "lodash";
import CModal from "../CModal";
import { connect } from "react-redux";
import CButton from "../CButton";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      value: {},
      btnLoader: false,
    };
  }

  open(item) {
    this.setState({
      visible: true,
      value: item,
    });
  }

  close() {
    this.setState({
      visible: false,
      value: "",
      btnLoader: false,
    });
  }

  render() {
    const { descriptionTitle, headerTitle, onRemove = () => {} } = this.props;

    const { visible, value, btnLoader } = this.state;

    return (
      <CModal
        visible={visible}
        onClose={() => {
          this.close();
        }}
        title={headerTitle}
        children={
          <Grid
            container
            style={{
              position: "relative",
              padding: 30,
              width: 320,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                fontSize: 18,
                fontFamily: FontFamily.Medium,
              }}
            >
              {!_.isEmpty(descriptionTitle) ? descriptionTitle : ""}?
            </Typography>
            <CButton
              color="error"
              loading={btnLoader}
              onClick={() => {
                this.setState({ btnLoader: true });
                onRemove(value);
              }}
              style={{ marginTop: "20px" }}
            >
              {headerTitle ? "remove" : "delete"}
            </CButton>
          </Grid>
        }
      />
    );
  }
}

export default connect(null, null, null, { forwardRef: true })(DeleteModal);
