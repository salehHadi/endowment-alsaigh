import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import EndowmentPropertiesMobile from "./EndowmentPropertiesMobile";
import EndowmentPropertiesDesktop from "./EndowmentPropertiesDesktop";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {matches ? <EndowmentPropertiesMobile /> : <EndowmentPropertiesDesktop />}
    </>
  );
}
