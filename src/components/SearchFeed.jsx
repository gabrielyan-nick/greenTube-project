import React from "react";
import { useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { useState, useEffect, useRef, useCallback } from "react";
import { Videos } from "../components";
import useFetch from "../utils/fetchFromApi";
import { textGreen } from "../utils/constants";
import { fetchVideos, setFetching, setCategory } from "../redux/actions/videos";
import { useDispatch, useSelector } from "react-redux";

const SearchFeed = () => {
  const dispatch = useDispatch();
  const { items, isLoaded, nextPageToken, fetching, category } = useSelector(
    ({ videos }) => videos
  );
  const { searchTerm } = useParams();
  const wrapper = useRef(null);

  useEffect(() => {
    dispatch(fetchVideos(searchTerm));
  }, [searchTerm]);

  useEffect(() => {
    fetching && dispatch(fetchVideos(searchTerm, nextPageToken, true));
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

  return (
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
        Results for: <span style={{ color: textGreen }}>{searchTerm}</span>{' '}
         videos
      </Typography>
      <Videos videos={items} isLoaded={isLoaded} />
    </Box>
  );
};

export default SearchFeed;
