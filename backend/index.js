const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const users = JSON.parse(fs.readFileSync("backend/DB/users.json", "utf-8"));
const albums = JSON.parse(fs.readFileSync("backend/DB/albums.json", "utf-8"));
const photos = JSON.parse(fs.readFileSync("backend/DB/photos.json", "utf-8"));

app.use(express.json());

// Эндпоинты
app.get("/users/:userId", (req, res) => {
  const user = users.find((user) => user.id === req.params.userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("Пользователь не найден");
  }
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/albums/:userId", (req, res) => {
  const userAlbums = albums.filter(
    (album) => album.userId === req.params.userId
  );
  res.json(userAlbums);
});

app.get("/photos/:albumId", (req, res) => {
  const albumPhotos = photos.filter(
    (photo) => photo.albumId === req.params.albumId
  );
  res.json(albumPhotos);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
