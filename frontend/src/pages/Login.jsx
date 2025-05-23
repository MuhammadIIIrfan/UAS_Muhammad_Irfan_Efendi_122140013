import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic
    if (email === "user@mail.com" && password === "password") {
      setError("");
      if (onLogin) onLogin();
      alert("Login berhasil!");
    } else {
      setError("Email atau password salah!");
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.03)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "2rem",
          borderRadius: "20px",
          color: "#fff",
          minWidth: "320px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>
        {error && (
          <div style={{ color: "#ff5252", marginBottom: "1rem" }}>{error}</div>
        )}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            style={{ marginBottom: "1rem" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            style={{ marginBottom: "1rem" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          Belum punya akun?{" "}
          <a href="/signup" style={{ color: "#ffd700" }}>
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}