import React from "react";
import { Stack } from "@mui/system";
import {
  categories,
  secondaryGreen,
  greyBg,
  mainGreen,
  textGreen,
} from "../utils/constants";

const Sidebar = ({ onSelectCategory, category }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
      component="ul"
    >
      {categories.map((item, i) => (
        <li key={i}>
          <button
            className="category-btn"
            style={{
              background: item.name === category && mainGreen,
            }}
            onClick={() => onSelectCategory(item.name)}
          >
            <span
              style={{
                color: item.name === category ? "#fff" : textGreen,
              }}
            >
              {item.icon}
            </span>
            <span>{item.name}</span>
          </button>
        </li>
      ))}
    </Stack>
  );
};

export default Sidebar;
