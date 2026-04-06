const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.get("/quienes-somos", (req, res) => res.sendFile(path.join(__dirname, "public", "quienes-somos.html")));
app.get("/que-hacemos", (req, res) => res.sendFile(path.join(__dirname, "public", "que-hacemos.html")));
app.get("/noticias", (req, res) => res.sendFile(path.join(__dirname, "public", "noticias.html")));
app.get("/noticias/articulo", (req, res) => res.sendFile(path.join(__dirname, "public", "noticia.html")));
app.get("/contacto", (req, res) => res.sendFile(path.join(__dirname, "public", "contacto.html")));

app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`RenovaSol listo en http://localhost:${PORT}`);
});