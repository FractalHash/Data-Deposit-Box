require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router()
const PORT = process.env.PORT || 5050;
const bcrypt = require("bcrypt")

require('dotenv').config();

app.use(express.json());
app.use(cors());




app.get("/", (_req, res) => {
  res.status(200).json("Welcome to the our server!")
})


app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

// bcrypt.hash('password', 10, function( err, hash ) {
//   // Store hash in database
//   console.log(hash)
// });

module.exports = router;