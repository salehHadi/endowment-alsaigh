import { AnimatePresence } from "framer-motion";
import logo from "./logo.svg";

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { lazy, Suspense } from "react";
import ScrollToTop from "./utils/ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const NewsDetails = lazy(() => import("./pages/NewsDetailsPage"));
const AllNewsPage = lazy(() => import("./pages/AllnewsPage"));
const TheDonorPage = lazy(() => import("./pages/The-DonorPage"));
const Appbar = lazy(() => import("./components/appbar/index"));
const Footer = lazy(() => import("./components/footer/index"));

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Appbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<AllNewsPage />} />
            <Route path="/about-the-donor" element={<TheDonorPage />} />
            <Route path="/news-details/:id" element={<NewsDetails />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
