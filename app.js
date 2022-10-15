const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use(express.static("views"));

app.get("/home", (req, res, next) => {
  res.json({ message: "hello world" });
});

app.get("/test", (req, res) => {
  res.send("<h3>TEST</h3>");
});

app.get("/index", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Runnning at http://localhost:${PORT}`);
});

console.log("testing stash");
