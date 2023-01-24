import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import logo from "../assets/images/logo.png";
import { mainGreen } from "../utils/constants";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p='10px 20px'
    sx={{
      position: "sticky",
      background: mainGreen,
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" style={{ height: "45px" }} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
