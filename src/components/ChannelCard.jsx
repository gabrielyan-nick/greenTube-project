import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoProfilePicture,
  darkGreyBg,
  secondaryGreen,
} from "../utils/constants";

const ChannelCard = ({ channelDetail, classN, borderRadius }) => {
  return (
    <Box
      className={`${classN}`}
      sx={{
        boxShadow: "none",
        backgroundColor: darkGreyBg,
        borderRadius,
      }}
    >
      <Link
        to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            padding: "20px 14px 0 14px",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              border: "1px solid #90ee90",
              margin: "0 auto 20px",
            }}
          ></CardMedia>
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 15, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
              &nbsp;Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
