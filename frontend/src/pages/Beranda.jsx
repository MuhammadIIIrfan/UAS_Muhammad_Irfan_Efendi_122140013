import React from "react";

export default function Beranda() {
  // Agar tidak ada scroll bar
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // State untuk waktu sekarang
  const [now, setNow] = React.useState(new Date());

  // Update waktu setiap detik
  React.useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fungsi ucapan berdasarkan jam
  const getGreeting = () => {
    const hour = now.getHours();
    if (hour < 12) return "SELAMAT PAGI";
    if (hour < 15) return "SELAMAT SIANG";
    if (hour < 18) return "SELAMAT SORE";
    return "Selamat Malam";
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 56px - 0px)", // 56px: tinggi navbar & footer
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // ubah dari center ke flex-start
        width: "100%",
      }}
    >
      <div
        className="text-start" // ubah dari text-center ke text-start
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "2rem",
          borderRadius: "20px",
          color: "#fff",
          maxWidth: "600px",
          margin: "2rem",
        }}
      >
        <h1
          style={{
            fontFamily: "'PoppinsCustom', 'Segoe UI', Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: "2px",
            fontSize: "4rem",
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            textAlign: "center", // pastikan text header rata kiri
            color: "rgb(0, 0, 0)", // warna teks header
          }}
        >
          {getGreeting()} 
        </h1>
        <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          {" "}
          <span style={{ fontWeight: "bold" , fontSize: "3rem", color: "rgb(255, 205, 205)" }}>
            {now.toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </span>
        </p>
        <p style={{ textAlign: "center", marginBottom: "0.5rem"}}>
          Selamat datang di Ruang Konstitusi, portal informasi hukum dan
          konstitusi Indonesia. Cari beruta dan informasi terbaru seputar hukum,
          edukasi dan sumber belajar konstitusi, serta update berita nasional dan
          internasional.
        </p>
      </div>
      {/* Footer selalu di bawah */}
      <footer
        className="text-center py-3"
        style={{
          width: "100%",
          height: "20px", // tinggi footer
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0d6efd", // warna biru Bootstrap
          color: "#fff",
          fontStyle: "italic",
          fontVariant: "normal",
          fontFamily: "'PoppinsCustom', 'Segoe UI', Arial, sans-serif",
          fontWeight: "super",
          fontVariantPosition: "revert-layer",
          marginTop: "auto",
          padding: "2rem",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          boxShadow: "0 -2px 5px rgba(0,0,0,0.3)",
          fontSize: "0.7rem",
          background:
            "linear-gradient(90deg,rgb(75, 53, 4) 0%, rgb(0, 0, 0) 100%)", // gradien ungu gelap ke abu
        }}
      >
        &copy; {new Date().getFullYear()} Ruang Konstitusi. All rights reserved.
      </footer>
    </div>
  );
}