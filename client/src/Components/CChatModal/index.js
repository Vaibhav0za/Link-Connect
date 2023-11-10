import { Modal } from "@mui/material";
import styles from "./styles";
import PropType from "prop-types";

const CModal = (props) => {
  const { visible, onClose = () => {}, children, style } = props;
  const classes = styles();
  return (
    <Modal open={visible} onClose={onClose} className={classes.modal}>
      <div container style={style} className={classes.modalContainer}>
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
