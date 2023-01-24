import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from "../components";
import useFetch from "../utils/fetchFromApi";
import { secondaryGreen, textGreen } from "../utils/constants";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const { isLoaded, error, fetchFromApi } = useFetch();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((e) => console.log(e));
  }, [selectedCategory]);

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
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 GreenMedia Corp.
        </Typography>
      </Box>
      <Box
        p={{ md: 2, sm: 1, xs: "5px" }}
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#fff", marginBottom: "5px" }}
        >
          {selectedCategory} <span style={{ color: textGreen }}>videos</span>
        </Typography>
        <Videos videos={videos} isLoaded={isLoaded} error={error} />
      </Box>
    </Stack>
  );
};

export default Feed;
