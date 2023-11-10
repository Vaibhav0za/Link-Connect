import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CAppBar from "../../Components/CAppBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CImageCard from "../../Components/CImageCard";
import PepoleSuggestion from "../../Components/PepoleSuggestion";
import BaseSetting from "../../apis/setting";
import { getApiData } from "../../apis/apiHelper";
export default function Home() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    allPostData();
  }, []);
  const allPostData = () => {
    const endpoint = `${BaseSetting.endpoint.getAllPost}`;
    getApiData(endpoint, "get")
      .then((result) => {
        console.log("result =====>>>>> ", result.status);
        if (result?.status) {
          const response = result.allPosts;
          console.log("response =====>>>>> ", response);
          setPostData(response);
        } else {
          console.log("=====>>>>> error  ");
        }
      })
      .catch((err) => {
        console.log("=====>>>>> error ", err);
      });
  };
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
          {postData.map((data) => (
            <Avatar
              sx={{
                width: 70,
                height: 70,
                cursor: "pointer",
                border: `2px black solid`,
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
          {postData.map((data) => (
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
