import React from "react";
import HeroSection from "../components/HomePage/HeroSection/index";
import ManagmentTeam from "../components/HomePage/ManagmentTeam/index";
import { Box } from "@mui/material";
import EndowmentProperties from "../components/HomePage/EndowmentProperties/index";
import LatestNews from "../components/HomePage/LatestNews/index";
import ContactUs from "../components/HomePage/ContactUs/Index";
export default function HomePage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <HeroSection />
      <ManagmentTeam />
      <EndowmentProperties />
      <LatestNews />
      <ContactUs />
    </Box>
  );
}
