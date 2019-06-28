function init(Config, MySQL, Database, Listeners) {
  Listeners.Config = Config;
  Listeners.MySQL = MySQL;
  Listeners.Database = Database;
}

module.exports = init;
