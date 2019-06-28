function rank(message, Commands) {
  var args = message.content.slice(Commands.Config.prefix.length).trim().split(/ +/)
  if (message.content.charAt(0) == Commands.Config.prefix) {
    cmd = Commands.Config.prefix + args.shift().toLowerCase();
  } else {
    cmd = args.shift().toLowerCase();
  }
  const Database = Commands.Database;
  if (cmd == `${Commands.Config.prefix}rank`) {
    var sql = `SELECT * FROM CozyCommunityUsers WHERE AuthorID='${message.author.id}'`;
    Database.init(Commands.Config, Commands.MySQL);
    Database.basicQuery(sql, result => {
      if (result[0]) {
        if (args.length == 0) {
          var usertag = message.member.user.tag.split("#");
          message.channel.send(`**${usertag[0]}'s' Stats:**\n\nLevel: ${result[0].Level}\nRequired XP To Next Level: ${Commands.Config.levelXP[(parseInt(result[0].Level)+1).toString()]-result[0].XPAmount}`);
        }
      } else {
        message.channel.send("You have to first talk in chat!");
      }
    })
  }
}

module.exports = rank;
