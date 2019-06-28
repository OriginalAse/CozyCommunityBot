const Rank = require("./Leveling/rank.js");
const CMDInit = require("./Utils/CMDInit.js");

let Commands = {
  Config: null,
  MySQL: null,
  Database: null,
  init: (Config, MySQL, Database) => {
    CMDInit(Config, MySQL, Database, Commands);
  },
  rank: (message) => {
    Rank(message, Commands);
  }
}

module.exports = Commands;
