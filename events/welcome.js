module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute: async (member) => {
        if (member.guild.id == dbs.config.server) {
            const welcome = await member.guild.channels.fetch(dbs.config.channels.welcome)
            welcome.send(`welcome ${member}!`)
        }
    },
};