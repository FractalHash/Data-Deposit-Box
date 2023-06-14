require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router()
const PORT = process.env.PORT || 5050;

require('dotenv').config();

app.use(express.json());
app.use(cors());




app.get("/", (_req, res) => {
  res.status(200).json("Welcome to the our server!")
})


app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

module.exports = router;