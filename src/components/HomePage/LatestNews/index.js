import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import LatestNewsMobile from "./LatestNewsMobile";
import LatestNewsDesktop from "./LatestNewsDesktop";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return <>{matches ? <LatestNewsMobile /> : <LatestNewsDesktop />}</>;
}
