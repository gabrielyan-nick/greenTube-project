import React from "react";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { VideoCard, ChannelCard, SkeletonVideoCard } from "../components";

const Videos = ({ videos, isLoaded }) => {
  return (
    <Box className="videos-wrapper">
      {isLoaded
        ? videos.map((item, i) => (
            <Box key={i}>
              {(item.id.videoId && <VideoCard video={item} />) ||
                (item.id.channelId && (
                  <ChannelCard
                    channelDetail={item}
                    classN={"video-card"}
                    borderRadius={"8px"}
                  />
                )) ||
                (item.id.playlistId && <VideoCard video={item} />)}
            </Box>
          ))
        : Array(12)
            .fill(0)
            .map((_, indx) => <SkeletonVideoCard key={`${indx}skeleton`} />)}
    </Box>
  );
};

export default Videos;
