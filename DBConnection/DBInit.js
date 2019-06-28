function init(Config, MySQL, Database) {
  Database.connection = MySQL.createConnection({
    host: Config.database_credentials.host,
    user: Config.database_credentials.username,
    password: Config.database_credentials.password,
    database: Config.database_credentials.database
  })
  Database.connection.connect(err => {
    if (err) {
      throw err;
    }
  })
}

module.exports = init;
