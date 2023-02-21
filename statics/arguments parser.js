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
        const messageSplit = message.args.split('%20')
        const arg = arg
        const name = arg.name
        if (!messageSplit[i] && arg.required) return `The argument "${name}" is required` 
        if (arg.type == 'string') {
            const left = arg.lBraket ? arg.lBraket : '"';
            const right = arg.rBraket ? arg.rBraket : '"';
            const regexed = message.args.match(new RegExp(`(?<=\\${left})\\S*(?=\\${right})`, 'gm'))
            if (!regexed) {
                result[name] = null
                return `The argument "${name}" has to be wraped in ${left}${right} and its contents must contain no whitspace charecters exept for space`
            }
            result[name] = regexed[0].replace('%20', ' ')
            message.args = message.args.replace(regexed[0], '').replace('} ', '}')
        }
        if (arg.type == 'number') {
            const number = Number(messageSplit[i])
            if (number === NaN) return `The argument "${name}" has to be a number` 
            result[name] = Math.min(Math.max(number, arg.min), arg.max)
        }
        if (arg.type == 'any') {
            result[name] = messageSplit[i]
        }
        if (arg.type == 'member') {
            let member = messageSplit[i]
            if (!member.startsWith('<@') && !member.includes('&')) return `The argument "${name}" has to be a member`
            member = member.replace('<@', '').replace('>', '')
            await message.guild.members.fetch(member).then(member => {
                result[name] = member
            })
        }
        if (arg.type == 'channel') {
            let channel = messageSplit[i]
            if (!channel.startsWith('<#')) return `The argument "${name}" has to be a channel`
            channel = channel.replace('<#', '').replace('>', '')
            await imports.client.channels.fetch(channel).then(channel => {
                result[name] = channel
            })
        }
        if (arg.type == 'role') {
            let role = messageSplit[i]
            if (!role.startsWith('<@&')) return `The argument "${name}" has to be a role`
            role = role.replace('<@&', '').replace('>', '')
            role = message.guild.roles.cache.get(role)
            result[name] = role
        }
    }
    return result
}