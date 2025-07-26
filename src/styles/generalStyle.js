import { Box, ListItemButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: "700",
  textAlign: "center",
  borderBottom: "2px solid black",
  boxShadow: "0 2px 4px rgba(151, 134, 72, 0.4)",
  display: "inline-block",
  marginBottom: "40px",
  padding: "5px 10px",
}));
