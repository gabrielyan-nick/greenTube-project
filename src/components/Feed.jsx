import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useState, useEffect, useRef, useCallback } from "react";
import { Sidebar, Videos } from "../components";
import useFetch from "../utils/fetchFromApi";
import { secondaryGreen, textGreen } from "../utils/constants";
import { fetchVideos, setFetching } from "../redux/actions/videos";
import { setCategory } from "../redux/actions/categories";
import { useDispatch, useSelector } from "react-redux";

const Feed = () => {
  const dispatch = useDispatch();
  const { items, isLoaded, nextPageToken, fetching } = useSelector(
    ({ videos }) => videos
  );
  const category = useSelector(({ categories }) => categories.category);
  const wrapper = useRef(null);
  console.log(nextPageToken);
  useEffect(() => {
    dispatch(fetchVideos("search?q=", category));
  }, [category]);

  useEffect(() => {
    fetching && dispatch(fetchVideos("search?q=", category, nextPageToken));
  }, [fetching]);

  useEffect(() => {
    const target = wrapper.current;
    target.addEventListener("scroll", scroll);

    return () => target.removeEventListener("scroll", scroll);
  }, []);

  const scroll = (e) => {
    let scrollHeight = Math.max(
      wrapper.current.scrollHeight,
      wrapper.current.scrollHeight
    );
    let scrollTop =
      wrapper.current.pageYOffset ||
      wrapper.current.scrollTop ||
      wrapper.current.scrollTop;

    if (scrollTop + wrapper.current.clientHeight >= scrollHeight) {
      dispatch(setFetching(true));
    }
  };

  const onSelectCategory = useCallback((item) => {
    dispatch(setCategory(item));
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
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
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
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

// `search?part=snippet&q=${selectedCategory}`
