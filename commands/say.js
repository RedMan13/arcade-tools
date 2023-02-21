module.exports = {
    name: 'say',
    category: 'your mom jokes',
    sDesc: 'says something',
    lDesc: 'says something, can only be used by <@860531746294726736>',
    args: [
        {
            type: 'string',
            name: 'message',
            required: true
        },
        {
            type: 'channel',
            name: 'channel',
            required: false
        }
    ],
    execute: (message) => {
        if (!message.author.id === "860531746294726736") {
            message.channel.send(`you are not authorized to use this`);
            return;
        }
        const args = message.arguments;
        const message = args.message;
        const dest = args.channel 
            ? args.channel 
            : message.channel;
        dest.send(message);
        message.channel.send(`successfully sent \`${message}\` to ${dest}`);
    },
};