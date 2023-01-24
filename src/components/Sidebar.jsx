import React from "react";
import { Stack } from "@mui/system";
import {
  categories,
  secondaryGreen,
  greyBg,
  mainGreen,
  textGreen,
} from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item, i) => (
        <button
          key={i}
          className="category-btn"
          style={{
            background: item.name === selectedCategory && mainGreen,
          }}
          onClick={() => setSelectedCategory(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : textGreen,
            }}
          >
            {item.icon}
          </span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
