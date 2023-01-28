import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonChannelCard = (props) => (
  <ContentLoader
  className="skeleton-channel-card"
    speed={2}
    viewBox="0 0 1000 300"
    backgroundColor="#555454"
    foregroundColor="#317c40"
    {...props}
  >
    <circle cx="136" cy="96" r="76" />
    <rect x="76" y="229" rx="0" ry="0" width="120" height="24" />
    <rect x="61" y="192" rx="0" ry="0" width="150" height="30" />
    <rect x="287" y="63" rx="0" ry="0" width="500" height="25" />
    <rect x="287" y="92" rx="0" ry="0" width="500" height="25" />
    <rect x="287" y="121" rx="0" ry="0" width="500" height="25" />
    <rect x="287" y="151" rx="0" ry="0" width="500" height="25" />
  </ContentLoader>
);

export default SkeletonChannelCard;
