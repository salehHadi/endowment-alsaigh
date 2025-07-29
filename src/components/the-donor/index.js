import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import TheDonorMobile from "./The-donorMobile";
import TheDonorDesktop from "./The-donorDesktop";

export default function Index() {
  const [theDonor, setTheDonor] = useState({});

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const fetchTheDonor = async () => {
    try {
      const response = await fetch(
        "https://public-api.wordpress.com/rest/v1.1/sites/sasas22.wordpress.com/posts/?category=the-donor"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTheDonor(data.posts[0] || {});
      console.log("Fetched the donor:", data.posts);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
    }
  };
  useEffect(() => {
    fetchTheDonor();
  }, []);

  return (
    <>
      {matches ? (
        <TheDonorMobile theDonor={theDonor} />
      ) : (
        <TheDonorDesktop theDonor={theDonor} />
      )}
    </>
  );
}
