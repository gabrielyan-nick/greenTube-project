import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Videos, ChannelCard } from "../components";
import { Box, Typography } from "@mui/material";
import {
  fetchChannelDetail,
  fetchChannelVideos,
  setFetching,
} from "../redux/actions/channelDetail";

const ChannelDetail = () => {
  const dispatch = useDispatch();
  const { channelDetail, channelVideos, isLoaded, nextPageToken, fetching } =
    useSelector(({ channelDetail }) => channelDetail);
  const { id } = useParams();
  const videoCount = +channelDetail?.statistics?.videoCount;

  useEffect(() => {
    dispatch(fetchChannelDetail(id));
    dispatch(fetchChannelVideos(id));
  }, [id]);

  useEffect(() => {
    fetching && dispatch(fetchChannelVideos(id, nextPageToken));
  }, [fetching]);

  useEffect(() => {
    window.addEventListener("scroll", lazzyLoading);

    return () => window.removeEventListener("scroll", lazzyLoading);
  }, []);

  const lazzyLoading = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 300 &&
      channelVideos.length < videoCount
    ) {
      dispatch(setFetching(true));
    }
  };

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

        <div className="channel-content-wrapper">
          <ChannelCard channelDetail={channelDetail} classN={"channel-card"} />
          <div className="channel-descr">
            <Typography variant="body1" color="#fff">
              {channelDetail?.snippet?.description.slice(0, 950) ||
                "Very informative description..."}
            </Typography>
          </div>
        </div>
      </Box>
      <Box p={2}>
        <Videos videos={channelVideos} isLoaded={isLoaded} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
