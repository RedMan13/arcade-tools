module.exports = {
    name: 'whats-this?',
    category: 'info',
    sDesc: '',
    lDesc: 'just run it olo',
    args: [],
    execute: async (message) => {
        message.channel.send(`### Q: why are there so few commands? 
A: because i remade the bot and so am transfering the commands over from the old code to the modern 
     system.

### Q: can i help?
A: yes actually, the repo for the bot is [on here](<https://github.com/RedMan13/arcade-tools>), the orignal code 
     and databases is in the folder "old".`)
    },
};
