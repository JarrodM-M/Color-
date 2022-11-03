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

const randomColorNumber = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);

const colorGenerator = (x, red, green, blue) => {
	let y = '';
	if (x === 1) { y = red }
	else if (x === 2){ y = blue }
	else if (x === 3){ y = green }
	return y
}

app.get("/", (req, res) => {
  res.json({ color });
});

app.put("/r", (req, res) => {
  const amount = rollDice();
  const colorPick = colorGenerator(randomColorNumber, color.r, color.g, color.b) 
  res.json({amount})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
