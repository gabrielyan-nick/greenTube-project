import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  ErrorBoundary,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#454545" }}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ErrorBoundary>
              <Feed />
            </ErrorBoundary>
          }
        />
        <Route
          path="/video/:id"
          element={
            <ErrorBoundary>
              <VideoDetail />
            </ErrorBoundary>
          }
        />
        <Route
          path="/channel/:id"
          element={
            <ErrorBoundary>
              <ChannelDetail />
            </ErrorBoundary>
          }
        />
        <Route
          path="/search/:searchTerm"
          element={
            <ErrorBoundary>
              <SearchFeed />
            </ErrorBoundary>
          }
        />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
