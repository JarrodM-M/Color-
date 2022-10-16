const express = require("express");
const cors = require("cors");
const session = require('express-session')
const app = express();
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
const port = 4000;
app.use(cors());

const rollDice = () => Math.floor((Math.random() * 50) + 1)

let color = {
  r: 0,
  g: 255,
  b: 0,
};

app.get("/", (err, req, res) => {
  res.json({ color });
});

app.put("/r", (req, res) => {
  const amount = rollDice();
  color.r += amount;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
