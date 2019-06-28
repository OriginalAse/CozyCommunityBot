function levelListener(message, Listeners) {
  if (!message.author.bot) {
    const Config = Listeners.Config;
    const Database = Listeners.Database;
    Database.init(Config, Listeners.MySQL);
    var sql = `SELECT * FROM CozyCommunityUsers WHERE AuthorID=${message.author.id}`;
    Database.basicQuery(sql, result => {
      var today = new Date();
      var date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
      var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
      var dateTime = date+' '+time;
      if (!result[0]) {
        var sqlInsert = `INSERT INTO CozyCommunityUsers (AuthorID, AuthorName, Level, XPAmount, LastChattedTime) VALUES ('${message.author.id}', '${message.member.user.tag}', '0', '10', '${dateTime}')`;
        Database.basicQuery(sqlInsert);
      } else {
        var insertTagSql = `UPDATE CozyCommunityUsers SET AuthorName='${message.member.user.tag}'`;
        Database.basicQuery(insertTagSql);
        var lastChattedTime = result[0].LastChattedTime;
        var splittedLastChattedTime = lastChattedTime.split(" ");
        var splittedAgainLastChattedTime = splittedLastChattedTime[1].split(":")
        if (parseInt(splittedAgainLastChattedTime[0]) < today.getHours() || parseInt(splittedAgainLastChattedTime[1])+1 <= today.getMinutes()) {
          var currentXPAmount = parseInt(result[0].XPAmount);
          currentXPAmount += 10;
          for (var key in Listeners.Config.levelXP) {
            if (currentXPAmount >= parseInt(Listeners.Config.levelXP[key]) && currentXPAmount < parseInt(Listeners.Config.levelXP[(parseInt(key)+1).toString()])) {
              if (!message.content.startsWith("?") && !message.content.startsWith(";;") && !message.content.startsWith(Listeners.Config.prefix)) {
                var updateLevelSql = `UPDATE CozyCommunityUsers SET Level='${key}' WHERE AuthorID='${message.author.id}'`;
                Database.basicQuery(updateLevelSql);
                var levelAdvanceMessage = Listeners.Config.listener_messages.levelListener.LevelUp.replace("${user}", message.member.user.tag);
                levelAdvanceMessage = levelAdvanceMessage.replace("${level}", key)
                message.channel.send(levelAdvanceMessage);
                var level = parseInt(key);
                var level5Role = message.guild.roles.get(Listeners.Config.roleids.Lvl5);
                var level10Role = message.guild.roles.get(Listeners.Config.roleids.Lvl10);
                var level15Role = message.guild.roles.get(Listeners.Config.roleids.Lvl15);
                var level20Role = message.guild.roles.get(Listeners.Config.roleids.Lvl20);
                var level25Role = message.guild.roles.get(Listeners.Config.roleids.Lvl25);
                var level30Role = message.guild.roles.get(Listeners.Config.roleids.Lvl30);
                var level35Role = message.guild.roles.get(Listeners.Config.roleids.Lvl35);
                var level40Role = message.guild.roles.get(Listeners.Config.roleids.Lvl40);
                var level45Role = message.guild.roles.get(Listeners.Config.roleids.Lvl45);
                var level50Role = message.guild.roles.get(Listeners.Config.roleids.Lvl50);
                if (level == 5) {
                  message.member.addRole(level5Role)
                } else if (level == 10) {
                   message.member.addRole(level10Role)
                } else if (level == 15) {
                  message.member.addRole(level15Role);
                } else if (level == 20)  {
                  message.member.addRole(level20Role)
                } else if (level == 25)  {
                  message.member.addRole(level25Role)
                } else if (level == 30)  {
                  message.member.addRole(level30Role)
                } else if (level == 35)  {
                  message.member.addRole(level35Role)
                } else if (level == 40)  {
                  message.member.addRole(level40Role)
                } else if (level == 45)  {
                  message.member.addRole(level45Role)
                } else if (level == 50)  {
                  message.member.addRole(level50Role)
                }
                break;
              }
            }
            var updateSql = `UPDATE CozyCommunityUsers SET XPAmount='${currentXPAmount}', LastChattedTime='${dateTime}' WHERE AuthorID='${message.author.id}'`;
            Database.basicQuery(updateSql);
          }
        }
      }
    });
  }
}

module.exports = levelListener;
