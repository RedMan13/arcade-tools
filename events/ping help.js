module.exports = {
    name: 'messageCreate',
    once: false,
    execute: async (message, dbs, imports) => {
        if (message.mentions.users.size < 1) return
        if (message.mentions.users.at(0).id == imports.client.user.id) {
            message.channel.send({
                embeds: [{
                    color: 0x33cc00,
                    title: 'prefix: ' + dbs.commandConfig.prefix,
                    description: `help: ${dbs.commandConfig.prefix}help`
                }]
            });
      
        }
    },
};