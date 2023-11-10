import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FontFamily } from "../../Config/theme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DashboardCard = (props) => {
  const { title, count, icon, onClick = () => {}, arrow=true} = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grid container>
      <Grid item xs={12} style={{ position: "relative" }}>
        {" "}
        {
          arrow &&  <Grid
          sx={{
            cursor: "pointer",
            "& :hover": {
              transform: "rotate(-15deg)",
            },
          }}
          onClick={onClick}
        >
          <ArrowForwardIcon
            sx={{
              position: "absolute",
              right: "10px",
              top: "10px",
              fontSize: "30px",
              transition: 'all 0.2s ease-in-out',
              transform: isHovered ? 'scaleX(1.3)' : null ,
              
            }}
          />
        </Grid>
        }
       
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        style={{
          boxShadow: "0 0 5px 2px rgb(103	65	136 / 20%)",
          height: "130px",
          width: "100%",
          borderRadius: "10px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Grid
          item
          xs={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </Grid>

        <Grid item xs={9} justifyContent={"center"} alignItems={"center"}>
          <div>
            <Typography
              style={{ fontFamily: FontFamily.SemiBold, fontSize: "30px" }}
            >
              {count}
            </Typography>
            <Typography
              style={{ fontFamily: FontFamily.SemiBold, fontSize: "15px" }}
            >
              {title}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardCard;