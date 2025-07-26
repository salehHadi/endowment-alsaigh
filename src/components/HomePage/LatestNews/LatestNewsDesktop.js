import React from "react";
import { SectionTitle } from "../../../styles/generalStyle";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import newsImg from "../../../assets/newImg.png";
import calinderIcon from "../../../assets/calinderIcon.svg";

const LatestNewsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "20px",
  padding: "10px",
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "300px",
  border: "1px solid #ccc",
  padding: "4px",
  borderRadius: "8px 8px 0 0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)", // smoother
  cursor: "pointer",
}));

const ImgBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "250px",
  overflow: "hidden",
  borderRadius: "8px 8px 0 0",
}));
const CardImg = styled("img")(({ theme, src }) => ({
  src: src,
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));
const CardTitle = styled("h2")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "500",
  textAlign: "center",
  margin: "8px 0",
  padding: "4px 0",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2, // Adjust number of lines as needed
  WebkitBoxOrient: "vertical",
}));
const DateBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  width: "100%",
  color: "#808080",
  gap: "5px",
  borderTop: "1px solid #808080",
  borderBottom: "1px solid #808080",
  padding: "5px 0",
}));
const DateTitle = styled("h3")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
}));
const CardContent = styled("h3")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
  textAlign: "center",
}));

export default function LatestNewsDesktop() {
  const [newsIndex, setNewsIndex] = React.useState(null);
  const newsContent = [
    {
      title: "الاجتماع السنوي العائلي لعائلة الصائغ",
      date: "10 مارس، 2025",
      content: "  هذا هو محتوى الخبر. يمكن أن يكون نصًا قصيرًا يصف الخبر.",
      imgSrc: newsImg,
    },
    {
      title: "الاجتماع السنوي العائلي لعائلة الصائغ",
      date: "10 مارس، 2025",
      content: "  هذا هو محتوى الخبر. يمكن أن يكون نصًا قصيرًا يصف الخبر.",
      imgSrc: newsImg,
    },
    {
      title: "الاجتماع السنوي العائلي لعائلة الصائغ",
      date: "10 مارس، 2025",
      content: "  هذا هو محتوى الخبر. يمكن أن يكون نصًا قصيرًا يصف الخبر.",
      imgSrc: newsImg,
    },
    {
      title: "الاجتماع السنوي العائلي لعائلة الصائغ",
      date: "10 مارس، 2025",
      content: "  هذا هو محتوى الخبر. يمكن أن يكون نصًا قصيرًا يصف الخبر.",
      imgSrc: newsImg,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "60px",
      }}
    >
      <SectionTitle>أخر الاخبار</SectionTitle>

      <LatestNewsContainer>
        {newsContent.map((news, index) => (
          <CardContainer
            key={index}
            onMouseEnter={() => setNewsIndex(index)}
            onMouseLeave={() => setNewsIndex(null)}
            sx={{
              scale: newsIndex === index ? 1.05 : 1,
            }}
          >
            <ImgBox>
              <CardImg src={news.imgSrc} alt="News Image" />
            </ImgBox>
            <CardTitle>{news.title}</CardTitle>
            <DateBox>
              <img src={calinderIcon} alt="calinderIcon" />
              <DateTitle>{news.date}</DateTitle>
            </DateBox>
            <CardContent>{news.content}</CardContent>
          </CardContainer>
        ))}
      </LatestNewsContainer>
    </Box>
  );
}
