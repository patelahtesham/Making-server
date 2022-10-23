import express from 'express'
const app = express()
const port = 3000

app.get('/Water', (req, res) => {
    console.log(`${req.ip} Asking for water`)
  res.send("here is your Water")
})
app.get('/Food', (req, res) => {
    console.log(`${req.ip} Asking for Food`)
  res.send("here is your Food")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})