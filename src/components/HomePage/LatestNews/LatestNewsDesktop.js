import React from "react";
import { SectionTitle } from "../../../styles/generalStyle";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import newsImg from "../../../assets/newImg.png";
import calinderIcon from "../../../assets/calinderIcon.svg";
import { useNavigate } from "react-router-dom";

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
  paddingBottom: "16px",
}));

const ImgBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "250px",
  overflow: "hidden",
  borderRadius: "8px 8px 0 0",
}));
const CardImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "250px",
  objectFit: "contain", // Show the whole image
}));
const CardTitle = styled("h2")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "500",
  textAlign: "center",
  margin: "8px 0",
  padding: "4px 0",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 1, // Adjust number of lines as needed
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
const Date = styled("h3")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
}));
const CardContent = styled("h3")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
  textAlign: "center",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 4, // Adjust number of lines as needed
  WebkitBoxOrient: "vertical",
  height: "52px",
  padding: "16px 10px 20px",
  margin: " 0",
}));

export default function LatestNewsDesktop({ latestNews }) {
  const [newsIndex, setNewsIndex] = React.useState(null);
  console.log("LatestNewsDesktop latestNews", latestNews);
  const navigate = useNavigate();

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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SectionTitle>أخر الاخبار</SectionTitle>
      </Box>

      <LatestNewsContainer>
        {latestNews?.map((news) => (
          <CardContainer
            key={news.ID}
            id={news.ID}
            onMouseEnter={() => setNewsIndex(news.ID)}
            onMouseLeave={() => setNewsIndex(null)}
            onClick={() => navigate(`/news-details/${news.ID}`)}
            sx={{
              scale: newsIndex === news.ID ? 1.05 : 1,
            }}
          >
            <ImgBox>
              <CardImg
                src={
                  news.featured_image ||
                  "https://sasas22.wordpress.com/wp-content/uploads/2025/07/image-1.png"
                }
                alt="News Image"
              />
            </ImgBox>
            <CardTitle>{news.title}</CardTitle>
            <DateBox>
              <img src={calinderIcon} alt="calinderIcon" />
              <Date>{news.date.split("T")[0]}</Date>
            </DateBox>
            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: news.excerpt }} />
            </CardContent>
          </CardContainer>
        ))}
      </LatestNewsContainer>
    </Box>
  );
}
