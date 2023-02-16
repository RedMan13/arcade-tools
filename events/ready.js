module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        client.channels.cache.get(dbs.config.channels.console).send(`Ready! Logged in as ${client.user.tag}`)
    },
};