import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Berita from "./pages/Berita";
import Edukasi from "./pages/edukasi";
import Pojok from "./pages/pojok";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./index.css"; // pastikan CSS diimpor agar font lokal aktif

export default function App() {
  return (
    <BrowserRouter>
      <nav
        className="navbar navbar-expand"
        style={{
          background: "linear-gradient(90deg,rgb(75, 53, 4) 0%,rgb(0, 0, 0) 30%)",
          fontFamily: "PoppinsCustom, 'Segoe UI', Arial, sans-serif",
          fontWeight: "bold",
          minHeight: "40px",
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
      >
        <div className="container" style={{ minHeight: "40px" }}>
          <Link
            className="navbar-brand"
            to="/"
            style={{
              fontSize: "2rem",
              letterSpacing: "1px",
              fontFamily: "'nasa'",
              fontWeight: "bold",
              color: "#f2e9e4",
              lineHeight: "1.5",
              padding: "1",
            }}
          >
            RUANG KONSTITUSI
          </Link>
          <div className="d-flex align-items-center">
            <Link
              className="nav-link d-inline me-3"
              to="/"
              style={{ fontSize: "1rem", color: "#f2e9e4", padding: "0 0.5rem", fontStyle: "bold" }}
            >
              BERANDA
            </Link>
            <Link
              className="nav-link d-inline me-3"
              to="/berita"
              style={{ fontSize: "1rem", color: "#f2e9e4", padding: "0 0.5rem" }}
            >
              BERITA
            </Link>
            <Link
              className="nav-link d-inline me-3"
              to="/pojok"
              style={{ fontSize: "1rem", color: "#f2e9e4", padding: "0 0.5rem" }}
            >
              POJOK DEMOKRASI
            </Link>
            <Link
              className="nav-link d-inline me-3"
              to="/edukasi"
              style={{ fontSize: "1rem", color: "#f2e9e4", padding: "0 0.5rem" }}
            >
              EDUKASI
            </Link>
            {/* Tombol Login dan Sign Up */}
            <Link
              to="/login"
              className="btn btn-outline-light btn-sm ms-2"
              style={{ fontWeight: "bold", borderRadius: "20px" }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-warning btn-sm ms-2"
              style={{ fontWeight: "bold", borderRadius: "20px", color: "#22223b", border: "none" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/pojok" element={<Pojok />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}