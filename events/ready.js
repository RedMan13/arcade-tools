const https = require("https");

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        client.channels.cache.get(dbs.config.channels.console).send(`Ready! Logged in as ${client.user.tag}`);
        setInterval(() => {
            https.get('https://api.popcat.xyz/quote', async res => {
                let data = "";
                res.on("data", chunk => {
                    data += chunk;
                });
                res.on("end", async () => {
                    const {quote} = JSON.parse(data);
                    const qotd = await client.channels.cache.fetch('1007144248480649307');
                    qotd.send(quote);
                });
            });
        }, 1000 * 60 * 60 * 24);
    },
};