import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function RecipeReviewCard({
  imgSrc,
  postLocation,
  postCaption,
  username,
}) {
  return (
    <Card sx={{ maxWidth: 500, boxShadow: "none", mt: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
            {username.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={username}
        subheader={
          postLocation && (
            <div>
              <LocationOnIcon style={{ fontSize: 15 }} /> {postLocation}
            </div>
          )
        }
      />
      <CardMedia component="img" height="400" image={imgSrc} alt="post" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postCaption}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="like">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutlineIcon />
        </IconButton>

        <IconButton
          sx={{ display: "flex", alignItems: "end" }}
          aria-label="share"
        >
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
