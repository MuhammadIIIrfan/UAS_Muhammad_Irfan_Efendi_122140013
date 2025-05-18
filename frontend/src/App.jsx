import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./Home";
import Berita from "./pages/Berita";
import Edukasi from "./pages/Edukasi";
import Pantau from "./pages/Pantau";
import Profil from "./pages/Profil";
import Kamus from "./pages/Kamus";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/pantau" element={<Pantau />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/kamus" element={<Kamus />} />
      </Routes>
    </>
  );
}

export default App;
