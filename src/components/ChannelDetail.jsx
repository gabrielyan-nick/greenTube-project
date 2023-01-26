import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Videos, ChannelCard } from "../components";
import { Box, Typography } from "@mui/material";

import { fetchChannelDetail } from "../redux/actions/channelDetail";

const ChannelDetail = () => {
  const dispatch = useDispatch();
  const channelDetail = useSelector(
    ({ channelDetail }) => channelDetail.channelDetail
  );
  const { id } = useParams();
  console.log(channelDetail);
  useEffect(() => {
    dispatch(fetchChannelDetail(id));
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#272626",
        }}
      >
        <div
          style={{
            height: "300px",
            width: "100%",
            background: "rgb(1,135,73)",
            background:
              "linear-gradient(90deg, rgba(1,135,73,1) 0%, rgba(144,238,144,1) 50%, rgba(46,139,87,1) 100%)",
          }}
        />

        <Box style={{ display: "flex", gap: '15px' }}>
          <ChannelCard channelDetail={channelDetail} />
          <Box  className='channel-descr-wrapper'>
            <Typography variant="body1" color='#fff'>
              {channelDetail?.snippet?.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
