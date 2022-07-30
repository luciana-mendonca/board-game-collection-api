const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const boardGames = [{ title: "Dungeon Degenerates" }];

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(boardGames);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
