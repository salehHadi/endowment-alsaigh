import { Box } from "@mui/material";
import React from "react";

export default function TheDonorDesktop({ theDonor }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <h1>{theDonor?.title}</h1>
      <Box
        sx={{
          width: "60%",
          minHeight: "500px",
          color: "#000",
          fontSize: "20px",
          padding: "20px",
          border: "2px solid gray",
          borderRadius: "8px",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: theDonor?.content }} />
      </Box>
    </Box>
  );
}
