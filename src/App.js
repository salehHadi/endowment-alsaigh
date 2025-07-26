import logo from "./logo.svg";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import { lazy, Suspense } from "react";
import Pages from "./pages/index";

function App() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Pages />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
