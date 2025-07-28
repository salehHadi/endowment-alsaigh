import React, { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [allNews, setAllNews] = useState([]);

  const fetchLatestNews = async () => {
    try {
      const response = await fetch(
        "https://public-api.wordpress.com/rest/v1.1/sites/sasas22.wordpress.com/posts/?category=news"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAllNews(data.posts || []);
      console.log("Fetched latest news:", data.posts);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
    }
  };
  useEffect(() => {
    fetchLatestNews();
    console.log(" calling test");
  }, []);

  return (
    <NewsContext.Provider value={{ allNews: allNews }}>
      {children}
    </NewsContext.Provider>
  );
}
