import React from "react";
import { SectionTitle } from "../../../styles/generalStyle";
import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AgricultureIcon from "../../../assets/AgricultureIcon.svg";
import PropertiesIcon from "../../../assets/PropertiesIcon.svg";

const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "32px",
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "8px",
  cursor: "pointer",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "10px",
  color: "black",
  backgroundColor: "#FFF",
  width: "100%",
  textAlign: "center",
  borderRadius: "4px",
  padding: "5px 10px",
  transition: "transform 0.3s",
}));
const CardImg = styled("img")(({ theme, img }) => ({
  src: img,
  color: "black",
  backgroundColor: "#FFF",
  width: "100%",
  padding: "5px 10px",
  textAlign: "center",
  borderRadius: "4px",
}));

export default function EndowmentPropertiesDesktop() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const cardItems = [
    {
      title: "الاملاك الزراعية",
      img: AgricultureIcon,
    },
    {
      title: "الاملاك العقارية",
      img: PropertiesIcon,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#978648",
        color: "#fff",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SectionTitle
          sx={{
            borderBottom: "3px solid white",
            boxShadow: "0 2px 4px rgba(255, 255, 255, 0.4)",
          }}
        >
          أملاك الوقف
        </SectionTitle>
      </Box>

      <SectionContainer>
        {cardItems.map((item, index) => (
          <CardContainer
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={index}
          >
            <CardTitle
              sx={{
                transform: hoveredIndex === index ? "rotate(5deg)" : "none",
              }}
            >
              {item.title}
            </CardTitle>
            <CardImg src={item.img} alt={item.title} />
          </CardContainer>
        ))}
      </SectionContainer>
    </Box>
  );
}
