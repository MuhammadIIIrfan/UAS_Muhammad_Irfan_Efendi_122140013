import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6">
        <div className="bg-white max-w-xl w-full rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-800">
            Selamat datang di Ruang Konstitusi
          </h2>
          <p className="text-gray-600 mb-6">
            Portal edukasi hukum dan demokrasi untuk semua. Mari tingkatkan wawasan dan partisipasi kita dalam pembangunan demokrasi yang sehat dan berkeadilan.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
          >
            Jelajahi Edukasi
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
