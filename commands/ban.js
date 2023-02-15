module.exports = {
    name: 'ban',
    category: 'moderators',
    sDesc: 'bans a person',
    lDesc: 'bans a person from the server, put the reason inbetween {}',
    args: [
        {
            type: 'member',
            name: 'user',
            required: true
        },
        {
            type: 'string',
            lBraket: '"',
            rBraket: '"',
            name: 'reason',
            required: false
        }
    ],  
    execute: async (interaction, dbs, imports) => {
        try {
            if (!message.member.permissions.has('4')) {
                interaction.reply({ 
                    content: 'you need the ban members perm to use this', 
                    ephemeral: false
                });
                return
            }
            message.arguments.user.ban({ 
                reason: !message.arguments.reason
                    ? 'no reason given' 
                    : message.arguments.reason,
            });
            message.channel.send({
                embeds: [{
                    title: 'banned ' + message.arguments.user.username,
                    description: !message.arguments.reason
                        ? 'no reason given' 
                        : 'because ' + message.arguments.reason,
                    timestamp: new Date().toISOString()
                }]
            });
        } catch(err) {
            console.log(err);
            message.channel.send({ 
                content: [
                    'error!',
                    err
                ].join('\n'), 
                ephemeral: true
            });
            imports.client.channels.fetch(dbs.config.channels.console).then(channel => {
                channel.send({
                    content: String(err)
                });
            })
        };
    }
};