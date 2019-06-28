const DBInit = require("./DBInit.js");
const DBQuery = require("./DBQuery.js");

var Database = {
  connection: null,
  init: (Config, MySQL)  => {
    DBInit(Config, MySQL, Database);
  },
  basicQuery: (query, callback) => {
    DBQuery(query, Database, callback);
  }
}
module.exports = Database;
