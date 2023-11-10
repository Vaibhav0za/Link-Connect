import PropTypes from "prop-types";
const CIcon = (props) => {
  const { src, size = 20, className, onClick = () => {}, style } = props;
  return (
    <img
      className={className}
      src={src}
      alt=""
      onClick={onClick}
      style={{
        height: size,
        width: size,
        objectFit: "contain",
        cursor: "default",
        ...style,
      }}
    />
  );
};

CIcon.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default CIcon;
