// import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        padding: "8px",
        gap: 1,
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            borderRadius: "12px",
            padding: "10px 15px",
            marginBottom: "6px",
            background:
              category.name === selectedCategory
                ? "linear-gradient(145deg, #ff4e00, #ec9f05)"
                : "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            border:
              category.name === selectedCategory
                ? "1px solid rgba(255, 255, 255, 0.4)"
                : "1px solid rgba(255, 255, 255, 0.1)",
            color: category.name === selectedCategory ? "#fff" : "#ccc",
            cursor: "pointer",
            fontWeight: 500,
            transition: "all 0.3s ease-in-out",
            boxShadow:
              category.name === selectedCategory
                ? "0 4px 16px rgba(252, 21, 3, 0.4)"
                : "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#ff4e00",
              fontSize: "20px",
            }}
          >
            {category.icon}
          </span>
          <span style={{ fontSize: "14px", opacity: "0.9" }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}
