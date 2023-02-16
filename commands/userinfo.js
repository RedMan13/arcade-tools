const checkmark = (bool) => bool ? '✅' : '❌'

module.exports = {
    name: 'userinfo',
    category: 'info',
    sDesc: 'gets user info',
    lDesc: 'gets info a specified user',
    args: [
        {
            type: 'member',
            name: 'user',
            required: true
        }
    ],
    execute({ channel, arguments: args, member: author }) {
        const user = args.user
        
        console.log(author, user)
        const tagNum = user.user.tag.split('#')[1]
        const infoEmbed = {
            color: user.displayHexColor,
            title: `user info for ${user.displayName}#${tagNum}`,
            author: {
                name: author.name,
                icon_url: author.displayAvatarUrl()
            },
            thumbnail: user.displayAvatarUrl(),
            decription: [
                `\`joined server at\`: <t:${user.joinedTimestamp}:F>`,
                `\`joined discord at\`: <t:${user.user.createdTimestamp}:F>`,
                `\`above bot\`: ${checkmark(user.manageable)}`,
                `\`can be kicked by bot\`: ${checkmark(user.kickable)}`,
                `\`can be moderated\`: ${checkmark(user.moderatable)}`,
                `\`last boosted this server\`: ${user.premiumSinceTimestamp}`
            ].join(',\n'),
            fields: [
                {
                    name: 'Roles',
                    value: user.roles.cache.map((role) => role.toString())
                }
            ],
            footer: {
                text: user.id,
                icon_url: user.user.displayAvatarURL()
            }
        }
        channel.send({embed: infoEmbed})
    }
}