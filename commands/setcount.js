module.exports = {
  	name: 'set-count',
  	category: 'settings',
  	sDesc: 'sets the count',
  	lDesc: 'sets the current count in <#954587338988716093>',
  	args: [
        {
            type: 'number',
            name: 'count',
            max: Infinity,
		    min: 1,
            required: true
        }
    ],
	  execute: async (message, dbs) => {
        try {
            dbs.database.channel(dbs.config.channels.counting).data = {
                current: message.arguments.count,
                user: '865486218351345674'
            }
            message.channel.send(`successfully set the count to ${message.arguments.count}!`)
        } catch (err) {
            message.channel.send(`failed to set the count to ${message.arguments.count}.\nerror:\n${err}`)
        }
	  },
};