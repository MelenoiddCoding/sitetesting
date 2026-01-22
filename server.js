import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const mensajes = [
  "Hola, mundo chingón.",
  "Hola, tribu luminosa.",
  "Hola, gente perrísima.",
  "Hola, energía brutal.",
  "Hola, crew legendario.",
  "Hola, banda imparable.",
  "Hola, vibes astrales.",
  "Hola, corazón valiente.",
  "Hola, futuro brillante.",
  "Hola, universo en fuego."
];

app.get("/api/hello", (req, res) => {
  res.json({ mensajes });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});
