const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { startDatabase } = require("./database/initializer");
const { insertBoardGame, getBoardGame } = require("./database/boardGames");

const app = express();

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan("combined"));

app.get("/", async (req, res) => {
  res.send(await getBoardGame());
});

startDatabase().then(async () => {
  await insertBoardGame({ title: "Kingdom Death Monster" });

  app.listen(3000, async () => {
    console.log("listening on port 3000");
  });
});
