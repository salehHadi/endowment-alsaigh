import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import ContactUsMobile from "./ContactUsMobile";
import ContactUsDesktop from "./ContactUsDesktop";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return <>{matches ? <ContactUsMobile /> : <ContactUsDesktop />}</>;
}
