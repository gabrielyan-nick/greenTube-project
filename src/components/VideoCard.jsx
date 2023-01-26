import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  darkGreyBg,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  return (
    <Card
      className="video-card"
      sx={{
        boxShadow: "none",
        borderRadius: "8px",
        backgroundColor: darkGreyBg
      }}
    >
      <Link
        to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl}
      >
        <CardMedia
          className="video-img"
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.title}
        />
      </Link>
      <CardContent
        className="video-descr"
        sx={{
          backgroundColor: 'transparent',
          padding: "7px 14px",
        }}
      >
        <Link
          to={
            video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl
          }
        >
          <Typography variant="subtitle1" color="#fff">
            {video?.snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          to={
            video?.snippet?.channelId
              ? `/channel/${video?.snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            className="video-card-subtitle"
            variant="subtitle2"
            color="gray"
          >
            {video?.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 13, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
