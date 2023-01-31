import { React, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Videos,
  ChannelCard,
  SkeletonChannelCard,
} from "../components";
import { Box, Typography } from "@mui/material";
import { fetchChannelDetail } from "../redux/actions/channelDetail";
import { setFetching } from "../redux/actions/videos";

const ChannelDetail = () => {
  const [isTabletWidth, setIsTabletWidth] = useState(false);
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [isOpenDescr, setOpenDescr] = useState(false);
  const dispatch = useDispatch();
  const { channelDetail, channelVideos, isLoaded, nextPageToken, fetching } =
    useSelector(({ channelDetail }) => channelDetail);
  const { id } = useParams();
  const descrRef = useRef(null);

  useEffect(() => {
    dispatch(fetchChannelDetail(id));
  }, [id]);

  useEffect(() => {
    fetching && dispatch(fetchChannelDetail(id, nextPageToken, true));
  }, [fetching]);

  useEffect(() => {
    window.addEventListener("scroll", lazzyLoading);

    return () => window.removeEventListener("scroll", lazzyLoading);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onSetDeviceWidth);

    return () => window.removeEventListener("resize", onSetDeviceWidth);
  }, []);

  useEffect(() => onSetDeviceWidth(), []);

  const onSetDeviceWidth = () => {
    document.documentElement.clientWidth < 900
      ? setIsTabletWidth(true)
      : setIsTabletWidth(false);

    if (document.documentElement.clientWidth < 700) {
      setIsMobileWidth(true);
      setIsTabletWidth(false);
    } else {
      setIsMobileWidth(false);
    }
  };

  const onToggleOpenDescr = () => {
    setOpenDescr(!isOpenDescr);
  };

  const lazzyLoading = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 300
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
        <Box
          sx={{
            height: { xs: "200px", md: "300px" },
            width: "100%",
            background: "rgb(1,135,73)",
            background:
              "linear-gradient(90deg, rgba(1,135,73,1) 0%, rgba(144,238,144,1) 50%, rgba(46,139,87,1) 100%)",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="channel-content-wrapper">
            {isLoaded ? (
              <>
                <ChannelCard
                  id={id} //
                  channelDetail={channelDetail}
                  classN={"channel-card"}
                  width={"300px"}
                />
                <div
                  className="channel-descr-wrapper"
                  style={{
                    padding: `${
                      isMobileWidth && isOpenDescr
                        ? "20px 0"
                        : isMobileWidth && !isOpenDescr
                        ? "0px"
                        : "20px"
                    }
                      
                          `,
                  }}
                >
                  <Typography
                    ref={descrRef}
                    sx={{
                      height: `${
                        isTabletWidth
                          ? `${
                              isOpenDescr
                                ? `${descrRef.current.scrollHeight}px`
                                : "235px"
                            }`
                          : isMobileWidth
                          ? `${
                              isOpenDescr
                                ? `${descrRef.current.scrollHeight}px`
                                : "0px"
                            }`
                          : "auto"
                      }`,
                      overflow: "hidden",
                      transition: "all .3s",
                    }}
                    variant="body1"
                    color="#fff"
                  >
                    {channelDetail?.description ||
                      "Very informative description..."}
                  </Typography>
                </div>
              </>
            ) : (
              <SkeletonChannelCard />
            )}
          </div>
          {(channelDetail?.description &&
            channelDetail?.description.length > 735) ||
          isMobileWidth ? (
            <button onClick={onToggleOpenDescr} className="descr-resize-btn">
              <Typography variant="button" className="btn-text">
                Show more
              </Typography>
            </button>
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Box px={2} py={3}>
        <Videos videos={channelVideos} isLoaded={isLoaded} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
