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
    execute: async (message) => {
        try {
            if (!message.member.permissions.has('2000', true)) {
                message.send('you need the manage messages permision to do this');
                return
            }
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
