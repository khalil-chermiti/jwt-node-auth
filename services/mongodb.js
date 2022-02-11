const mongoose = require("mongoose");

async function connect(DB_URL) {
  await mongoose.connect(DB_URL);
} ;

mongoose.connection
  .once("open", () => console.log("connected to the database"))
  .on("error", () => console.log("error connecting to the database"));

module.exports = {
  connect,
};
