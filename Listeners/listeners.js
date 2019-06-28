const LevelListener = require("./chatListener/XPAddListener.js");
const LISTInit = require("./Utils/LISTInit.js");

let Listeners = {
  Config: null,
  Database: null,
  MySQL: null,
  init: (Config, MySQL, Database) => {
    LISTInit(Config, MySQL, Database, Listeners);
  },
  levelListener: (message) => {
    LevelListener(message, Listeners);
  }
}

module.exports = Listeners;
