import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const channelTitle = useSelector(
    ({ channelDetail }) => channelDetail.channelDetail.title
  );
  const location = useLocation();

  return (
    <Card
      className="video-card"
      sx={{
        boxShadow: "none",
        borderRadius: "8px",
        backgroundColor: darkGreyBg,
      }}
    >
      <Link to={video?.videoId ? `/video/${video?.videoId}` : demoVideoUrl}>
        <div style={{ position: "relative" }}>
          <CardMedia
            className="video-img"
            image={
              video?.thumbnail[3]?.url ||
              video?.thumbnail[2]?.url ||
              video?.thumbnail[1]?.url ||
              video?.thumbnail[0]?.url
            }
            alt={video?.title}
          />
          {video?.lengthText && (
            <Typography
              variant="body2"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                color: "#fff",
                lineHeight: 1,
                padding: "4px 6px",
                backgroundColor: "#3b3b3b",
                borderRadius: "7px",
              }}
            >
              {video?.lengthText}
            </Typography>
          )}
        </div>
      </Link>
      <CardContent
        className="video-descr"
        sx={{
          backgroundColor: "transparent",
          padding: "7px 14px",
        }}
      >
        <Link to={video?.videoId ? `/video/${video?.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="#fff">
            {video?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            video?.channelId
              ? `/channel/${video?.channelId}`
              : location.pathname || demoChannelUrl
          }
        >
          <Typography
            className="video-card-subtitle"
            variant="subtitle2"
            color="gray"
          >
            {video?.channelTitle || channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 13, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
};

export default VideoCard;
