// src/pages/BeritaAnalisis.jsx
import React from 'react';

const beritaList = [
  {
    id: 1,
    judul: 'Judul Berita 1',
    deskripsi: 'Ringkasan analisis konstitusi terbaru...',
    gambar: 'https://source.unsplash.com/400x250/?politics,democracy',
  },
  {
    id: 2,
    judul: 'Judul Berita 2',
    deskripsi: 'Analisis mendalam mengenai perubahan undang-undang...',
    gambar: 'https://source.unsplash.com/400x250/?government,law',
  },
  {
    id: 3,
    judul: 'Judul Berita 3',
    deskripsi: 'Opini ahli tentang dinamika hukum tata negara...',
    gambar: 'https://source.unsplash.com/400x250/?constitution,justice',
  },
];

const BeritaAnalisis = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Berita dan Analisis</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beritaList.map((berita) => (
          <div key={berita.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all">
            <img src={berita.gambar} alt={berita.judul} className="rounded-t-2xl w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{berita.judul}</h2>
              <p className="text-gray-600 text-sm mt-2">{berita.deskripsi}</p>
              <button className="mt-4 px-4 py-2 border rounded-xl text-sm hover:bg-gray-100">Baca Selengkapnya</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaAnalisis;
