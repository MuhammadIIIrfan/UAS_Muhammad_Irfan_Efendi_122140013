// src/pages/KamusKonstitusi.jsx
export default function KamusKonstitusi() {
  return (
    <div className="min-h-screen bg-white py-12 px-8">
      <h1 className="text-4xl font-bold mb-6">Kamus Konstitusi</h1>
      <input
        type="text"
        placeholder="Cari istilah hukum..."
        className="w-full p-4 border border-gray-300 rounded-xl mb-8"
      />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="font-bold">Konstitusi</h2>
          <p>Aturan dasar negara yang menjadi sumber hukum tertinggi.</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="font-bold">Amendemen</h2>
          <p>Perubahan atau penyesuaian terhadap pasal dalam konstitusi.</p>
        </div>
      </div>
    </div>
  );
}
