const { getDatabase } = require("./initializer");

const collection = "boardGames";

async function insertBoardGame(boardGame) {
  const database = await getDatabase();
  const { insertedId } = await database
    .collection(collection)
    .insertOne(boardGame);

  return insertedId;
}

async function getBoardGame() {
  const database = await getDatabase();

  return await database.collection(collection).find({}).toArray();
}

module.exports = {
  insertBoardGame,
  getBoardGame,
};
