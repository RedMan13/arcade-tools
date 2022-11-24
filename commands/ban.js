module.exports = {
	name: 'get-count',
	category: 'settings',
	sDesc: 'sets the count',
	lDesc: 'sets the current count in <#954587338988716093>',
	args: [
        {
            type: 'member',
            name: 'user',
            required: true
        },
		{
			type: 'string',
			lBraket: '{"',
			rBraket: '}',
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