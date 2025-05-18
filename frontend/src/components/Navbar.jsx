import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-2 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/berita">Berita</Link>
      <Link to="/edukasi">Pojok Edukasi</Link>
      <Link to="/pantau">Pantau Demokrasi</Link>
      <Link to="/profil">Profil</Link>
      <Link to="/kamus">Kamus</Link>
    </nav>
  );
};

export default Navbar;
