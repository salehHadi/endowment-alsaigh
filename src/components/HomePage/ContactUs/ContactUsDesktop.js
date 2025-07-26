import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SectionTitle } from "../../../styles/generalStyle";
import mapChart from "../../../assets/mapChart.png";

const ContactUsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
}));

const ContactBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const FirstTitle = styled("h3")(({ theme }) => ({
  fontSize: "20px",
  color: "#808080",
  fontWeight: 500,
  margin: "0",
  marginBottom: "8px",
}));
const SecondTitle = styled("h3")(({ theme }) => ({
  fontSize: "18px",
  color: "black",
  fontWeight: 400,
  margin: "0",
}));

const VerticalLine = styled(Box)(({ theme }) => ({
  width: "1px",
  height: "120px",
  backgroundColor: "black",
}));
const HorizontlLine = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "1px",
  backgroundColor: "black",
}));

export default function ContactUsDesktop() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "60px",
      }}
    >
      <SectionTitle
        sx={{
          marginBottom: "4px",
        }}
      >
        معلومات التواصل
      </SectionTitle>

      <ContactUsContainer>
        <ContactBox>
          <FirstTitle>رقم الهاتف</FirstTitle>
          <SecondTitle>7654 321 54 966+</SecondTitle>
        </ContactBox>
        <VerticalLine />
        <ContactBox>
          <FirstTitle>العنوان</FirstTitle>
          <SecondTitle>جدة، شارع الستين</SecondTitle>
        </ContactBox>
      </ContactUsContainer>

      <HorizontlLine />
      <a
        href="https://maps.app.goo.gl/gKPEKwEzbYY7iq2f9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mapChart} alt="map chat" style={{ cursor: "pointer" }} />
      </a>
      <HorizontlLine />
    </Box>
  );
}
