import React from "react";

export default function Edukasi() {
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
            color: "#00e676",
          }}
        >
          Edukasi Konstitusi
        </h1>
        <p style={{ marginBottom: "1rem" }}>
          Selamat datang di halaman <b>Edukasi Konstitusi</b>! Temukan berbagai materi pembelajaran, artikel, dan sumber daya untuk memahami hukum dan konstitusi Indonesia.
        </p>
        <ul>
          <li>📚 Materi dasar dan lanjutan tentang konstitusi</li>
          <li>🎥 Video edukasi dan infografis hukum</li>
          <li>📝 Kumpulan soal dan latihan pemahaman konstitusi</li>
          <li>🔗 Link ke sumber belajar resmi dan terpercaya</li>
        </ul>
        <p style={{ marginTop: "1rem" }}>
          Tingkatkan pengetahuanmu tentang hukum dan konstitusi bersama kami!
        </p>
      </div>
    </div>
  );
}