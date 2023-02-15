module.exports = {
    name: 'messageCreate',
    once: false,
    execute: async (message, dbs, imports) => {
        if (message.content.includes('🐀') || message.content.includes('rat')) {
            message.react('🐀');
        }
    },
};