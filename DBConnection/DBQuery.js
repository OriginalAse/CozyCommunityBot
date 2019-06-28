function query(query, Database, callback) {
  Database.connection.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      if (callback != undefined) {
        callback(result);
      }
    }
  })
}

module.exports = query;
