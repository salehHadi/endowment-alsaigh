import React from "react";
import { Box, Container, ListItemButton, Typography } from "@mui/material";
import heroImgDesktop from "../../../assets/heroImgDesk.svg";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../styles/theme";

const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  height: "100%",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "800",
  fontSize: "32px",
}));
const SubTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  marginTop: "8px",
  marginBottom: "20px",

  fontSize: "20px",
}));

const CTA = styled(ListItemButton)(({ theme }) => ({
  backgroundColor: Colors.color1,
  color: Colors.white,
  textAlign: "center",
  padding: "10px 20px",
}));
const CTAText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
}));
export default function HeroSectionDesktop() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "60px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <TextContainer>
          <Title variant="p" component="h1">
            أوقاف عبدالحميد رجب الصائغ
          </Title>
          <Title variant="p" component="h1">
            {`(رحمه الله)`}
          </Title>
          <SubTitle variant="p" component="h1">
            يمتد الاثر، يحقق التنمية، يقلل الفقر
          </SubTitle>
          <CTA>
            <CTAText variant="p" component="h1">
              نبذه عن الواقف
            </CTAText>
          </CTA>
        </TextContainer>
        <img src={heroImgDesktop} alt="Hero" style={{ width: "50%" }} />
      </Container>

      <Box
        sx={{ height: "50px", width: "100%", backgroundColor: Colors.color1 }}
      />
    </Box>
  );
}
