module.exports = {
	name: 'messageCreate',
	once: false,
	execute: async (message, dbs, imports) => {
        if (message.channel.id == dbs.config.channels.counting) {
            const count = await dbs.database.get('count') ? await dbs.database.get('count') : {
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
            dbs.database.set('count', {
                "current": Number(message.content),
                "user": message.author.id
            });
        }
	},
};