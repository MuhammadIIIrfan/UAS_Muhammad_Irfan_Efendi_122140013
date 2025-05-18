// src/pages/ProfilLembaga.jsx
export default function ProfilLembaga() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 to-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Profil Lembaga Negara</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {['MA', 'MK', 'DPR'].map((name, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Lembaga {name}</h2>
            <p className="text-gray-600">Informasi struktur, fungsi, dan peran lembaga {name}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
