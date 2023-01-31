import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoProfilePicture,
  darkGreyBg,
  secondaryGreen,
} from "../utils/constants";

const ChannelCard = ({
  channelDetail,
  classN,
  borderRadius,
  width = "250px",
  id = "",
}) => {
  const maxRezThumbnail =
    channelDetail?.thumbnail[2]?.url ||
    channelDetail?.thumbnail[1]?.url ||
    channelDetail?.thumbnail[0]?.url;
  const thumbnail = maxRezThumbnail.includes("https", 0)
    ? maxRezThumbnail
    : `https:${maxRezThumbnail}`;

  return (
    <Box
      className={`${classN}`}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        backgroundColor: darkGreyBg,
        borderRadius,
        width,
      }}
    >
      <Link to={`/channel/${channelDetail?.channelId || id}`}>
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
            image={channelDetail?.thumbnail ? thumbnail : demoProfilePicture}
            alt={channelDetail?.title}
            sx={{
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              border: "1px solid #90ee90",
              margin: "0 auto 20px",
            }}
          ></CardMedia>
          <Typography variant="h6">
            {channelDetail?.title}
            <CheckCircle sx={{ fontSize: 15, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.subscriberCount).toLocaleString()}
              &nbsp;Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

ChannelCard.propTypes = {
  channelDetail: PropTypes.object,
  classN: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  id: PropTypes.string,
};

export default ChannelCard;
