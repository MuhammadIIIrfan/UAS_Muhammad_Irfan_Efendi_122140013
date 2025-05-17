import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Ruang Konstitusi</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Beranda</Link>
        <Link to="/berita" className="hover:text-blue-500">Berita</Link>
        <Link to="/edukasi" className="hover:text-blue-500">Pojok Edukasi</Link>
        <Link to="/pantau" className="hover:text-blue-500">Pantau Demokrasi</Link>
        <Link to="/lembaga" className="hover:text-blue-500">Profil Lembaga</Link>
        <Link to="/kamus" className="hover:text-blue-500">Kamus Konstitusi</Link>
      </div>
    </nav>
  );
}
