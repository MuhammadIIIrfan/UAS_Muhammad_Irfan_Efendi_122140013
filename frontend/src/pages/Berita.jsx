import React from "react";
import Navbar from "../components/Navbar";

const Berita = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Halaman Berita</h2>
        <p className="text-gray-700">Berikut ini adalah daftar berita terbaru seputar hukum dan konstitusi.</p>
      </main>
    </>
  );
};

export default Berita;
