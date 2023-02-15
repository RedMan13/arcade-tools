module.exports = async (message, args, slash) => {
    let result = {}
    if (slash) {
        for (let i = 0; i < args.length; i++) {
            result[args.name] = message.options.get(args.name)
        }
        return result
    }
    message.args = message.args.replaceAll(' ', '%20').replaceAll('}', '} ')
    for (let i = 0; i < args.length; i++) {
        let messageSplit = message.args.split('%20')
        if (!messageSplit[i] && args[i].required) return `The argument "${args[i].name}" is required` 
        if (args[i].type == 'string') {
            const regexed = message.args.match(new RegExp('(?<=\\' + args[i].lBraket + ')\\S*(?=\\' + args[i].rBraket + ')', 'gm'))
            if (!regexed) {
                result[args[i].name] = null
                return `The argument "${args[i].name}" has to be wraped in ${args[i].lBraket}${args[i].rBraket} and its contents must contain no whitspace charecters exept for space`
            }
            result[args[i].name] = regexed[0].replace('%20', ' ')
            message.args = message.args.replace(regexed[0], '').replace('} ', '}')
        }
        if (args[i].type == 'number') {
            if (Number(messageSplit[i]) == NaN) return `The argument "${args[i].name}" has to be a number` 
            result[args[i].name] = Math.min(Math.max(Number(messageSplit[i]), args[i].min), args[i].max)
        }
        if (args[i].type == 'any') {
            result[args[i].name] = String(messageSplit[i])
        }
        if (args[i].type == 'member') {
            let member = String(messageSplit[i])
            if (!member.startsWith('<@') && !member.includes('&')) return `The argument "${args[i].name}" has to be a member`
            member = member.replace('<@', '').replace('>', '')
            await message.guild.members.fetch(member).then(member => {
                result[args[i].name] = member
            })
        }
        if (args[i].type == 'channel') {
            let channel = String(messageSplit[i])
            if (!channel.startsWith('<#')) return `The argument "${args[i].name}" has to be a channel`
            channel = channel.replace('<#', '').replace('>', '')
            await imports.client.channels.fetch(channel).then(channel => {
                result[args[i].name] = channel
            })
        }
        if (args[i].type == 'role') {
            let role = String(messageSplit[i])
            if (!role.startsWith('<@&')) return `The argument "${args[i].name}" has to be a role`
            role = role.replace('<@&', '').replace('>', '')
            role = message.guild.roles.cache.get(role)
            result[args[i].name] = role
        }
    }
    return result
}