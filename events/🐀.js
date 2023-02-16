module.exports = {
    name: 'messageCreate',
    once: false,
    execute: async (message) => {
        if (message.content.includes('🐀') || message.content.includes('rat')) {
            message.react('🐀');
        }
    },
};