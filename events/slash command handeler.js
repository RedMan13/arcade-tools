module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, dbs, imports) => {
        const command = dbs.commands[interaction.commandName]
        if (!command.isSlash) {
            throw new Error('attempted to run a text command as a slash command. these two types are incompatible')
        }
        require(command.path).execute(interaction, dbs, imports)
    }
};