import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";

export default function AlignItemsList({ profileImg, username, status }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={username} src={profileImg} />
        </ListItemAvatar>
        <ListItemText primary={username} />
        <Button variant={status ? "contained" : "outlined"}>
          {status ? "Add back" : "add"}
        </Button>
      </ListItem>
      <Divider variant="fullWidth" />
    </List>
  );
}
