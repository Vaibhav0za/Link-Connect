import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";
import BaseColor from "./Color";

// eslint-disable-next-line
const breakpoints = createBreakpoints({});

export const FontFamily = {
  ExtraLight: "RalewayExtraLight",
  Light: "RalewayLight",
  Regular: "RalewayRegular",
  Medium: "RalewayMedium",
  Black: "RalewayBlack",
  SemiBold: "RalewaySemiBold",
  Bold: "RalewayBold",
  ExtraBold: "RalewayExtraBold",
};

const RalewayExtraLight = {
  fontFamily: FontFamily.ExtraLight,
  fontStyle: "normal",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Raleway-ExtraLight.ttf') format('ttf')",
};
const RalewayLight = {
  fontFamily: FontFamily.Light,
  fontStyle: "normal",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Raleway-Light.ttf') format('ttf')",
};
const RalewayRegular = {
  fontFamily: FontFamily.Regular,
  fontStyle: "bold",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Raleway-Regular.ttf') format('ttf')",
};
const RalewayMedium = {
  fontFamily: FontFamily.Medium,
  fontStyle: "bold",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Raleway-Medium.ttf') format('ttf')",
};
const RalewayBlack = {
  fontFamily: FontFamily.Black,
  fontStyle: "normal",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Raleway-Black.ttf') format('ttf')",
};
const RalewaySemiBold = {
  fontFamily: FontFamily.SemiBold,
  fontStyle: "bold",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Raleway-SemiBold.ttf') format('ttf')",
};
const RalewayBold = {
  fontFamily: FontFamily.Bold,
  fontStyle: "bold",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Raleway-Bold.ttf') format('ttf')",
};
const RalewayExtraBold = {
  fontFamily: FontFamily.ExtraBold,
  fontStyle: "bold",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Raleway-ExtraBold.ttf') format('ttf')",
};

let theme = createTheme();
// Create a theme instance.
theme = createTheme(theme, {
  MuiCssBaseline: {
    "@global": {
      "@font-face": [
        RalewayExtraLight,
        RalewayLight,
        RalewayRegular,
        RalewayMedium,
        RalewayBlack,
        RalewaySemiBold,
        RalewayBold,
        RalewayExtraBold,
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: BaseColor.primary,
    },
    // secondary: {
    //   main: BaseColor.secondary,
    // },
    error: {
      main: BaseColor.errorRed,
    },
    background: {
      default: BaseColor.whiteColor,
    },
  },

  components: {
    MuiGrid: {
      styleOverrides: {
        container: {
          margin: "0px auto",
        },
        root: {
          maxWidth: "unset !important",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          fontFamily: FontFamily.SemiBold,
          "& .MuiTypography-root": {
            fontSize: "0.875rem",
          },
          "& .MuiDataGrid-columnHeader": {
            "& .MuiDataGrid-iconButtonContainer": {
              visibility: "visible",
              width: "auto",
            },
          },
          "& .MuiDataGrid-sortIcon": {
            opacity: "0.5 !important",
          },
          "& .MuiDataGrid-columnHeader--sorted": {
            "& .MuiDataGrid-sortIcon": {
              opacity: "1 !important",
              backgroundColor: "rgba(0,0,0,0.15)",
              borderRadius: 50,
              padding: 2,
            },
          },
          "& .MuiInputBase-root button svg.MuiSvgIcon-fontSizeSmall": {
            display: "none",
            backgroundColor: "red",
          },
          "& .MuiButtonBase-root-MuiIconButton-root": {
            display: "none",
          },
          "&:hover .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
            background: "#674188",
          },
          ".MuiDataGrid-virtualScroller::-webkit-scrollbar": {
            width: "1px",
            height: "4px",
          },
          ".MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
            background: "#F7EFE5",
          },
          ".MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
            background: "rgba(103, 65, 136, 0.5)",
            borderRadius: "10px",
          },
        },
        columnHeaders: {
          backgroundColor: BaseColor.disablePrimary,
          fontWeight: "600",
          fontFamily: FontFamily.SemiBold,
          fontSize: "16px",
        },
        columnHeaderTitle: {
          fontWeight: "600",
          letterSpacing: "0.6px",
          "@media (max-width: 768px)": {
            fontSize: "14px !important",
          },
        },
        cellContent: {
          cursor: "pointer",
          "@media (max-width: 768px)": {
            fontSize: "12px !important",
          },
        },
        cell: {
          padding: 10,
        },
        row: {
          cursor: "pointer",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "ManropeRegular !important",
          border: `1px solid ${BaseColor.primary} !important`,
          width: "205%",
          "@media (max-width: 768px)": {
            fontSize: "12px !important",
            padding: 10,
          },
        },
        head: {
          fontWeight: "bold",
          backgroundColor: "#EEF8FF",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // border: "1px solid #000",
        },
        startIcon: {
          marginRight: 0,
          "& > svg": {
            marginRight: 5,
          },
        },
        endIcon: {
          display: "inherit",
          marginRight: -4,
          marginLeft: 8,
          "&$iconSizeSmall": {
            marginRight: -2,
          },
        },
        containedPrimary: {
          textTransform: "none",
          boxShadow: "none",
          color: BaseColor.whiteColor,
          fontFamily: FontFamily.SemiBold,
          height: 40,
          padding: "8px 18px",
          minWidth: "unset",
          whiteSpace: "nowrap",
          borderRadius: 5,
          "&:hover": {
            backgroundColor: `${BaseColor.primary} !important`,
          },
          "&.Mui-disabled": {
            all: "none",
            background: BaseColor.disablePrimary,
            color: BaseColor.whiteColor,
          },
          "@media (max-width: 768px)": {
            fontSize: "12px !important",
            minWidth: "unset !important",
            padding: "8px 10px",
          },
        },
        containedError: {
          textTransform: "none",
          boxShadow: "none",
          color: BaseColor.whiteColor,
          fontFamily: FontFamily.SemiBold,
          height: 40,
          padding: "8px 18px",
          minWidth: "unset",
          whiteSpace: "nowrap",
          borderRadius: 5,
          "&:hover": {
            // backgroundColor: `${BaseColor.secondary} !important`,
            // boxShadow: "none",
            // color: BaseColor.primary,
            // border: "1px solid",
            // borderColor: BaseColor.primary,
          },
          "&.Mui-disabled": {
            all: "none",
            color: BaseColor.whiteColor,
          },
          "@media (max-width: 768px)": {
            fontSize: "12px !important",
            minWidth: "unset !important",
            padding: "8px 10px",
          },
        },
        // containedSecondary: {
        //   boxShadow: "none",
        //   border: "1px solid",
        //   borderColor: `${BaseColor.secondary}`,
        //   color: `${BaseColor.whiteColor}`,
        //   fontFamily: FontFamily.Regular,
        //   "&:hover": {
        //     backgroundColor: "#FFF !important",
        //     boxShadow: "none",
        //     color: `${BaseColor.secondary}`,
        //     borderColor: `${BaseColor.secondary} `,
        //     border: "1px solid",
        //   },
        // },
        outlinedPrimary: {
          textTransform: "none",
          boxShadow: "none",
          border: "1px solid",
          borderColor: `${BaseColor.primary}`,
          color: `${BaseColor.primary}`,
          fontFamily: FontFamily.Regular,
          height: 40,
          padding: "8px 18px",
          minWidth: "unset",
          whiteSpace: "nowrap",
          borderRadius: 5,
          backgroundColor: `${BaseColor.whiteColor} !important`,
          "&:hover": {
            // boxShadow: "none",
            // backgroundColor: `${BaseColor.primary} !important`,
            // color: `${BaseColor.whiteColor}`,
            // borderColor: `${BaseColor.primary}`,
            // border: "1px solid",
          },
        },
        outlinedSecondary: {
          textTransform: "none",
          boxShadow: "none",
          border: "1px solid",
          borderColor: `${BaseColor.primary}`,
          color: `${BaseColor.primary}`,
          fontFamily: FontFamily.Regular,
          height: 40,
          padding: "8px 18px",
          minWidth: "unset",
          whiteSpace: "nowrap",
          borderRadius: 5,
          backgroundColor: `${BaseColor.offWhite} !important`,
          "&:hover": {
            // boxShadow: "none",
            // backgroundColor: `${BaseColor.secondary} !important`,
            // color: `${BaseColor.whiteColor}`,
            // borderColor: `${BaseColor.secondary}`,
            // border: "1px solid",
          },
        },
        textPrimary: {
          textTransform: "none",
          boxShadow: "none",
          color: BaseColor.primary,
          fontFamily: FontFamily.Regular,
          height: 40,
          padding: "8px 18px",
          minWidth: "unset",
          whiteSpace: "nowrap",
          "&:hover": {
            // boxShadow: "none",
            // backgroundColor: "transparent",
            // color: `${BaseColor.secondary} !important`,
          },
          "@media (max-width: 768px)": {
            fontSize: "12px !important",
            minWidth: "unset !important",
            padding: "8px 10px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minHeight: "40px !important",
          padding: "10px 14px",
          "& fieldset": {
            borderColor: BaseColor.primary,
          },
          "&:hover fieldset": {
            borderColor: BaseColor.primary,
          },
          "&.Mui-focused fieldset": {
            borderColor: BaseColor.primary,
          },
          "&.Mui-focused": {
            border: "0px !important",
          },
          "&:hover": {
            borderColor: BaseColor.primary,
          },
          "& > textarea": {
            padding: 0,
            textSizeAdjust: "100%",
          },
        },
        input: {
          borderColor: BaseColor.primary,
          padding: "0px",
          height: 24,
          fontSize: 16,
          fontFamily: FontFamily.Regular,
          minHeight: "1.3375em !important",
          ":-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset",
          },
          "&.Mui-focused": {
            border: "0px !important",
          },
          "&:hover": {
            borderColor: BaseColor.primary,
          },
        },
        multiline: {},
        inputMultiline: {
          lineHeight: "initial",
        },
        marginDense: {
          margin: 0,
        },
        notchedOutline: {
          borderColor: BaseColor.primary,
        },
        inputAdornedStart: {
          // border:`1px solid ${BaseColor.primary}`,
          borderColor: BaseColor.primary,
          // paddingTop: 15,
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          border: "none",
        },
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 17px) scale(1)",
      },
    },
    // MuiPagination:{
    //   styleOverrides:{
    //     root:{
    //       background: 'pink'
    //     },
    //     ul:{
    //       background: 'red'
    //     }
    //   },
    // },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            border: `1px solid ${BaseColor.primary}`,
            background: BaseColor.primary,
            color: BaseColor.white,
            "&:hover": {
              border: `1px solid ${BaseColor.primary}`,
              background: BaseColor.primary,
              color: BaseColor.white,
            },
          },
          "&.MuiPaginationItem-icon": {
            color: BaseColor.primary,
          },
        },
        previousNext: {
          color: BaseColor.primary,
          border: `1px solid ${BaseColor.primary}`,
          background: BaseColor.white,
          "&:hover": {
            color: BaseColor.primary,
            border: `1px solid ${BaseColor.primary}`,
            background: BaseColor.white,
          },
        },
        outlined: {
          background: BaseColor.disablePrimary,
          border: `1px solid ${BaseColor.disablePrimary}`,
          color: BaseColor.white,
          "&:hover": {
            background: BaseColor.disablePrimary,
            border: `1px solid ${BaseColor.disablePrimary}`,
            color: BaseColor.white,
          },
        },
      },
    },
    // MuiButtonBase: {
    //   root: {
    //     // height: '25px',
    //     border: "none",
    //     minHeight: "25px",
    //   },
    //   content: {
    //     margin: "0px 0px",
    //     minHeight: "25px",
    //   },
    //   expanded: {
    //     minHeight: "25px",
    //     // height: '25px',
    //   },
    // },
    MuiAccordionSummary: {
      root: {
        // height: '25px',
        border: "none",
        minHeight: "25px",
      },
      content: {
        margin: "0px 0px",
        minHeight: "25px",
      },
      expanded: {
        // height: '25px',
        minHeight: "25px",
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `${FontFamily.Regular}`,
          letterSpacing: "0.6px",
          [theme.breakpoints.down("lg")]: {
            fontSize: 14,
          },
          "@media (max-width: 768px)": {
            fontSize: 12,
          },
        },
        subtitle1: {
          fontSize: 28,
          fontWeight: "700",
          fontFamily: `${FontFamily.Regular}`,
          letterSpacing: 1,
        },
        tableTitle: {
          fontWeight: "700",
          fontFamily: `${FontFamily.Bold}`,
          "@media (max-width: 768px)": {
            fontSize: "14px !important",
          },
        },
      },
    },
    // MuiAvatar: {
    //   img: {
    //     objectFit: "contain",
    //   },
    // },
    // MuiListItemIcon: {
    //   root: {
    //     minWidth: "40px",
    //   },
    // },
    // MuiTimelineItem: {
    //   missingOppositeContent: {
    //     flex: "none !important",
    //     "&:before": {
    //       flex: "none !important",
    //       content: "none",
    //     },
    //   },
    // },
    // MuiTouchRipple: {
    //   rippleVisible: {
    //     animation: "none",
    //     opacity: "0%",
    //   },
    // },
    // MuiTypography: {
    //   root: {
    //     wordBreak: "break-word",
    //   },
    //   h1: {
    //     color: BaseColor.darkGreen,
    //     fontFamily: FontFamily.Bold,
    //     fontWeight: "normal",
    //     fontSize: "45px",
    //     [breakpoints.down("xs")]: {
    //       fontSize: "35px",
    //       textAlign: "center",
    //     },
    //   },
    //   h2: {
    //     color: "#264653",
    //     fontFamily: FontFamily.Bold,
    //     fontSize: "34px",
    //     lineHeight: "1.2em",
    //     letterSpacing: "1px",
    //     fontWeight: "normal",
    //     "@media (max-width:768px)": {
    //       fontSize: "26px",
    //       lineHeight: "1.2em",
    //     },
    //     "@media (max-width: 425px)": {
    //       fontSize: "20px",
    //       textAlign: "center",
    //       lineHeight: "1.4em",
    //     },
    //   },
    //   h3: {
    //     color: "#264653",
    //     fontFamily: FontFamily.SemiBold,
    //     fontSize: "26px",
    //     lineHeight: "1.2em",
    //     "@media (max-width:768px)": {
    //       fontSize: "22px",
    //       lineHeight: "1.2em",
    //     },
    //     "@media (max-width: 425px)": {
    //       fontSize: "18px",
    //       textAlign: "left",
    //       lineHeight: "1.4em",
    //     },
    //   },
    //   h4: {
    //     color: "#264653",
    //     fontFamily: FontFamily.SemiBold,
    //     fontSize: "22px",
    //     "@media (max-width: 425px)": {
    //       fontSize: "20px",
    //     },
    //   },
    //   h5: {
    //     fontWeight: "700",
    //   },
    //   h6: {
    //     fontSize: "1.5rem",
    //     fontWeight: "700",
    //   },
    //   subtitle1: {
    //     color: "#264653",
    //     margin: "1rem 0.2rem",
    //     fontFamily: FontFamily.SemiBold,
    //     fontStyle: "normal",
    //     fontSize: "1.2rem", // 16 pt
    //     lineHeight: "1.2em",
    //     "@media (max-width: 425px)": {
    //       fontSize: "1rem",
    //     },
    //   },
    //   subtitle2: {
    //     color: "#373F45",
    //     margin: "1rem 0.2rem",
    //     fontFamily: FontFamily.SemiBold,
    //     fontStyle: "normal",
    //     fontSize: "1.2rem", // 16 pt#373F45
    //     lineHeight: "1.5em",
    //     "@media (max-width: 425px)": {
    //       fontSize: "1rem",
    //     },
    //   },
    //   body1: {
    //     color: BaseColor.blackColor,
    //     "@media (max-width: 425px)": {
    //       fontSize: "0.9rem",
    //     },
    //   },
    //   body2: {
    //     color: BaseColor.blackColor,
    //     "@media (max-width: 425px)": {
    //       fontSize: "0.8rem",
    //     },
    //   },
    // },
    // MuiDivider: {
    //   root: {
    //     marginBottom: "2rem",
    //     [breakpoints.down("sm")]: {
    //       marginBottom: "1rem",
    //     },
    //   },
    // },
    // MuiExpansionPanel: {
    //   root: {
    //     boxShadow: "none",
    //     "&:before": {
    //       content: "unset",
    //     },
    //   },
    // },
    // MuiStepConnector: {
    //   lineHorizontal: {
    //     borderTopWidth: "2.3px !important",
    //   },
    // },
    // MuiStepLabel: {
    //   alternativeLabel: {
    //     "@media (max-width: 425px)": {
    //       fontSize: 12,
    //     },
    //     "@media (max-width: 375px)": {
    //       fontSize: 10,
    //     },
    //   },
    // },
    // MuiOutlinedInput: {
    //   input: {
    //     padding: "12px 14px",
    //     height: 24,
    //     fontSize: 14,
    //   },
    //   inputMultiline: {
    //     lineHeight: "initial",
    //   },
    //   marginDense: {
    //     margin: 0,
    //   },
    //   root: {
    //     paddingRight: "0px",
    //     width: "100%",
    //     background: "#FFFFFF",
    //     // fontSize: 12,
    //     minHeight: 45,
    //   },
    //   inputAdornedStart: {
    //     paddingTop: 15,
    //   },
    // },
    // MuiInputLabel: {
    //   outlined: {
    //     transform: "translate(14px, 17px) scale(1)",
    //   },
    // },
    MuiSelect: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          color: BaseColor.blackColor,
        },
        icon: {
          color: BaseColor.blackColor,
          fontSize: 30,
          top: "15%",
        },
      },
    },
    // MuiFormControl: {
    //   fullWidth: {
    //     width: "100%",
    //   },
    //   marginDense: {
    //     marginTop: 0,
    //     marginBottom: 0,
    //     backgroundColor: "#FFFF",
    //     width: "100%",
    //   },
    // },
    // MuiPagination: {
    //   ul: {
    //     justifyContent: "flex-end",
    //   },
    // },
    // MuiChip: {
    //   root: {
    //     borderRadius: "5px",
    //     color: "#FFF",
    //     backgroundColor: BaseColor.primary,
    //   },
    //   deleteIcon: {
    //     color: "#FFF",
    //     "&:hover": {
    //       color: "#FFF",
    //     },
    //   },
    // },
    // MuiAutocomplete: {
    //   option: {
    //     "&:hover": {
    //       backgroundColor: "#E4F9F2",
    //     },
    //     fontSize: 14,
    //   },
    //   noOptions: {
    //     fontSize: 14,
    //   },
    //   clearIndicator: {
    //     padding: "0px important",
    //     height: "fit-content",
    //   },
    //   endAdornment: {
    //     display: "flex",
    //     height: "100%",
    //   },
    // },
    // PrivateNotchedOutline: {
    //   legendNotched: {
    //     [breakpoints.down("xs")]: {
    //       maxWidth: "fit-content !important",
    //       paddingRight: 30,
    //       "& > span": {
    //         paddingLeft: "0px",
    //         paddingRight: "0px",
    //         width: "fit-content",
    //         fontSize: 11,
    //       },
    //     },
    //   },
    // },
    // MuiAccordion: {
    //   root: {
    //     "&:before": {
    //       height: "0px !important",
    //     },
    //   },
    // },
    // PrivateNotchedOutline: {
    //   root: {
    //     borderWidth: 0,
    //     borderRadius: 5,
    //   },
    // },
    // MuiTabs: {
    //   vertical: {},
    //   indicator: {
    //     left: "0",
    //     width: "5px",
    //   },
    // },
    // MuiTab: {
    //   root: {
    //     backgroundColor: "#FAFAFB !important",
    //     margin: "2px 0px",
    //     minWidth: "600px !important",
    //   },
    //   labelIcon: {
    //     minHeight: "50px",
    //   },
    //   wrapper: {
    //     width: "100%",
    //     flexDirection: "row !important",
    //     textTransform: "capitalize !important",
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //   },
    // },
    // MuiLinearProgress: {
    //   root: {
    //     height: "28px",
    //     borderRadius: "6px",
    //   },
    //   colorPrimary: {
    //     backgroundColor: "#FFF",
    //   },
    // },
    // MuiFormControlLabel: {
    //   root: {
    //     marginLeft: "0 !important",
    //   },
    //   label: {
    //     color: "#373F45 !important",
    //   },
    //   labelPlacementStart: {
    //     marginLeft: "8px !important",
    //   },
    // },
    // MuiRating: {
    //   root: {
    //     fontSize: "inherit !important",
    //   },
    // },
    // MuiListItem: {
    //   root: {
    //     "&$selected": {
    //       backgroundColor: "#E4F9F2",
    //     },
    //   },
    // },
    // MuiPaper: {
    //   elevation8: {
    //     boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 8px 0px !important",
    //   },
    // },
    // MuiMenu: {
    //   paper: {
    //     backgroundColor: "transparent !important",
    //     boxShadow: "none !important",
    //   },
    //   list: {
    //     paddingTop: "0px !important",
    //     paddingBottom: "0px !important",
    //   },
    // },
    // MuiAppBar: {
    //   positionFixed: {
    //     zIndex: "1000",
    //   },
    // },
    // MuiBreadcrumbs: {
    //   separator: {
    //     "@media (max-width: 425px)": {
    //       marginLeft: 0,
    //       marginRight: 0,
    //     },
    //   },
    // },
    // MuiDialogTitle: {
    //   root: {
    //     padding: "20px 24px 16px",
    //   },
    // },
    // AccordionSummary: {
    //   root: {
    //     minHeight: "20px !important",
    //   },
    //   content: {
    //     margin: "0px !important",
    //   },
    // },
  },
});

export const htmlContentStyle = makeStyles({
  style: {
    "& strong": {
      fontFamily: "Mont-Bold",
    },
  },
});

export const htmlContent = makeStyles({
  // Styles to Content Written by user from Editor
  style: {
    "& *": {
      backgroundColor: "transparent !important",
      position: "static !important",
      "@media (max-width: 1024px)": {
        // padding: '0 0 0 16px',
      },
      "@media (max-width: 768px)": {
        padding: "0 0 0 0",
      },
    },
    "& div": {
      width: "100% !important",
      margin: "0px !important",
      padding: "0px !important",
    },
    "& img": {
      borderRadius: 5,
    },
    "& p,span": {
      color: `${BaseColor.blackColor} !important`,
      fontSize: "16px !important",
      fontFamily: `${FontFamily.Regular} !important`,
      "@media (max-width: 425px)": {
        fontSize: "0.9rem !important",
      },
      lineHeight: "1.8rem !important",
      [theme.breakpoints.down("sm")]: {
        lineHeight: "1.6rem !important",
      },
      [theme.breakpoints.down("xs")]: {
        lineHeight: "1.6rem !important",
      },
    },
    "& h1,h2,h3,h4": {
      margin: "1.5rem 0px 1.5rem 0px !important",
      lineHeight: "initial",
      color: "#264653 !important",
      fontFamily: `${FontFamily.Regular} !important`,
      fontSize: "22px !important",
      fontWeight: "400 !important",
      "@media (max-width: 425px)": {
        fontSize: "18px !important",
        margin: "0.5rem 0px 0.5rem 0px !important",
        lineHeight: "1.6rem !important",
      },
    },
    "& a": {
      color: `${BaseColor.primary} !important`,
      "&:hover": {
        color: `${BaseColor.primary}`,
        borderColor: `${BaseColor.primary}`,
        borderBottom: "1px solid",
      },
    },
    "& ul": {
      listStyleType: "none  !important",
      color: BaseColor.primary,
      listStylePosition: "outside  !important",
      padding: "0px 2.8rem !important",
      "& > li": {
        color: `${BaseColor.blackColor} !important`,
        fontSize: "16px !important",
        fontFamily: `${FontFamily.Regular} !important`,
        "@media (max-width: 425px)": {
          fontSize: "0.9rem !important",
        },
        lineHeight: "1.8rem !important",
        [theme.breakpoints.down("sm")]: {
          lineHeight: "1.6rem !important",
        },
        [theme.breakpoints.down("xs")]: {
          lineHeight: "1.6rem !important",
        },
        "&:before": {
          listStyleType: "circle",
          content: '"•"',
          fontWeight: "bold",
          display: "inline-block",
          width: "1em",
          marginLeft: "-1em",
          color: BaseColor.primary,
          fontSize: "26px",
          [theme.breakpoints.down("sm")]: {},
          "@media (max-width: 425px)": {
            fontSize: "20px",
          },
        },
      },
    },
    "& table": {
      margin: "15px 0 !important",
      borderCollapse: "collapse",
      overflowX: "scroll !important",
      width: "100%",
      "& th, td": {
        padding: 5,
        borderBottom: "1px solid #e0e2e4 !important",
        borderRight: "1px solid #e0e2e4 !important",
        borderTop: "1px solid #e0e2e4 !important",
        borderLeft: "1px solid #e0e2e4 !important",
        minWidth: "90px",
        lineHeight: "1.5rem",
      },
      "& tr:first-child": { backgroundColor: "#2A9D8F50 !important" },
      "& tr:only-child": {
        backgroundColor: "transparent !important",
        "& th, td": {
          borderTop: "0px solid #e0e2e4 !important",
          borderLeft: "0px solid #e0e2e4 !important",
          borderBottom: "0px solid #e0e2e4 !important",
          borderRight: "0px solid #e0e2e4 !important",
        },
      },
      "@media (max-width: 1024px)": {
        margin: "15px 15px !important",
      },
      "@media (max-width: 768px)": {
        margin: "15px 0 !important",
        width: "100% !important",
      },
    },
    "& ol": {
      padding: "0px 2.5rem !important",
      "& > li": {
        color: `${BaseColor.black} !important`,
        fontSize: "16px !important",
        fontFamily: `${FontFamily.Regular} !important`,
        "@media (max-width: 425px)": {
          fontSize: "0.9rem !important",
        },
        lineHeight: "1.8rem !important",
        [theme.breakpoints.down("sm")]: {
          lineHeight: "1.6rem !important",
        },
        [theme.breakpoints.down("xs")]: {
          lineHeight: "1.6rem !important",
        },
        "&:before": {
          color: BaseColor.primary,
          marginRight: "16px",
          fontSize: "26px",
          [theme.breakpoints.down("sm")]: {
            marginRight: "16px",
          },
          "@media (max-width: 425px)": {
            marginRight: "16px",
            fontSize: "20px",
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 1rem !important",
    },
    maxWidth: "100% !important",
    wordBreak: "break-word",
    // whiteSpace: 'pre-line',
  },
});

export default theme;
