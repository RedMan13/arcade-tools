module.exports = {
	name: 'get-count',
	category: 'info',
	sDesc: 'gets the count',
	lDesc: 'gets the current count in <#954587338988716093>',
	args: [],
	execute: async (message, dbs) => {
		message.channel.send(`the current count in <#954587338988716093> is ${await dbs.database.get('count').current}`)
	},
};