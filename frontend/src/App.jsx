import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Berita from "./pages/Berita";
import "./index.css"; // pastikan CSS diimpor agar font lokal aktif

export default function App() {
  return (
    <BrowserRouter>
      <nav
        className="navbar navbar-expand"
        style={{
          background: "linear-gradient(90deg,rgb(75, 53, 4) 0%,rgb(0, 0, 0) 100%)", // gradien ungu gelap ke abu
          fontFamily: "PoppinsCustom, 'Segoe UI', Arial, sans-serif",
          fontWeight: "bold",
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              fontSize: "2rem",
              letterSpacing: "2px",
              fontFamily: "'PoppinsCustom', 'Segoe UI', Arial, sans-serif",
              fontWeight: "bold",
              color: "#f2e9e4", // warna teks brand
            }}
          >
            RUANG KONSTITUSI
          </Link>
          <div>
            <Link
              className="nav-link d-inline me-3"
              to="/"
              style={{ fontSize: "1.1rem", color: "#f2e9e4" }}
            >
              Beranda
            </Link>
            <Link
              className="nav-link d-inline"
              to="/berita"
              style={{ fontSize: "1.1rem", color: "#f2e9e4" }}
            >
              Berita
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/berita" element={<Berita />} />
      </Routes>
    </BrowserRouter>
  );
}