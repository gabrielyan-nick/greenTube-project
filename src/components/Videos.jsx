import React from "react";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { VideoCard, ChannelCard, SkeletonVideoCard } from "../components";

const Videos = ({ videos, isLoaded }) => {

  return (
    <Box className="videos-wrapper">
      {
        // error
        //   ? Array(50)
        //       .fill(0)
        //       .map((_, indx) => <SkeletonVideoCard key={`${indx}skeleton`} />)
        //   :
        videos.map((item, i) => (
          <Box className="video-card-wrapper" key={i}>
            {
              isLoaded ? (
                (item.id.videoId && <VideoCard video={item} />) ||
                (item.id.channelId && <ChannelCard channelDetail={item} />)
              ) : (
                <SkeletonVideoCard key={`${i}skeleton`} />
              )
              // )
            }
            {/* {item.id.videoId && <VideoCard video={item} />} */}
            {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
          </Box>
        ))
      }
    </Box>
  );
};

export default Videos;
