import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "../components/appbar/index";
import Footer from "../components/footer/Index";

const HomePage = lazy(() => import("./HomePage"));
export default function Pages() {
  return (
    <div>
      <Appbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
