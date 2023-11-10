import { Modal, Grid, Typography } from "@mui/material";
import styles from "./styles";
import PropType from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { FontFamily } from "../../Config/theme";

const CModal = (props) => {
  const {
    visible,
    onClose = () => {},
    children,
    style,
    title,
    header = true,
  } = props;
  const classes = styles();
  return (
    <Modal open={visible} onClose={onClose} className={classes.modal}>
      <div
        container
        style={style}
        className={`${classes.modalContainer} ${classes.scrollBar}`}
      >
        {header === true && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 30px",
              borderBottom: "1px solid #000",
              background: "black",
              position: "sticky",
            }}
          >
            <Typography
              style={{
                fontFamily: FontFamily.SemiBold,
                fontSize: 20,
                color: "#fff",
              }}
            >
              {title}
            </Typography>
            <CloseIcon
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={onClose}
            />
          </div>
        )}

        {children}
      </div>
    </Modal>
  );
};

CModal.propTypes = {
  visible: PropType.bool,
  onClose: PropType.func,
};

CModal.defaultProps = {
  visible: false,
  onClose: () => {},
};
export default CModal;
