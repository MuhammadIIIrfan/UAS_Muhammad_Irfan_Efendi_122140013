// src/pages/PantauDemokrasi.jsx
export default function PantauDemokrasi() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-8">
      <h1 className="text-4xl font-bold mb-6 text-slate-900">Pantau Demokrasi</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Statistik Pemilu</h2>
          <p className="text-gray-700">Pantauan real-time dan historis proses demokrasi Indonesia.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Kinerja DPR/DPRD</h2>
          <p className="text-gray-700">Monitoring dan evaluasi wakil rakyat melalui data terbuka.</p>
        </div>
      </div>
    </div>
  );
}
