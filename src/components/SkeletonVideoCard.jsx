import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonVideoCard = () => (
  <ContentLoader
    className="video-card"
    speed={2}
    viewBox="0 0 350 275"
    backgroundColor="#555454"
    foregroundColor="#317c40"
  >
    <rect x="0" y="0" rx="8" ry="8" width="350" height="170" />
    <rect x="14" y="207" rx="3" ry="3" width="322" height="23" />
    <rect x="14" y="235" rx="3" ry="3" width="140" height="20" />
    <rect x="14" y="177" rx="3" ry="3" width="322" height="23" />
  </ContentLoader>
);

export default SkeletonVideoCard;
