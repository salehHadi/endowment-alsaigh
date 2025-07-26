import React from "react";
import { SectionTitle } from "../../../styles/generalStyle";
import { Box, ListItemButton, Typography } from "@mui/material";
import teamBackground from "../../../assets/teamBackground.svg";
import { styled } from "@mui/material/styles";

const TextBox = styled(Box)({
  textAlign: "center",
  padding: "5px 40px",
  border: "1px solid #978648",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(151, 134, 72, 0.5)",
  margin: "10px",
});

const CEOTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
});

const CEOSubTitle = styled(Typography)({
  fontSize: "20px",
  color: "#978648",
  fontWeight: "bold",
});

const ButtonBox = styled(ListItemButton)(() => ({
  padding: "5px 10px",
  border: "1px solid #978648",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(151, 134, 72, 0.5)",
}));

const ButtonText = styled(Typography)({
  fontSize: "20px",
  color: "black",
  fontWeight: "bold",
});

export default function ManagmentTeamDesktop() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        gap: "40px",
      }}
    >
      <SectionTitle variant="h2">أعضاء مجلس النظارة</SectionTitle>

      {/* CEO Card */}
      <Box>
        <img src={teamBackground} alt="team background" />
        <TextBox>
          <CEOTitle>زكريا عبدالحميد الصائغ</CEOTitle>
          <CEOSubTitle>ناضر الوقف</CEOSubTitle>
        </TextBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <img src={teamBackground} alt="team background" />
          <TextBox>
            <CEOTitle>عبدالحميد زكريا الصائغ</CEOTitle>
            <CEOSubTitle>عضو</CEOSubTitle>
          </TextBox>
        </Box>

        <Box>
          <img src={teamBackground} alt="team background" />
          <TextBox>
            <CEOTitle>منال عبدالحميد الصائغ</CEOTitle>
            <CEOSubTitle>عضو</CEOSubTitle>
          </TextBox>
        </Box>

        <Box>
          <img src={teamBackground} alt="team background" />
          <TextBox>
            <CEOTitle>عضو</CEOTitle>
            <CEOSubTitle>عضو</CEOSubTitle>
          </TextBox>
        </Box>

        <Box>
          <img src={teamBackground} alt="team background" />
          <TextBox>
            <CEOTitle>ممدوح عبدالحميد الصائغ</CEOTitle>
            <CEOSubTitle>عضو</CEOSubTitle>
          </TextBox>
        </Box>
      </Box>

      <ButtonBox>
        <ButtonText color="black"> معلومات أكثر</ButtonText>
      </ButtonBox>
    </Box>
  );
}
