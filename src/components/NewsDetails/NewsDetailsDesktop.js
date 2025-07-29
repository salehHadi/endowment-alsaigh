import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import theme, { Colors } from "../../styles/theme";

const BoxContainer = styled(Box)((theme) => ({
  backgroundColor: Colors.color1,
  padding: "20px",
  borderRadius: "4px",
}));

const BoxBorder = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #FFF", // Add border
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
}));

const SinglePostTitle = styled("h1")(({ theme }) => ({
  fontSize: "28px",
  lineHeight: "1.6",
  color: "#black",
  backgroundColor: "#FFFFFF",
  padding: "8px 12px 12px",
  borderRadius: "16px",
  marginBottom: "40px",
}));

const SinglePostContentBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "60%",
  minHeight: "500px",
  color: "#FFFFFF",
  fontSize: "20px",
  gap: "16px",
}));

const SinglePostDate = styled("h1")(({ theme }) => ({
  alignSelf: "start",
  fontSize: "14px",
  lineHeight: "1.6",
  backgroundColor: "#FFFFFF",
  padding: "4px 16px",
  borderRadius: "16px",
  color: "#808080",
}));

export default function NewsDetailsDesktop({ singleNews }) {
  return (
    <BoxContainer>
      <BoxBorder>
        <SinglePostTitle>{singleNews?.title}</SinglePostTitle>
        <SinglePostContentBox>
          <SinglePostDate>{singleNews?.date.split("T")[0]}</SinglePostDate>
          <div dangerouslySetInnerHTML={{ __html: singleNews?.content }} />
        </SinglePostContentBox>
      </BoxBorder>
    </BoxContainer>
  );
}
