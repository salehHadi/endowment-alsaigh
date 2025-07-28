import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import NewsDetailsMobile from "./NewsDetailsMobile";
import NewsDetailsDesktop from "./NewsDetailsDesktop";
import { useContext } from "react";
import { NewsContext } from "../../context/context";
import { useParams } from "react-router-dom";
import "./NewsDetails.css";

export default function Index() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { allNews } = useContext(NewsContext);
  const { id } = useParams();
  const numericId = Number(id);
  const singleNews = allNews?.find((singleNews) => singleNews.ID === numericId);

  return (
    <>
      {matches ? (
        <NewsDetailsMobile singleNews={singleNews} />
      ) : (
        <NewsDetailsDesktop singleNews={singleNews} />
      )}
    </>
  );
}
