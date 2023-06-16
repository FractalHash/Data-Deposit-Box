require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require("./routes/user.js");
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.use("/", userRoute);

app.get("/", (_req, res) => {
  res.status(200).json("Welcome to our server!");
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});

// bcrypt.hash('password', 10, function( err, hash ) {
//   // Store hash in database
//   console.log(hash);
// });