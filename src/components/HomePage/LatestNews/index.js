import React from "react";
import { useContext } from "react";
import { NewsContext } from "../../../context/context";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import LatestNewsMobile from "./LatestNewsMobile";
import LatestNewsDesktop from "./LatestNewsDesktop";

export default function Index() {
  const { allNews } = useContext(NewsContext);

  const latestNews = allNews?.slice(0, 4) || [];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <LatestNewsMobile latestNews={latestNews} />
      ) : (
        <LatestNewsDesktop latestNews={latestNews} />
      )}
    </>
  );
}
