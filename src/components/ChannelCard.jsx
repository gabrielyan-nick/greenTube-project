import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoProfilePicture,
  darkGreyBg,
  secondaryGreen,
} from "../utils/constants";

const ChannelCard = ({ channelDetail, isInVideos = false }) => {
  return (
    <Box
      className={isInVideos ? "video-card" : "channel-card"}
      sx={{
        boxShadow: "none",
        borderRadius: `${isInVideos ? "8px" : "none"}`,
        backgroundColor: darkGreyBg,
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
            padding: `${isInVideos ? "30px 0 0" : "20px 0 0"}`,
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
              border: "1px solid #e3e3e3",
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
