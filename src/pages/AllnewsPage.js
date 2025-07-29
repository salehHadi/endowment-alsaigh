import React from "react";
import AllNewsIndex from "../components/AllNews/index";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function AllNewsPage() {
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
          padding: "40px 0 80px",
        }}
      >
        <AllNewsIndex />
      </Box>
    </motion.div>
  );
}
