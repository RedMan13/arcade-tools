module.exports = {
    name: 'messageCreate',
    once: false,
    execute: async (message) => {
        if (message.channel.id == dbs.config.channels.counting) {
            const count = dbs.database.channel(message.channel.id).data.current 
                ? dbs.database.channel(message.channel.id).data 
                : {
                    "current": 0
                }
            if (message.author.id == count.user) {
                message.delete();
                message.guild.channels.fetch(dbs.config.channels.logs).then(channel => {
                    channel.send({
                        content: `<@${message.author.id}> has sent twice`
                    });
                })
                return
            }
            if (!message.content.includes(String(count.current + 1))) {
                message.delete();
                message.guild.channels.fetch(dbs.config.channels.logs).then(channel => {
                    channel.send({
                        content: `<@${message.author.id}> has sent the wrong number`
                    });
                })
                return
            }
            dbs.database.channel(message.channel.id).data = {
                "current": Number(message.content),
                "user": message.author.id
            }
        }
    },
};