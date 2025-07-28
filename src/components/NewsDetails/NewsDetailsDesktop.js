import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import theme from "../../styles/theme";

const BoxContainer = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export default function NewsDetailsDesktop({ singleNews }) {
  console.log("NewsDetailsDesktop singleNews:", singleNews);

  return (
    <BoxContainer>
      <h1>{singleNews?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: singleNews?.content }} />
    </BoxContainer>
  );
}
