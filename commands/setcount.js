module.exports = {
	name: 'get-count',
	category: 'settings',
	sDesc: 'sets the count',
	lDesc: 'sets the current count in <#954587338988716093>',
	args: [
        {
            type: 'number',
            name: 'count',
            required: true
        }
    ],
	execute: async (message, dbs) => {
        try {
            await dbs.database.get('count', {
                current: message.arguments.count,
                user: '865486218351345674'
            })
            message.channel.send(`successfully set the count to ${message.arguments.count}!`)
        } catch (err) {
            message.channel.send(`failed to set the count to ${message.arguments.count}.\nerror:\n${err}`)
        }
	},
};