import React from "react";
import { Grid } from "@mui/material";
import CAppBar from "../../Components/CAppBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CImageCard from "../../Components/CImageCard";
import PepoleSuggestion from "../../Components/PepoleSuggestion";
export default function Home() {
  const dum_data = [
    {
      post_id: 1,
      postImg: "https://source.unsplash.com/random/800x600",
      postCaption: "Beautiful sunset at the beach",
      postLocation: "Beach Paradise",
      username: "vaibhav",
    },
    {
      post_id: 2,
      postImg: "https://source.unsplash.com/random/800x601",
      postCaption: "Exploring the city streets",
      postLocation: "Urban Exploration",
      username: "dipak",
    },
    {
      post_id: 3,
      postImg: "https://source.unsplash.com/random/800x602",
      postCaption: "Delicious homemade dinner",
      postLocation: "Home Sweet Home",
      username: "dev",
    },
    {
      post_id: 4,
      postImg: "https://source.unsplash.com/random/800x603",
      postCaption: "Hiking in the mountains",
      postLocation: "Mountain Trails",
      username: "aditya",
    },
    {
      post_id: 5,
      postImg: "https://source.unsplash.com/random/800x604",
      postCaption: "Adventures in the wilderness",
      postLocation: "Wilderness Escape",
      username: "jignesh",
    },
    {
      post_id: 6,
      postImg: "https://source.unsplash.com/random/800x605",
      postCaption: "Morning coffee vibes",
      postLocation: "Cozy Café Corner",
      username: "mit",
    },
    {
      post_id: 7,
      postImg: "https://source.unsplash.com/random/800x606",
      postCaption: "Sunrise over the city skyline",
      postLocation: "Cityscape Marvel",
      username: "yogesh",
    },
    {
      post_id: 8,
      postImg: "https://source.unsplash.com/random/800x607",
      postCaption: "Gardening joy in the backyard",
      postLocation: "Backyard Bliss",
      username: "neel",
    },
    {
      post_id: 9,
      postImg: "https://source.unsplash.com/random/800x608",
      postCaption: "Artistic graffiti on the streets",
      postLocation: "Street Art Extravaganza",
      username: "harshil",
    },
    {
      post_id: 10,
      postImg: "https://source.unsplash.com/random/800x609",
      postCaption: "Serenity by the lakeside",
      postLocation: "Lakeside Serenity",
      username: "ankit",
    },
  ];
  const pepoleYouKnow = [
    {
      id: 1,
      profileImg: "https://source.unsplash.com/random/200",
      username: "JohnDoe",
      followingStatus: true,
    },
    {
      id: 2,
      profileImg: "https://source.unsplash.com/random/100",
      username: "JaneSmith",
      followingStatus: false,
    },
    {
      id: 3,
      profileImg: "https://source.unsplash.com/random/300",
      username: "BobJohnson",
      followingStatus: true,
    },
    {
      id: 4,
      profileImg: "https://source.unsplash.com/random/30",
      username: "AliceWilliams",
      followingStatus: false,
    },
    {
      id: 5,
      profileImg: "https://source.unsplash.com/random/500",
      username: "CharlieBrown",
      followingStatus: true,
    },
    {
      id: 6,
      profileImg: "https://source.unsplash.com/random/400",
      username: "EvaMiller",
      followingStatus: false,
    },
    {
      id: 7,
      profileImg: "https://source.unsplash.com/random/380",
      username: "DavidLee",
      followingStatus: true,
    },
    {
      id: 8,
      profileImg: "https://source.unsplash.com/random/220",
      username: "GraceTaylor",
      followingStatus: false,
    },
    {
      id: 9,
      profileImg: "https://source.unsplash.com/random/328",
      username: "SamJones",
      followingStatus: true,
    },
    {
      id: 10,
      profileImg: "https://source.unsplash.com/random/420",
      username: "LilyWang",
      followingStatus: false,
    },
  ];

  return (
    <Grid container>
      <CAppBar />
      <Grid container>
        <Stack
          sx={{ ml: 2, mt: 2, overflow: "auto" }}
          direction="row"
          spacing={1}
        >
          {dum_data.map((data) => (
            <Avatar
              sx={{
                width: 70,
                height: 70,
                cursor: "pointer",
                border: `2px #562b7c solid`,
              }}
              key={data.post_id}
              alt="story"
              src={data.postImg}
            />
          ))}
        </Stack>
      </Grid>
      <Grid justifyContent={"space-evenly"} container>
        <Grid pt={5} flexDirection="column" item>
          {dum_data.map((data) => (
            <CImageCard
              key={data.post_id}
              imgSrc={data?.postImg}
              postCaption={data?.postCaption}
              postLocation={data?.postLocation}
              username={data?.username}
            />
          ))}
        </Grid>
        <Grid pt={5} flexDirection="column" item>
          Pepole You May Know ?
          {pepoleYouKnow.map((data) => (
            <PepoleSuggestion
              key={data.id}
              profileImg={data?.profileImg}
              username={data?.username}
              status={data?.followingStatus}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
