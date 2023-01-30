import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm && navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  const onChangeInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Paper
      className="search-wrapper"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#454545",
        borderRadius: 15,
        border: "1px solid #afe7b9",
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        onChange={onChangeInput}
        className="search-bar"
        placeholder="Search..."
        name="search"
        value={searchTerm}
        type="text"
      />
      <IconButton type="submit" sx={{ p: "5px", color: "#3F9C51" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
