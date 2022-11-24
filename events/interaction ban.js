module.exports = {
	name: 'interactionCreate',
	once: false,
	execute: async (interaction, dbs, imports) => {
        const command = (interaction.commandName);
        try {
            if (command == 'ban') {
                if (!interaction.member.permissions.has('4')) {
                    interaction.reply({ 
                        content: 'you need the ban members perm to use this', 
                        ephemeral: false
                    });
                    return
                }
                interaction.options.getMember('user').ban({ 
                    reason: !interaction.options.getString('reason')
                        ? 'no reason given' 
                        : message.arguments.reason,
                });
                interaction.reply({
                    embeds: [{
                        title: 'banned ' + interaction.options.getUser('user').username,
                        description: !interaction.options.getString('reason') 
                            ? 'no reason given' 
                            : 'because ' + interaction.options.getString('reason'),
                        timestamp: new Date().toISOString()
                    }]
                });
            }
        } catch(err) {
            console.log(err);
            interaction.reply({ 
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