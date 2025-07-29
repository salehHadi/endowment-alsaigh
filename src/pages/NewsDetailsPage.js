import React from "react";
import NewsDetailsIndex from "../components/NewsDetails/index";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function NewsDetailsPage() {
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
          marginBottom: "80px",
        }}
      >
        <NewsDetailsIndex />
      </Box>
    </motion.div>
  );
}
