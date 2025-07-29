import React from "react";
import HeroSection from "../components/HomePage/HeroSection/index";
import ManagmentTeam from "../components/HomePage/ManagmentTeam/index";
import { Box } from "@mui/material";
import EndowmentProperties from "../components/HomePage/EndowmentProperties/index";
import LatestNews from "../components/HomePage/LatestNews/index";
import ContactUs from "../components/HomePage/ContactUs/Index";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function HomePage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginBottom: "80px",
        }}
      >
        <HeroSection />
        <ManagmentTeam />
        <EndowmentProperties />
        <LatestNews />
        <ContactUs />
      </Box>
    </motion.div>
  );
}
