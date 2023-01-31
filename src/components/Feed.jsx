import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useEffect, useRef, useCallback } from "react";
import { Sidebar, Videos } from "../components";
import { textGreen } from "../utils/constants";
import { fetchVideos, setFetching, setCategory } from "../redux/actions/videos";
import { useDispatch, useSelector } from "react-redux";

const Feed = () => {
  const dispatch = useDispatch();
  const { items, isLoaded, nextPageToken, fetching, category } = useSelector(
    ({ videos }) => videos
  );
  const wrapper = useRef(null);

  useEffect(() => {
    dispatch(fetchVideos(category));
  }, [category]);

  useEffect(() => {
    fetching && dispatch(fetchVideos(category, nextPageToken, true));
  }, [fetching]);

  useEffect(() => {
    const target = wrapper.current;
    target.addEventListener("scroll", lazzyLoading);

    return () => target.removeEventListener("scroll", lazzyLoading);
  }, []);

  const lazzyLoading = () => {
    if (
      wrapper.current.scrollTop + wrapper.current.clientHeight >=
      wrapper.current.scrollHeight - 300
    ) {
      dispatch(setFetching(true));
    }
  };

  const onSelectCategory = useCallback((item) => {
    dispatch(setCategory(item));
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row", height: '94vh' } }}>
      <Box
        className="aside"
        py="5px"
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3F9C51",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar onSelectCategory={onSelectCategory} category={category} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 GreenMedia Corp.
        </Typography>
      </Box>
      <Box
        ref={wrapper}
        p={{ md: 2, sm: 1, xs: "5px" }}
        sx={{ overflowY: "auto", height: "90vh" }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#fff", marginBottom: "5px" }}
        >
          {category} <span style={{ color: textGreen }}>videos</span>
        </Typography>
        <Videos videos={items} isLoaded={isLoaded} />
      </Box>
    </Stack>
  );
};

export default Feed;
