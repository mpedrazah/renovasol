const path = require("path");
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

console.log("RUNNING FROM:", __dirname);
console.log(
  "sobre-nosotros exists:",
  fs.existsSync(path.join(__dirname, "public", "sobre-nosotros.html"))
);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));
app.get("/quienes-somos", (req, res) => res.sendFile(path.join(__dirname, "public/quienes-somos.html")));
app.get("/conoce-al-equipo", (req, res) => res.sendFile(path.join(__dirname, "public/conoce-al-equipo.html")));
app.get("/sobre-nosotros", (req, res) => res.sendFile(path.join(__dirname, "public/sobre-nosotros.html")));
app.get("/que-hacemos", (req, res) => res.sendFile(path.join(__dirname, "public/que-hacemos.html")));
app.get("/noticias", (req, res) => res.sendFile(path.join(__dirname, "public/noticias.html")));
app.get("/contacto", (req, res) => res.sendFile(path.join(__dirname, "public/contacto.html")));
app.get("/noticia", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "noticia.html"))
);
app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`RenovaSol site running on port ${PORT}`);
});