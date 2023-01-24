import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const onChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        backgroundColor: '#454545',
        borderRadius: 15,
        border: "1px solid #afe7b9",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        onChange={onChangeInput}
        className="search-bar"
        placeholder="Search..."
        name="search"
        value={searchInput}
        type="text"
      />
      <IconButton type="submit" sx={{ p: "5px", color: "#3F9C51" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
