const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

const port = process.env.PORT;

// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})

