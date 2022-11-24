const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
let process = require('process');
const config = JSON.parse(process.env.config)

const imports = {
	Discord: require('discord.js'),
	Database: require("mongquick"),
	path: require('path'),
	fs: require('fs'),
	locateCategory(name, fields) {
		for (let field = 0; field < fields.length; field++) {
			if (fields[field].name == name) {
				return field
			}
		}
	},
	getAllArgs: async (message, args) => {
		let result = {}
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
	},
	getRandomPost: require('musakui'),
	client: new Client({ 
		intents: [
			GatewayIntentBits.Guilds, 
			GatewayIntentBits.MessageContent, 
			GatewayIntentBits.GuildMessages
		] 
	})
}

let dbs = { // databases
	config: config,
	database: new imports.Database.DB(config.mongo),
	commands: {},
	commandConfig: config.commands
}

imports.fs.readdir('./commands', async (err, files) => { // read commands folder into a list of commands
	console.log(err ? err : 'reading commands with no error')
	files.forEach(async file => {
		let command = require('./commands/' + file)
		dbs.commands[command.name] = {
			description: command.sDesc,
			category: command.category,
			path: './commands/' + file
		}
	});
});

const eventsPath = imports.path.join(__dirname, 'events');
const eventFiles = imports.fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) { // add events via files
	const filePath = imports.path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		imports.client.once(event.name, async (...args) => event.execute(...args, dbs, imports))
	} else {
		imports.client.on(event.name, async (...args) => event.execute(...args, dbs, imports))
	}
}

/* login */
imports.client.login(config.token);