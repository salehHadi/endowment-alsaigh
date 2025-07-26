import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import ManagmentTeamMobile from "./ManagmentTeamMobile";
import ManagmentTeamDesktop from "./ManagmentTeamDesktop";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return <>{matches ? <ManagmentTeamMobile /> : <ManagmentTeamDesktop />}</>;
}
