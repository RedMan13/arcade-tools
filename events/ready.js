module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.channels.cache.get('983516228691824641').send(`Ready! Logged in as ${client.user.tag}`)
	},
};