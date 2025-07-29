import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AllNewsMobile from "./AllNewsMobile";
import AllNewsDesktop from "./AllNewsDesktop";
import { useContext } from "react";
import { NewsContext } from "../../context/context";

export default function Index() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { allNews } = useContext(NewsContext);

  return (
    <>
      {matches ? (
        <AllNewsMobile allNews={allNews} />
      ) : (
        <AllNewsDesktop allNews={allNews} />
      )}
    </>
  );
}
