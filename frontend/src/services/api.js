import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:6543/api", // Ganti sesuai backend Pyramid kamu
});

export const getBerita = () => API.get("/berita");
export const createBerita = (data) => API.post("/berita", data);
// Tambah update, delete, dll.
