// src/pages/Home.jsx
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.svg"; // kamu bisa ganti ini dengan ilustrasi seperti di flyhyer

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white to-slate-100">
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-1xl font-bold">Ruang Konstitusi</h1>
        <nav className="space-x-6">
          <a href="/berita" className="hover:underline">Berita</a>
          <a href="/edukasi" className="hover:underline">Edukasi</a>
          <a href="/pantau" className="hover:underline">Pantau Demokrasi</a>
        </nav>
      </header>

      <main className="text-center px-4">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Platform Digital Edukasi Hukum & Politik</h2>
        <p className="text-gray-600 mb-8">Memberdayakan masyarakat dengan literasi konstitusi dan partisipasi demokrasi.</p>
        <div className="flex justify-center gap-4">
          <Button variant="default">Jelajahi Berita</Button>
          <Button variant="outline">Mulai Belajar</Button>
        </div>
        <img src={heroImage} alt="Ilustrasi pesawat/konstitusi" className="mx-auto mt-12 w-3/4" />
      </main>

      <footer className="text-center py-4 text-sm text-gray-500">© 2025 Ruang Konstitusi</footer>
    </div>
  );
}
