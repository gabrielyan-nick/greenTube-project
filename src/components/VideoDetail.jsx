import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchVideoDetail } from "../redux/actions/videoDetail";
import { Videos } from "../components";

const VideoDetail = () => {
  const [isTabletWidth, setIsTabletWidth] = useState(false);
  const [btnShowMore, setBtnShowMore] = useState(false);
  const [isOpenDescr, setOpenDescr] = useState(false);
  const [isBigDescr, setIsBigDescr] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { video, relatedVideos, isLoaded } = useSelector(
    ({ videoDetail }) => videoDetail
  );
  const descrRef = useRef(null);
  const publishDate = new Date(video.uploadDate).toUTCString().slice(5, -13);

  useEffect(() => {
    dispatch(fetchVideoDetail(id));
    window.scrollTo(0, 0);
    descrRef?.current?.scrollHeight > 130 && setBtnShowMore(true);
    descrRef?.current?.scrollHeight > 130 && setIsBigDescr(true);
  }, [id]);

  useEffect(() => {
    onSetDeviceWidth();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onSetDeviceWidth);

    return () => window.removeEventListener("resize", onSetDeviceWidth);
  }, []);

  const onSetDeviceWidth = () => {
    document.documentElement.clientWidth < 1000
      ? setIsTabletWidth(true)
      : setIsTabletWidth(false);
  };

  const onToggleOpenDescr = () => {
    setOpenDescr(!isOpenDescr);
  };

  return (
    <Box className="video-detail-wrapper" sx={{ backgroundColor: "#454545" }}>
      <Box className="video-content-wrapper">
        <Box
          sx={{
            width: "100%",
            height: { sm: "auto", md: "93.9vh" },
            overflowY: "scroll",
          }}
        >
          <Box className="player-wrapper">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="player"
              width="100%"
              height="100%"
              controls
            />
          </Box>

          <Box
            py={{ xs: 1, sm: 1, md: 3 }}
            px={{ xs: 1, sm: 2, md: 4 }}
            className="video-title-wrapper"
          >
            <Box sx={{ width: { xs: "100%", md: "80%" } }}>
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
            <Stack direction={{ xs: "row", sm: "column" }} gap={1}>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {publishDate}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(video.viewCount).toLocaleString()} views
              </Typography>
            </Stack>
          </Box>
          <Box py={{ xs: 1, sm: 1, md: 3 }} px={{ xs: 1, sm: 2, md: 4 }}>
            <Typography
              variant="body2"
              color="#fff"
              px={3}
              py={2}
              sx={{
                borderRadius: `${isBigDescr ? "8px 8px 0 0" : "8px"}`,
                backgroundColor: "#272626",
                height: `${
                  isBigDescr && !isOpenDescr
                    ? "130px"
                    : isBigDescr && isOpenDescr
                    ? `auto`
                    : `auto`
                }`,
                overflowY: "hidden",
                transition: "all .3s",
              }}
              ref={descrRef}
            >
              {video?.description}
            </Typography>
            {btnShowMore && (
              <button
                onClick={onToggleOpenDescr}
                className="descr-resize-btn"
                style={{
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <Typography variant="button" className="btn-text">
                  Show more
                </Typography>
              </button>
            )}
          </Box>
        </Box>

        <Box className="rel-videos-wrapper">
          <Videos
            videos={relatedVideos}
            isLoaded={isLoaded}
            classN={`${
              isTabletWidth ? "videos-wrapper" : "related-videos-wrapper"
            }`}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
