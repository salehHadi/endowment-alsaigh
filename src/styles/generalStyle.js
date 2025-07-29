import { Box, ListItemButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: "700",
  borderBottom: "2px solid black",
  boxShadow: "0 4px 8px -2px rgba(0,0,0,0.12)",
  display: "inline-block",
  marginBottom: "40px",
  padding: "5px 10px",
}));
