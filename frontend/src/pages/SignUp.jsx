import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Dummy signup logic
    if (email && nama && password.length >= 6) {
      setSuccess("Registrasi berhasil! Silakan login.");
      setError("");
    } else {
      setError("Semua field wajib diisi & password minimal 6 karakter.");
      setSuccess("");
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
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Sign Up</h2>
        {success && <div style={{ color: "#00e676", marginBottom: "1rem" }}>{success}</div>}
        {error && <div style={{ color: "#ff5252", marginBottom: "1rem" }}>{error}</div>}
        <div className="mb-3">
          <label>Nama Lengkap</label>
          <input
            type="text"
            className="form-control"
            style={{ marginBottom: "1rem" }}
            value={nama}
            onChange={e => setNama(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            style={{ marginBottom: "1rem" }}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            style={{ marginBottom: "1rem" }}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          Sudah punya akun? <a href="/login" style={{ color: "#ffd700" }}>Login</a>
        </div>
      </form>
    </div>
  );
}