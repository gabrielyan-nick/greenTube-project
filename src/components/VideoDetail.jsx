import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchVideoDetail } from "../redux/actions/videoDetail";
import { Videos } from "../components";

const VideoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { video, relatedVideos, isLoaded } = useSelector(
    ({ videoDetail }) => videoDetail
  );
  const publishDate = new Date(video.uploadDate).toUTCString().slice(5, -13);

  useEffect(() => {
    dispatch(fetchVideoDetail(id));
  }, [id]);
  return (
    <Box height="93.9vh" sx={{ backgroundColor: "#454545" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          sx={{
            width: "100%",
            height: "93.9vh",
            overflowY: "scroll",
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="player"
            controls
          />
          <Box
            px={4}
            py={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "#fff",
            }}
          >
            <Box>
              <Typography variant="h6" color="#fff" fontWeight="bold">
                {video.title}
              </Typography>
              <Link to={`/channel/${video.channelId}`}>
                <Typography
                  variant="subtitle1"
                  color="#fff"
                  sx={{
                    pt: "5px",
                    transition: "all .3s",
                    "&:hover": {
                      color: "#9fe9ac",
                    },
                  }}
                >
                  {video.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "13px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
            </Box>
            <Stack direction="column" gap={1}>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(video.viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {publishDate}
              </Typography>
            </Stack>
          </Box>
          <Box py={2} px={4}>
            <Typography
              variant="body2"
              color="#fff"
              px={3}
              py={2}
              sx={{ borderRadius: "8px", backgroundColor: "#272626" }}
            >
              {video?.description}
            </Typography>
          </Box>
        </Box>

        <Box px={2} py={1} sx={{ width: "30%" }}>
          <Videos
            videos={relatedVideos}
            isLoaded={isLoaded}
            classN="related-videos-wrapper"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
