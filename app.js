const express = require("express")
const path = require("path")
const PORT = 3001
const app = express()

app.use(express.json())


app.use(express.static("local"))

app.use("/test", (req, res) => {
  res.send("<h3>TEST</h3>")
})

app.use("/index", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'local', "index.html"))
})

app.listen(PORT, () => {
  console.log(`Runnning at http://localhost:${PORT}`)
})