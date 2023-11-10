import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import Files from "../../Config/Files";
import CategoryIcon from "@mui/icons-material/Category";
import DraftsIcon from "@mui/icons-material/Drafts";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupIcon from "@mui/icons-material/Group";
import QuizIcon from "@mui/icons-material/Quiz";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SegmentIcon from "@mui/icons-material/Segment";
import ReportIcon from "@mui/icons-material/Report";
import TuneIcon from "@mui/icons-material/Tune";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import VerifiedIcon from "@mui/icons-material/Verified";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import InterestsIcon from "@mui/icons-material/Interests";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CodeIcon from "@mui/icons-material/Code";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LogoutIcon from "@mui/icons-material/Logout";
import GradeIcon from "@mui/icons-material/Grade";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ClearIcon from "@mui/icons-material/Clear";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ChatIcon from "@mui/icons-material/Chat";
import socket from "../../Apis/socket";
import Tooltip from "@mui/material/Tooltip";
import { Group } from "@mui/icons-material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GTranslate from "@mui/icons-material/GTranslate";
import { Badge } from "@mui/material";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props) {
  const navigate = useNavigate();
  const { header, children } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const [sortOrder, setSortOrder] = useState();

  const { userData, notificationData } = useSelector((state) => state?.auth);

  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [newsLetterElMenu, setNewsLetterElMenu] = React.useState(null);
  const openNewsMnu = Boolean(newsLetterElMenu);
  const openMenu = Boolean(anchorElMenu);

  const handleCloseMenu = (val) => {
    if (val === "bulk") {
      navigate("/bulk-mail");
    } else if (val === "template") {
      navigate("/bulk-template");
    }
    setAnchorElMenu(null);
  };

  const handleCloseMenuNews = (val) => {
    if (val === "send-emails") {
      navigate("/send-emails");
    } else if (val === "list") {
      navigate("/news-letter-list");
    } else if (val === "send-news-letter-list") {
      navigate("/send-news-letter-list");
    } else if (val === "groups") {
      navigate("/groups");
    }
    setNewsLetterElMenu(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routes = {
    Dashboard: "/dashboard",
    Category: "/category",
    Condition: "/conditions",
    Plan: "/plan",
    "All Posts": "/all-posts",
    "Business Type": "/business-type",
    Users: "/users",
    "All Users": "/all-users",
    "Ice Breaking Questions": "/ice-breaking-questions",
    "Report Users": "/report-users",
    "System Parameters": "/system-parameters",
    "Expired Posts": "/expired-posts",
    "Verify Users": "/verify-users",
    Countries: "/countries",
    "Interested Posts": "/interested-posts",
    Logistics: "/logistics",
    "Contact Us": "/contact-us",
    CMS: "/cms",
    "Email Template": "/email-template",
    "Not Verified Users": "/not-verified-users",
    "SMS Template": "/sms-template",
    "Notification Template": "/notification-template",
    "Rating List": "/rating-list",
    "Alert Data": "/alert-data",
    "Bulk Mail": "/bulk-mail",
    Chat: "/chat-page",
    "Send Notification": "/send-notifications",
    "News Letter Subscribe": "/news-letter-subscribe",
    Translate: "/translate-page",
    "Custom Notification": "/custom-notification",
  };

  const [sortedRoutes, setSortedRoutes] = useState(Object.entries(routes));

  const pathname = location?.pathname;

  const sortArray = (order) => {
    const sorted = [...sortedRoutes];
    sorted.sort((a, b) => {
      if (order === "asc") {
        return a[1].localeCompare(b[1]);
      } else if (order === "desc") {
        return b[1].localeCompare(a[1]);
      }
      return 0;
    });
    setSortedRoutes(sorted);
    // console.log("sorted =====>>>>> ", sorted);
    setSortOrder(order);
    // console.log("order =====>>>>> ", order);
  };

  const resetSort = () => {
    setSortedRoutes(Object.entries(routes));
    setSortOrder();
    // console.log(sortOrder);
  };

  const LogOutUser = () => {
    localStorage.clear();
    window.location.reload();
    socket.disconnect();
    // navigate("/login")
  };
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      {/* <Helmet>
        <title>ScrapC Admin WebApp | {header}</title>
      </Helmet> */}
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontSize: "23px !important" }}
            >
              {header}
            </Typography>
            {userData?.first_name != null ? (
              <>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 40, height: 40 }}>
                    {userData?.first_name.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={menuOpen}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate("/my-profile")}
                    >
                      My profile
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center" onClick={() => LogOutUser()}>
                      Logout
                    </Typography>
                  </MenuItem>
                  {/* <MenuItem>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate("/change-password")}
                    >
                      Change password
                    </Typography>
                  </MenuItem> */}
                </Menu>
              </>
            ) : null}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        // onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
        sx={{
          "&:hover .MuiPaper-root::-webkit-scrollbar-thumb": {
            background: "#674188",
          },
          ".MuiPaper-root::-webkit-scrollbar": {
            width: "5px",
          },
          ".MuiPaper-root::-webkit-scrollbar-track": {
            background: "#F7EFE5",
          },
          ".MuiPaper-root::-webkit-scrollbar-thumb": {
            background: "rgba(103, 65, 136, 0.5)",
            borderRadius: "10px",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <img
            src={Files?.images?.colorLogo}
            alt="Scarp C"
            style={{ height: 60, width: 400, objectFit: "contain" }}
          />

          <IconButton
            sx={{
              zIndex: 1,
              padding: 0,
              borderRadius: 20,
              ...(!open && { display: "none" }),
            }}
          >
            {sortOrder === "desc" || sortOrder === "asc" ? (
              <IconButton onClick={resetSort}>
                <ClearIcon sx={{ color: "#757575" }} />
              </IconButton>
            ) : null}
            <IconButton
              onClick={() => sortArray(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? (
                <ArrowDownwardIcon sx={{ color: "#757575", fontSize: 20 }} />
              ) : (
                <ArrowUpwardIcon sx={{ color: "#757575", fontSize: 20 }} />
              )}
            </IconButton>
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorElMenu}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              sx={{
                m: 1,
                color: "#757575",
                pr: 9,
                "&:hover": {
                  backgroundColor: "#C3ACD0",
                },
              }}
              onClick={() => handleCloseMenu("bulk")}
            >
              <MarkEmailReadIcon sx={{ mr: 1 }} />
              Bulk Emails
            </MenuItem>
            <MenuItem
              sx={{
                m: 1,
                color: "#757575",
                pr: 9,
                "&:hover": {
                  backgroundColor: "#C3ACD0",
                },
              }}
              onClick={() => handleCloseMenu("template")}
            >
              <MarkEmailReadIcon sx={{ mr: 1 }} />
              Bulk Templates
            </MenuItem>
          </Menu>
          <Menu
            id="basic-menu"
            anchorEl={newsLetterElMenu}
            open={openNewsMnu}
            onClose={handleCloseMenuNews}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              sx={{
                m: 1,
                color: "#757575",
                pr: 9,
                "&:hover": {
                  backgroundColor: "#C3ACD0",
                },
              }}
              onClick={() => handleCloseMenuNews("groups")}
            >
              <GroupIcon sx={{ mr: 1 }} />
              Groups
            </MenuItem>
            <MenuItem
              sx={{
                m: 1,
                color: "#757575",
                pr: 9,
                "&:hover": {
                  backgroundColor: "#C3ACD0",
                },
              }}
              onClick={() => handleCloseMenuNews("send-emails")}
            >
              <MarkEmailReadIcon sx={{ mr: 1 }} />
              Send Emails
            </MenuItem>
            <MenuItem
              sx={{
                m: 1,
                color: "#757575",
                pr: 9,
                "&:hover": {
                  backgroundColor: "#C3ACD0",
                },
              }}
              onClick={() => handleCloseMenuNews("list")}
            >
              <ListAltIcon sx={{ mr: 1 }} />
              News letter list
            </MenuItem>
            <MenuItem
              sx={{
                m: 1,
                color: "#757575",
                pr: 9,
                "&:hover": {
                  backgroundColor: "#C3ACD0",
                },
              }}
              onClick={() => handleCloseMenuNews("send-news-letter-list")}
            >
              <MarkEmailReadIcon sx={{ mr: 1 }} />
              Send News letter list
            </MenuItem>
          </Menu>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
          {drawerItems.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() =>
                  index === 0
                    ? navigate("/category")
                    : index === 1
                    ? navigate("/conditions")
                    : index === 2
                    ? navigate("/plan")
                    : index === 3
                    ? navigate("/seller")
                    : index === 4
                    ? navigate("/buyer")
                    : index === 5
                    ? navigate("/drafts")
                    : index === 6
                    ? navigate("/business-type")
                    : index === 7
                    ? navigate("/active-users")
                    : index === 8
                    ? navigate("/all-users")
                    : navigate("/ice-breaking-questions")
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        {sortedRoutes.map((routeName, index) => {
          const route = sortedRoutes[index][0];

          return (
            <Tooltip title={!open ? `${routeName[0]}` : ""} placement="right">
              <ListItem
                selected={routeName[1] === pathname}
                button
                key={route}
                disablePadding
                sx={{
                  display: "block",
                  "&.Mui-selected": {
                    backgroundColor: "#C3ACD0",
                    "&:hover": {
                      backgroundColor: "#C3ACD0",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#C3ACD0",
                  },
                }}
              >
                <ListItemButton
                  onClick={(event) => {
                    if (routeName[1] === "/bulk-mail") {
                      setAnchorElMenu(event.currentTarget);
                    } else if (routeName[1] === "/news-letter-subscribe") {
                      setNewsLetterElMenu(event.currentTarget);
                    } else {
                      navigate(routeName[1]);
                    }
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {routeName[0] === "Dashboard" ? (
                      <SpaceDashboardIcon />
                    ) : routeName[0] === "Category" ? (
                      <CategoryIcon />
                    ) : routeName[0] === "Condition" ? (
                      <SegmentIcon />
                    ) : routeName[0] === "Plan" ? (
                      <ChecklistIcon />
                    ) : routeName[0] === "All Posts" ? (
                      <DraftsIcon />
                    ) : routeName[0] === "Business Type" ? (
                      <BusinessCenterIcon />
                    ) : routeName[0] === "Users" ? (
                      <PersonPinIcon />
                    ) : routeName[0] === "All Users" ? (
                      <GroupIcon />
                    ) : routeName[0] === "Ice Breaking Questions" ? (
                      <QuizIcon />
                    ) : routeName[0] === "Report Users" ? (
                      <ReportIcon />
                    ) : routeName[0] === "System Parameters" ? (
                      <TuneIcon />
                    ) : routeName[0] === "Expired Posts" ? (
                      <TimerOffIcon />
                    ) : routeName[0] === "Verify Users" ? (
                      <VerifiedIcon />
                    ) : routeName[0] === "Countries" ? (
                      <FlagCircleIcon />
                    ) : routeName[0] === "Interested Posts" ? (
                      <InterestsIcon />
                    ) : routeName[0] === "Logistics" ? (
                      <LocalShippingIcon />
                    ) : routeName[0] === "Contact Us" ? (
                      <ConnectWithoutContactIcon />
                    ) : routeName[0] === "CMS" ? (
                      <CodeIcon />
                    ) : routeName[0] === "Email Template" ? (
                      <MarkunreadIcon />
                    ) : routeName[0] === "Not Verified Users" ? (
                      <UnpublishedIcon />
                    ) : routeName[0] === "SMS Template" ? (
                      <TextsmsIcon />
                    ) : routeName[0] === "Notification Template" ? (
                      <NotificationsIcon />
                    ) : routeName[0] === "Rating List" ? (
                      <GradeIcon />
                    ) : routeName[0] === "Alert Data" ? (
                      <PriorityHighIcon />
                    ) : routeName[0] === "Bulk Mail" ? (
                      <ForwardToInboxIcon />
                    ) : routeName[0] === "Chat" ? (
                      notificationData ? (
                        <Badge
                          variant="dot"
                          color="primary"
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          sx={{
                            "& .MuiBadge-badge": {
                              height: 12,
                              minWidth: 12,
                              borderRadius: "50%",
                              marginTop: "2px",
                              marginRight: "2px",
                            },
                          }}
                        >
                          <ChatIcon />
                        </Badge>
                      ) : (
                        <ChatIcon />
                      )
                    ) : routeName[0] === "Send Notification" ? (
                      <NotificationsIcon />
                    ) : routeName[0] === "News Letter Subscribe" ? (
                      <NewspaperIcon />
                    ) : routeName[0] === "Translate" ? (
                      <GTranslate />
                    ) : routeName[0] === "Custom Notification" ? (
                      <NotificationAddIcon />
                    ) : (
                      ""
                    )}
                    {/*   */}
                  </ListItemIcon>
                  <ListItemText
                    primary={routeName[0]}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          );
        })}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 2,
          p: 3,
          width: "80%",
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
