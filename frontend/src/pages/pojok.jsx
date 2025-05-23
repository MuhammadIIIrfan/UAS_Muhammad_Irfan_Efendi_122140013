import React from "react";

export default function Pojok() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 56px - 56px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "2rem",
          borderRadius: "20px",
          color: "#fff",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "'PoppinsCustom', 'Segoe UI', Arial, sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#ffd700",
          }}
        >
          Pojok Demokrasi
        </h1>
        <p style={{ marginBottom: "1rem" }}>
          Selamat datang di <b>Pojok Demokrasi</b>! Halaman ini menyediakan ruang diskusi, opini, dan edukasi seputar demokrasi di Indonesia.
        </p>
        <ul>
          <li>🗳️ Artikel dan opini tentang demokrasi dan partisipasi publik</li>
          <li>📢 Ruang diskusi isu-isu demokrasi terkini</li>
          <li>📈 Data dan fakta perkembangan demokrasi di Indonesia</li>
          <li>🎓 Edukasi hak dan kewajiban warga negara dalam demokrasi</li>
        </ul>
        <p style={{ marginTop: "1rem" }}>
          Mari bersama-sama membangun demokrasi yang sehat dan inklusif!
        </p>
      </div>
    </div>
  );
}