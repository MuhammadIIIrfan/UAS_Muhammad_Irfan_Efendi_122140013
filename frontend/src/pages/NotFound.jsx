import React from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">404 - Halaman Tidak Ditemukan</h2>
        <p className="text-gray-700">Maaf, halaman yang Anda cari tidak tersedia.</p>
      </main>
    </>
  );
};

export default NotFound;
