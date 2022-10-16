const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
app.use(
  session({
    secret: "keyboard cat",
    cookie: { maxAge: 60000, httpOnly: false },
  })
);
const port = 4000;
app.use(cors());

const rollDice = () => Math.floor(Math.random() * 50 + 1);

let color = {
  r: 0,
  g: 255,
  b: 0,
};

const colorGenerator = (red, green, blue) => {
  let x = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let y = "";
  if (x === 1) {
    y = red;
  } else if (x === 2) {
    y = blue;
  } else if (x === 3) {
    y = green;
  }
  return y;
};

app.get("/", (req, res) => {
  res.json({ color });
});

app.put("/r", (req, res) => {
  const amount = rollDice();
  const colorPick = colorGenerator(color.r, color.g, color.b);
  colorPick += amount;
  res.json({ amount });
});

app.get("/roll-amount", (req, res) => {
  res.json({ rollAmount: req.session.rollAmount ?? null });
});

app.post("/roll", (req, res) => {
  if (req.session.rollAmount === undefined) {
    const amount = rollDice();
    req.session.rollAmount = amount;
    res.json({ amount });
    return;
  }

  // TODO user error handling middleware, need them http cats!
  res.status(400).json({ reason: "You've already rolled!" });
});

/*
magical route
app.post("... change color route ...") {
  if the time since the last request is more than 5 minutes
    if the user has no roll value
      error out
    else
      depending on what color channel the user wants to change
      change it by the amount
      set in the session when the user made this request in unix time
  else
    error out
}
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
