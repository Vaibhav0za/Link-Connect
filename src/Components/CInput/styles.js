import { makeStyles } from "@mui/styles";
import BaseColor from "../../Config/Color";
import { FontFamily } from "../../Config/theme";

const styles = makeStyles({
  errorMsgContainer: {
    marginTop: 5,
    marginLeft: 2,
  },
  errorMsgText: {
    fontSize: 14,
    color: BaseColor.errorRed,
    fontFamily: FontFamily.Medium,
  },
});
export default styles;
