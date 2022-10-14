const express = require("express")
const app = express()

const port = 4000

app.use((req, res, next) => {
  console.log("testing")
  next()
})

app.get("/", (req, res) => {
  res.send("Hallo Dunia!")
}) // get untuk mengimplementasikan secara spesifik

app.get("/about/:id/nama/:nama1/a/b/c/:alamat", (req, res, next) => {
  res.send("Hallo about!")
  console.log(req.params.nama1, "<=== Nama")
  console.log(req.params.alamat, "<=== Alamat")
}) // kalau next ada di about, maka about akan memanggil next selanjutnya yang menyebabkan error

app.use("/", (req, res) => {
  res.send("Error 404")
}) // use untuk middlewere

app.listen(port, () =>
  console.log(`server running in http://localhost:${port}`)
) // untuk menempatkan kode kita di alamat localhost sesuai keinginan kita
