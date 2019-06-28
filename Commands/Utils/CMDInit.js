function init(Config, MySQL, Database, Commands) {
  Commands.Config = Config;
  Commands.MySQL = MySQL;
  Commands.Database = Database;
}

module.exports = init;
