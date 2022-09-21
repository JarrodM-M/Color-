const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

let color = {
  r: 0,
  g: 255,
  b: 0,
};

app.get("/", (req, res) => {
  res.json({ color });
});

app.put("/r/:amount", (req, res) => {
  const amount = Number(req.params.amount);
  color.r += amount;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
