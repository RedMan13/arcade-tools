console.log('starting...')

require('./statics/uptimer')
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
let process = require('process');
const config = require('./statics/config.json')
const syncSlash = require('@frostzzone/discord-sync-commands');

const imports = {
    process: process,
    Discord: require('discord.js'),
    path: require('path'),
    fs: require('fs'),
    db: require('./statics/databaseClass.js'),
    locateCategory(name, fields) {
        for (let field = 0; field < fields.length; field++) {
            if (fields[field].name == name) {
                return field
            }
        }
    },
    getAllArgs: require('./statics/arguments parser'),
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
    database: imports.db,
    commands: {},
    commandConfig: config.commands
}

let slashCommands = []

console.log('\n')
imports.fs.readdir('./commands', async (err, files) => { // read commands folder into a list of commands
    console.log(err ? err : 'reading commands with no error')
    files.forEach(async file => {
        let command = require('./commands/' + file)
        if (command.slashCmd) {
            console.log(`pushed ${command.comData.name} to slash command sync list`)
            slashCommands.push(command.comData)
            dbs.commands[command.comData.name] = {
                description: command.comData.description,
                path: '../commands/' + file,
                isSlash: true
            }
            return
        }
        console.log(`loading command ${command.name}`)
        dbs.commands[command.name] = {
            description: command.sDesc,
            category: command.category,
            path: './commands/' + file
        }
    });
});
console.log('\n')
syncSlash(imports.client, slashCommands, { debug: true })
console.log('\n')

const eventsPath = imports.path.join(__dirname, 'events');
const eventFiles = imports.fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) { // add events via files
    console.log(`applying event ${file}`)
    const filePath = imports.path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        imports.client.once(event.name, async (...args) => event.execute(...args, dbs, imports))
    } else {
        imports.client.on(event.name, async (...args) => event.execute(...args, dbs, imports))
    }
}

/* login */
imports.client.login(process.env.token);

globalThis.stop = () => {
    imports.client.destroy()
}