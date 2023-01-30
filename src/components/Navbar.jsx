import { React, useState, useEffect } from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import Logo from "./Logo";
import MobileLogo from "./MobileLogo";
import { mainGreen } from "../utils/constants";

const Navbar = () => {
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => onSetDeviceWidth(), []);

  useEffect(() => {
    window.addEventListener("resize", onSetDeviceWidth);

    return () => window.removeEventListener("resize", onSetDeviceWidth);
  }, []);

  const onSetDeviceWidth = () => {
    document.documentElement.clientWidth < 600
      ? setIsMobileWidth(true)
      : setIsMobileWidth(false);
  };

  return (
    <Stack
      className="header-wrapper"
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        background: mainGreen,
        top: 0,
        justifyContent: "space-between",
        zIndex: 100,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        {isMobileWidth ? <MobileLogo /> : <Logo />}
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
