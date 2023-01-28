import React from "react";
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
  id = "",  //
}) => {
  return (
    <Box
      className={`${classN}`}
      sx={{
        boxShadow: "none",
        backgroundColor: darkGreyBg,
        borderRadius,
        width,
      }}
    >
      <Link
        to={`/channel/${
          channelDetail?.id?.channelId || channelDetail?.id || id
        }`}
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
              channelDetail.thumbnail ? channelDetail.thumbnail[2 || 1 || 0]?.url :
              demoProfilePicture
            }
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

export default ChannelCard;
