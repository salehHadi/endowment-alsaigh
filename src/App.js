import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const Appbar = lazy(() => import("./components/appbar/index"));
const Footer = lazy(() => import("./components/footer/index"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Appbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
