(async()=>{
  const { token } = require('./config.json')
  let process = require('process');
  process.on('uncaughtException', function (err) {
    console.log(`Error!`);
    console.log(err);
  });
  const events = require('events');
  const { exec } = require("child_process")
  let Discord = require("discord.js")
  let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
let moment  = require("moment")
const os = require("os-utils");
let URL = require('url')
const ms = require("ms")
let { DB } = require("mongquick");
let https = require("https")
const jimp = require('jimp')
const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');
const S4D_APP_REDDIT_musakui = require('musakui');
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`./database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);
const discordModals = require('discord-modals');
    discordModals(s4d.client);
    const { Modal, TextInputComponent, showModal } = require('discord-modals');         
                    var delimiter, command, prefix, arguments2, user_appeal, appeal_step, temp, send, number, topic, menu, THIS_IS_SO_FUCKING_STUPID, t, channel, message, user, role_id_s, ship, reson, segments, progress, db, out, lb, list, j, i, percent, object, lb_page, object_two;

function subsequenceFromStartLast(sequence, at1) {
  var start = at1;
  var end = sequence.length - 1 + 1;
  return sequence.slice(start, end);
}

function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}


await s4d.client.login(token).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('well shit here we go again');
});
server.listen(3000);

const mdb = new Database('./mongoDB.json');


synchronizeSlashCommands(s4d.client, [
  {
      name: 'ban',
  		description: 'bans a specified user',
  		options: [
          {
          type: 6,
    			name: 'user',
    			description: 'the user to ban',
    			required: true
    },{
          type: 3,
    			name: 'reason',
    			description: 'why they are banned',
    			required: false,
          choices: [

          ]
    },
      ]
  },
],{
    debug: false,

});

const leveling = new Database('./level db.json')
const gen = new Database('./database.json')
s4d.client.on('ready', async () => {
  delimiter = '\n';
  prefix = 'a!';
  s4d.client.user.setPresence({status: "online",activities:[{name:(String(prefix) + 'help'),type:"LISTENING"}]});
  let date = ((new Date().getDate()));

          while(s4d.client && s4d.client.token) {
              await delay(50);
                if (((new Date().getDate())) > date) {
      https.get('https://api.popcat.xyz/quote', async resp => {
      let data2 = "";
      resp.on("data",async chunk => {
      data2 += chunk;
      });
      resp.on("end",async () => {
      let data = JSON.parse(data2)
         s4d.client.channels.cache.get('1007144248480649307').send({content:String((data.quote))});

      });
      })
      .on("error",async err => {
      console.log("Error: " + err.message);
      });
      date = new Date().getDate()
    }

              if (false) {
                  console.log('ran')
              }
          }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (((s4dmessage.channel).id) == '954587338988716093') {
    if (((s4dmessage.author).id) == (await(mdb.get('last-sent-user')))) {
      s4dmessage.delete();
      s4d.client.channels.cache.get('922022309806637056').send({content:String((String(s4dmessage.author) + ' has sent twice'))});
      s4dmessage.channel.send('banana 🍌')} else if (String((s4dmessage.content)).includes(String((String((Number((await(mdb.get('current-count'))))) + 1))))) {
      mdb.set('current-count', (Number((s4dmessage.content))));
      mdb.set('last-sent-user', ((s4dmessage.author).id));
    } else {
      s4dmessage.delete();
      s4d.client.channels.cache.get('922022309806637056').send({content:String((String(s4dmessage.author) + ' has sent the wrong number'))});
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((String((s4dmessage.content)).includes(String('🐀'))) || (String((s4dmessage.content)).includes(String('rat')))) {
    try{
              s4dmessage.react('🐀');
        }catch(err){
              s4dmessage.channel.send({content:String('i need the "add reactions" perm to do this')});

        };
        }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '<@!882556092893245501>' || (s4dmessage.content) == '<@882556092893245501>') {
    var embed = new Discord.MessageEmbed();
       embed.setColor('#33cc00');
      embed.setTitle(String('prefix: a!'))
      embed.setDescription(String('help: a!help'));
      s4dmessage.channel.send({embeds: [embed]});

  }

});

s4d.client.on('guildMemberAdd', async (param1) => {
s4d.joiningMember = param1;
  if (((s4d.joiningMember.guild).id) == '865486218351345674') {
    s4d.client.channels.cache.get('897011347492065290').send({content:String((['welcome ',(s4d.joiningMember.user).username,'!'].join('')))});
  }
s4d.joiningMember = null
});

s4d.client.on('interactionCreate', async (i) => {
        let member = i.guild.members.cache.get(i.member.user.id)
        let interaction = i; if (!(i.isButton())) return;
          if (((i.customId)) == 'appeal') {
    if (!(await (s4d.client.guilds.cache.get('865486218351345674')).members.fetch(((i.member.user)).id) != null)) {
      await interaction.reply({ content: 'you are not banned', ephemeral: true || false, components: [] });
      return
    }
    		const modal = new Modal()
    			.setCustomId('baned')
    			.setTitle('ban appeal form');
    		const ban_reason = new TextInputComponent()
    			.setCustomId('ban-reason')
    			.setLabel("Why and when where you banned?")
    			.setStyle('SHORT');
    		const reason_unban = new TextInputComponent()
    			.setCustomId('reason-unban')
    			.setLabel("Why should we unban you?")
    			.setStyle('SHORT');
    		const reason_unjust = new TextInputComponent()
    			.setCustomId('reason-unjust')
    			.setLabel("Do you believe your ban was unjust?")
    			.setStyle('SHORT');
    		const ban_sorry = new TextInputComponent()
    			.setCustomId('ban-sorry')
    			.setLabel("Are you sorry for what you did?")
    			.setStyle('SHORT');
    		const perma_acknowledged = new TextInputComponent()
    			.setCustomId('perma-acknowledged')
    			.setLabel("do you acnoledge false info will prema ban u?")
    			.setStyle('SHORT');
    		modal.addComponents(ban_reason, reason_unban, reason_unjust, ban_sorry, perma_acknowledged);
    		await interaction.showModal(modal);
  }

    });

s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
          if ((s4dmessage.guild) == null) {
    if ((s4dmessage.content) == 'appeal') {
      if (await (s4d.client.guilds.cache.get('865486218351345674')).members.fetch((s4dmessage.member.user).id) != null) {
        s4dmessage.channel.send({content:String('you are not baned')});
        return
      }
      user_appeal = (new Map());
      user_appeal.set(String('user'), (s4dmessage.author))
          s4dmessage.channel.send({content:String('why where you banned?')});
      appeal_step = 1;
    } else if (appeal_step > 0) {
      if (appeal_step == 1) {
        user_appeal.set(String('ban-reason'), (s4dmessage.content))
            s4dmessage.channel.send({content:String('Why should we unban you?')});
        appeal_step = (typeof appeal_step === 'number' ? appeal_step : 0) + 1;
      } else if (appeal_step == 2) {
        user_appeal.set(String('reason-unban'), (s4dmessage.content))
            s4dmessage.channel.send({content:String('Do you believe your ban was unjust?')});
        appeal_step = (typeof appeal_step === 'number' ? appeal_step : 0) + 1;
      } else if (appeal_step == 3) {
        user_appeal.set(String('reason-unjust'), (s4dmessage.content))
            s4dmessage.channel.send({content:String('At what time were you banned?')});
        appeal_step = (typeof appeal_step === 'number' ? appeal_step : 0) + 1;
      } else if (appeal_step == 4) {
        user_appeal.set(String('time-banned'), (s4dmessage.content))
            s4dmessage.channel.send({content:String('Are you sorry for what you did?')});
        appeal_step = (typeof appeal_step === 'number' ? appeal_step : 0) + 1;
      } else if (appeal_step == 5) {
        user_appeal.set(String('ban-sorry'), (s4dmessage.content))
            s4dmessage.channel.send({content:String('Do you realize falsifying information will lead you to be banned permanently?')});
        appeal_step = (typeof appeal_step === 'number' ? appeal_step : 0) + 1;
      } else if (appeal_step == 6) {
        user_appeal.set(String('perma-acknowledged'), (s4dmessage.content))
            user_appeal.set(String('user'), (s4dmessage.author))
            s4dmessage.channel.send({content:String('appeal done and sent')});
        var embed = new Discord.MessageEmbed();
           embed.setAuthor({name: String(((user_appeal.get(String('user'))).tag)), iconURL: String(((user_appeal.get(String('user'))).displayAvatarURL({format:"png"})))});
          embed.setTitle(String('ban appeal'))
          embed.addField(String('reason:'), String((String(user_appeal.get(String('ban-reason'))))), false);
          embed.addField(String('why we should unban:'), String((String(user_appeal.get(String('reason-unban'))))), false);
          embed.addField(String('why we where wrong to ban them:'), String((String(user_appeal.get(String('reason-unjust'))))), false);
          embed.addField(String('when they where banned:'), String((String(user_appeal.get(String('time-banned'))))), false);
          embed.addField(String('apology:'), String((String(user_appeal.get(String('ban-sorry'))))), false);
          embed.addField(String('there acknowledgement that they will be perma banned for false info:'), String((String(user_appeal.get(String('perma-acknowledged'))))), false);
          embed.setTimestamp(new Date());

        s4d.client.channels.cache.get('984964661818556416').send({embeds: [embed]});
      }
    }
  } else if (((s4dmessage.content) || '').startsWith('poot appeal here' || '')) {
    let ap = new MessageButton()
      ap.setStyle("DANGER");ap.setLabel('appeal');ap.setCustomId('appeal');s4dmessage.delete();
    s4dmessage.channel.send({
            content: String('click appeal to open a ban appeal'),
            components: [new MessageActionRow().addComponents(ap)],

            });}

    });

s4d.client.on('modalSubmit', async (i) => {
let member = i.guild.members.cache.get(i.member.user.id)
  if (((i.customId)) == 'baned') {
    if (await (s4d.client.guilds.cache.get('865486218351345674')).members.fetch((i.member.user).id) != null) {
      await i.reply({
      content: String('you are not banned'),
      ephemeral: true
      })} else {
      var embed = new Discord.MessageEmbed();
         embed.setAuthor({name: String(((i.member.user).username)), iconURL: String(((i.member.user).displayAvatarURL({format:"png"})))});
        embed.setTitle(String('ban appeal'))
        embed.setDescription(String(('ban reason: ' + String((i.getTextInputValue('ban-reason'))))));
        embed.addField(String('why we should unban:'), String((String((i.getTextInputValue('reason-unban'))))), false);
        embed.addField(String('why we where wrong to ban them:'), String((String((i.getTextInputValue('reason-unjust'))))), false);
        embed.addField(String('apology:'), String((String((i.getTextInputValue('ban-sorry'))))), false);
        embed.addField(String('there acknowledgement that they will be perma banned for false info:'), String((String((i.getTextInputValue('perma-acknowledged'))))), false);
        embed.setTimestamp(new Date());

      s4d.client.channels.cache.get('984964661818556416').send({embeds: [embed]});
      await i.reply({
      content: String('appeal submited'),
      ephemeral: true
      })}
  }

});

s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
          command = (interaction.commandName);
  try{
            if (command == 'ban') {
      if (!(((interaction.member)._roles.includes(((interaction.guild).roles.cache.get('922016495612080158')).id)) || ((interaction.member)._roles.includes(((interaction.guild).roles.cache.get('896548588878966784')).id)))) {
        await interaction.reply({ content: 'you need the ban members perm to use this', ephemeral: false || false, components: [] });
        return
      }
      (((interaction.guild).members.cache.get(((interaction.options.getUser('user')).id)) || await (interaction.guild).members.fetch(((interaction.options.getUser('user')).id)))).ban({ reason: (interaction.options.getString('reason')) });
      var embed = new Discord.MessageEmbed();
         embed.setTitle(String(('banned ' + String((interaction.options.getUser('user')).username))))
        if ((interaction.options.getString('reason')) == null) {
          embed.setDescription(String('no reason given'));
        } else {
          embed.setDescription(String(('because ' + String(interaction.options.getString('reason')))));
        }
        embed.setTimestamp(new Date());
        await interaction.reply({embeds: [embed]});

    }

      }catch(err){
            console.log((err));
    await interaction.reply({ content: (['error!','\n',err].join('')), ephemeral: true || false, components: [] });
    s4d.client.channels.cache.get('983516228691824641').send({content:String((err))});

      };

    });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (((s4dmessage.content) || '').startsWith(prefix || '')) {
    arguments2 = subsequenceFromStartLast(s4dmessage.content, ((prefix.length + 1) - 1)).split(' ');
    command = arguments2[0];
    try{
              switch (arguments2.splice(0, 1)[0]) {
                case 'help':
              var embed = new Discord.MessageEmbed();
             embed.setColor('#33cc00');
            embed.setTitle(String('help page!'))
            embed.setDescription(String('select a category to see the commands'));
            embed.setTimestamp(new Date());
            menu = (new MessageActionRow()
                .addComponents(
                new MessageSelectMenu()
                .setCustomId('help')
                .setPlaceholder('click me!')
                .setMaxValues(1)
                .setMinValues(1)
                .setDisabled(false)


                .addOptions(  {
              value:'count',
              label:'info',
              description:'info on things like #counting and stuff',
              default:false,},
              {
              value:'top',
              label:'fun',
              description:'fun commands do you can have the funni moment lol',
              default:false,},
              {
              value:'red',
              label:'config',
              description:'configuration stuff',
              default:false,},
            ))
            );
            (s4dmessage.channel).send({embeds: [embed],components:[menu]}).then(async m=>{
                              let collector = m.createMessageComponentCollector({filter: i=>i.user.id === (s4dmessage.author).id ,time:60000});
                  collector.on('collect',async i=>{
                        if ((i.customId) == 'help') {
                  if ((i.values[0]) == 'count') {
                    var embed = new Discord.MessageEmbed();
                       embed.setColor('#33cc00');
                      embed.setTitle(String('help page!'))
                      embed.addField(String('info'), String(('`count` gets the current count' + '\n' +
                      '`list-topics` lists all topics' + '\n' +
                      '`server-info` server info' + '\n' +
                      '`get-all-roles` gets all roles on the server and optionally all roles on a memeber' + '\n' +
                      '`avatar` get your or anothre persons avatar' + '\n' +
                      '`level` gets your current level' + '\n' +
                      '`lb`/`leaderboard` gets the level leaderboard')), false);
                      embed.setTimestamp(new Date());

                  } else if ((i.values[0]) == 'top') {
                    var embed = new Discord.MessageEmbed();
                       embed.setColor('#33cc00');
                      embed.setTitle(String('help page!'))
                      embed.addField(String('fun'), String(('`memes` gets a random meme from r/memes' + '\n' +
                      '`mcmemes` gets a random meme from r/MinecraftMemes' + '\n' +
                      '`softwaregore` gets a random post from r/softwaregore' + '\n' +
                      '`hardwaregore` gets a random post from r/hardwaregore' + '\n' +
                      '`say` say something as a webhook' + '\n' +
                      '`ship` gets a random person and makes a random percentage of love' + '\n' +
                      '`8ball` good old 8ball' + '\n' +
                      '`facts` facts meme with your own text' + '\n' +
                      '`wanted` makes a wanted poster of whoever you ant' + '\n' +
                      '`showerthoughts` shower thoughts')), false);
                      embed.setTimestamp(new Date());

                  } else if ((i.values[0]) == 'red') {
                    var embed = new Discord.MessageEmbed();
                       embed.setColor('#33cc00');
                      embed.setTitle(String('help page!'))
                      embed.addField(String('config'), String(('`set-count` sets the count' + '\n' +
                      '`add-topic` adds a topic' + '\n' +
                      '`remove-topic` removes a topic' + '\n' +
                      '`level`' + '\n' +
                      '`set-level` someones level to a amount' + '\n' +
                      '`add-level` adds a amount to someones level' + '\n' +
                      '`transfer-level` transfers the level of one user to another user' + '\n' +
                      '`no-level-channels` add/remove a channel where you cant gain levels' + '\n' +
                      '`level-roles` add/remove a role reward for geting a specific ')), false);
                      embed.setTimestamp(new Date());

                  }
                  await i.update({embeds: [embed],components:[menu]}).then(async m=>{

                              });
                }

                  })

                        });


        break;
        case 'set-count':
              if ((s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            number = (Number((arguments2[0])));
            gen.set(String('current-count'), number);
            gen.set(String('last-sent-user'), '');
            s4dmessage.channel.send({content:String(('set count to ' + String(number)))});
          } else {
            s4dmessage.channel.send({content:String('you do not have permission to use this command')});
          }

        break;
        case 'count':
              s4dmessage.channel.send({content:String(('the current count is ' + String(gen.get(String('current-count')))))});

        break;
        case 'topic':
              topic = gen.get(String('topic'));
          s4dmessage.channel.send({content:String((String(listsGetRandomItem(topic, false))))});

        break;
        case 'add-topic':
              if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
            temp = gen.get(String('topic'));
            temp.push((arguments2.join(' ')));
            gen.set(String('topic'), temp);
            s4dmessage.channel.send({content:String((['added ',arguments2.join(' '),' to the topic list'].join('')))});
          } else {
            s4dmessage.channel.send({content:String('you need the perm manage server to use this')});
          }

        break;
        case 'delete-topic':
              if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
            topic = gen.get(String('topic'));
            temp = topic[((Number((arguments2[0]))) - 1)];
            topic.splice(((Number((arguments2[0]))) - 1), 1);
            gen.set(String('topic'), topic);
            s4dmessage.channel.send({content:String((['removed ',temp,' from the topic list'].join('')))});
          } else {
            s4dmessage.channel.send({content:String('you need the perm manage server to use this')});
          }

        break;
        case 'list-topics':
              topic = gen.get(String('topic'));
          t = 0;
          for (var temp_index in topic) {
            temp = topic[temp_index];
            t = (typeof t === 'number' ? t : 0) + 1;
            topic[(t - 1)] = [t,'. ',topic[(t - 1)]].join('');
          }
          topic = topic.join('\n');
          s4dmessage.channel.send(topic);

        break;
        case 'members':
              s4dmessage.channel.send({content:String((['this server has ',(interaction.guild).memberCount,' members and ',(interaction.guild).members.cache.filter(m => m.user.bot).size,' bots'].join('')))});

        break;
        case 'meme':

              S4D_APP_REDDIT_musakui('memes')
            .then(async (result) => {
            var postTitle = result.title
            var postUrl = result.reddit_url
            var postImg = result.media_url
            var postUpvotes = result.upvotes
            var postComs = result.comments
               var embed = new Discord.MessageEmbed();
               embed.setColor('#3333ff');
              embed.setTitle(String((postTitle)))
               embed.setURL(String((postUrl)));
              embed.setImage(String((postImg)));
              s4dmessage.channel.send({embeds: [embed]});


           })
            .catch(error => console.log(error));

        break;
        case 'mcmemes':

              S4D_APP_REDDIT_musakui('MinecraftMemes')
            .then(async (result) => {
            var postTitle = result.title
            var postUrl = result.reddit_url
            var postImg = result.media_url
            var postUpvotes = result.upvotes
            var postComs = result.comments
               var embed = new Discord.MessageEmbed();
               embed.setColor('#3333ff');
              embed.setTitle(String((postTitle)))
               embed.setURL(String((postUrl)));
              embed.setImage(String((postImg)));
              s4dmessage.channel.send({embeds: [embed]});


           })
            .catch(error => console.log(error));

        break;
        case 'softwaregore':

              S4D_APP_REDDIT_musakui('softwaregore')
            .then(async (result) => {
            var postTitle = result.title
            var postUrl = result.reddit_url
            var postImg = result.media_url
            var postUpvotes = result.upvotes
            var postComs = result.comments
               var embed = new Discord.MessageEmbed();
               embed.setColor('#3333ff');
              embed.setTitle(String((postTitle)))
               embed.setURL(String((postUrl)));
              embed.setImage(String((postImg)));
              s4dmessage.channel.send({embeds: [embed]});


           })
            .catch(error => console.log(error));

        break;
        case 'hardwaregore':

              S4D_APP_REDDIT_musakui('hardwaregore')
            .then(async (result) => {
            var postTitle = result.title
            var postUrl = result.reddit_url
            var postImg = result.media_url
            var postUpvotes = result.upvotes
            var postComs = result.comments
               var embed = new Discord.MessageEmbed();
               embed.setColor('#3333ff');
              embed.setTitle(String((postTitle)))
               embed.setURL(String((postUrl)));
              embed.setImage(String((postImg)));
              s4dmessage.channel.send({embeds: [embed]});


           })
            .catch(error => console.log(error));

        break;
        case 'say':
              channel = (s4dmessage.channel);
          message = arguments2.join(' ');
          channel.fetchWebhooks().then(async (webhooks) => {
                    if (!(webhooks.has(String((await(mdb.get(('webid:' + String(channel.id))))))))) {
              channel.createWebhook('Spidey Bot','https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png').then(async webhook=>{
                mdb.set(('webid:' + String(channel.id)), (webhook.id));
                mdb.set(('webtoken:' + String(channel.id)), (webhook.token));
                await delay(Number(1)*1000);

              })
            }

              })
              try{
                    s4d.client.fetchWebhook((await(mdb.get(('webid:' + String(channel.id))))),(await(mdb.get(('webtoken:' + String(channel.id)))))).then(async gwebhook =>{
              gwebhook.send({
                  username: String(((s4dmessage.author).username)),
                  avatarURL: String(((s4dmessage.author).displayAvatarURL({format:"png"}))),
                  message
              });
              s4dmessage.delete();

            });

              }catch(err){
                    console.log((err));
            s4d.client.channels.cache.get('983516228691824641').send({content:String((err))});

              };

        break;
        case 'console':
              if (((s4dmessage.author).id) == '860531746294726736') {
            try{
                      exec((arguments2.join(' ')));
              s4dmessage.channel.send({content:String(('ran ' + String(arguments2.join(' '))))});

                }catch(err){
                      s4dmessage.channel.send({content:String((['error!','\n',err].join('')))});

                };
                } else {
            s4dmessage.channel.send({content:String('hey you cant do that!')});
          }

        break;
        case 'get-all-roles':
              user = ((s4dmessage).mentions.users.at(Number(1) - 1));
          t = [];
          (s4dmessage.guild).roles.cache.forEach(async (ro) =>{
             role_id_s = ((ro).id);
            if ((s4dmessage).mentions.users != null && (s4dmessage).mentions.users.size > 0) {
              if ((((s4dmessage.guild).members.cache.get((user.id)) || await (s4dmessage.guild).members.fetch((user.id))))._roles.includes(((s4dmessage.guild).roles.cache.get(role_id_s)).id)) {
                t.push(role_id_s);
              } else {
              }
            } else {
              t.push(role_id_s);
            }

          })
          role_id_s = t;
          var repeat_end = role_id_s.length;
          for (var count = 0; count < repeat_end; count++) {
            send = [send,'<@&',role_id_s.splice(0, 1)[0],'>','\n'].join('');
          }
          if (send == null) {
            send = 'nup :skull:';
          }
          var embed = new Discord.MessageEmbed()
             embed.setColor('#cc66cc');
            if ((s4dmessage).mentions.users != null && (s4dmessage).mentions.users.size > 0) {
              embed.setTitle((['here are all the roles that ',user.username,' has'].join('')));
            } else {
              embed.setTitle('here are all the roles in the server');
            }
            embed.setDescription(send);
            (s4dmessage.channel).send({ embeds: [embed] });


        break;
        case 'ban':
              if (!(s4dmessage.member).permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            s4dmessage.channel.send({content:String('you need the ban members perm to use this')});
            return
          }
          arguments2.splice(0, 1);
          let ap = new MessageButton()
            ap.setStyle("DANGER");ap.setLabel('appeal');ap.setCustomId('appeal');reson = arguments2.join(' ');
          send = ((s4dmessage).mentions.users.at(Number(1) - 1));
          send.send({
                  content: String(['you have been banned from arcade because ',reson,` if you think this is wrong then click the button above
          if there is no button below then join this server https://discord.gg/VZvxMuTWW2 and dm this bot appeal`].join('')),
                  components: [new MessageActionRow().addComponents(ap)],

                  });(((interaction.guild).members.cache.get((((s4dmessage).mentionss.at(Number(1) - 1)).id)) || await (interaction.guild).members.fetch((((s4dmessage).mentions.users.at(Number(1) - 1)).id))).user).ban({ reason: reson });
          var embed = new Discord.MessageEmbed();
             embed.setTitle(String(('banned ' + String(send.username))))
            if (arguments2[0] == null) {
              embed.setDescription(String('no reason given'));
            } else {
              embed.setDescription(String(('because ' + String(reson))));
            }
            embed.setTimestamp(new Date());
            s4dmessage.channel.send({embeds: [embed]});


        break;
        case 'ship':
              user = (s4dmessage.member.user);
          ship = ((s4dmessage.guild).members.cache.random().user);
          if (((s4dmessage).mentions.users.size) > 1) {
            user = ((s4dmessage).mentions.users.at(Number(1) - 1));
            ship = ((s4dmessage).mentions.users.at(Number(2) - 1));
          } else if (((s4dmessage).mentions.users.size) > 0) {
            user = ((s4dmessage).mentions.users.at(Number(1) - 1));
            ship = ((s4dmessage.guild).members.cache.random().user);
          }
          segments = 10;
          progress = Math.min(Math.max((Number((subsequenceFromStartLast(ship.id, 16)))) - (Number((subsequenceFromStartLast(user.id, 17)))) / 4, 0), segments * segments);
          if (true) {
            s4dmessage.channel.send({content:String('finding someone')});
            out = '';
            var repeat_end2 = Math.floor(progress / segments) - 1;
            for (var count2 = 0; count2 < repeat_end2; count2++) {
              out = String(out) + '#';
            }
            var repeat_end3 = (segments - Math.floor(progress / segments)) - 1;
            for (var count3 = 0; count3 < repeat_end3; count3++) {
              out = String(out) + '.';
            }
            if (Math.floor(progress / segments) - 1 < 0) {
              out = '<:startoff:994028215842639964>' + String(out);
            } else {
              out = '<:starton:994026992385130556>' + String(out);
            }
            if ((segments - Math.floor(progress / segments)) - 1 < 0) {
              out = String(out) + '<:endon:994028214806650950>';
            } else {
              out = String(out) + '<:endoff:994026988643831860>';
            }
            percent = Math.round(((progress / segments) / segments) * 100);
            var embed = new Discord.MessageEmbed();
               embed.setColor('#009900');
              embed.setTitle(String(([user.username,' X ',ship.username].join(''))))
              if (percent < 25) {
                embed.setDescription(String((['**',percent,'%** ',String((String(out).replaceAll('.', String('<:middleoff:994026990875181168>')))).replaceAll('#', String('<:middleon:994026994931093605>')),' worse than average'].join(''))));
              } else if (percent < 50) {
                embed.setDescription(String((['**',percent,'%** ',String((String(out).replaceAll('.', String('<:middleoff:994026990875181168>')))).replaceAll('#', String('<:middleon:994026994931093605>')),' not very good'].join(''))));
              } else if (percent > 50) {
                embed.setDescription(String((['**',percent,'%** ',String((String(out).replaceAll('.', String('<:middleoff:994026990875181168>')))).replaceAll('#', String('<:middleon:994026994931093605>')),' good'].join(''))));
              } else if (percent > 75) {
                embed.setDescription(String((['**',percent,'%** ',String((String(out).replaceAll('.', String('<:middleoff:994026990875181168>')))).replaceAll('#', String('<:middleon:994026994931093605>')),' great!'].join(''))));
              }
              var JimpImageBlock = 'bases/base.png';
              await jimp.read('bases/base.png', async (err, image) => {
                  if (err) throw err;
                    temp = (image.bitmap.width);
                await image.resize( Number(((image.bitmap.width) * 2 + 40)), Number((image.bitmap.height)))
                var JimpImage2 = await jimp.read(String((user.displayAvatarURL({format:"png"}))));
                    await image.blit( JimpImage2, Number(0), Number(0))
                var JimpImage2 = await jimp.read(String((ship.displayAvatarURL({format:"png"}))));
                    await image.blit( JimpImage2, Number((temp + 40)), Number(0))
                if (percent > 50) {
                  var JimpImage2 = await jimp.read(String('bases/yes.png'));
                      await image.blit( JimpImage2, Number((temp - 16)), Number(32))
                } else if (percent < 50) {
                  var JimpImage2 = await jimp.read(String('bases/no.png'));
                      await image.blit( JimpImage2, Number((temp - 16)), Number(32))
                }
                await image.writeAsync('outputs/ship.png');await s4d.client.channels.cache.get('994108471958044754').send({
                        files: ['outputs/ship.png'],
                        components: [],

                     });
                   s4d.client.channels.cache.get('994108471958044754').messages.fetch({ limit: 1 }).then(async (last_messages_in_channel) => {
                      embed.setImage(String((((last_messages_in_channel.at(1 - 1)).attachments.at(Number(1) - 1)).url)));
                  embed.setTimestamp(new Date());
                  s4dmessage.channel.send({embeds: [embed]});

                });

              });

          }

        break;
        case 'avatar':
              var embed = new Discord.MessageEmbed();
             if ((s4dmessage).mentions.users != null && (s4dmessage).mentions.users.size > 0) {
              embed.setTitle(String((['here is @',((s4dmessage).mentions.users.at(Number(1) - 1)).username,'\'s avatar'].join(''))))
              embed.setImage(String((((s4dmessage).mentions.users.at(Number(1) - 1)).displayAvatarURL({format:"png"}))));
            } else {
              embed.setTitle(String('here is your avatar'))
              embed.setImage(String(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"}))));
            }
            embed.setTimestamp(new Date());
            s4dmessage.channel.send({embeds: [embed]});


        break;
        case 'level':
              user = (s4dmessage.author);
          if (((s4dmessage).mentions.users.size) > 1) {
            user = ((s4dmessage).mentions.users.at(Number(1) - 1));
          }
          temp = leveling.get(String((user.id)));
          var JimpImageBlock = 'bases/base.png';
          await jimp.read('bases/base.png', async (err, image) => {
              if (err) throw err;
                await image.resize( Number(519), Number(31))
            var JimpImage2 = await jimp.read(String('bases/level bar.png'));
                await image.blit( JimpImage2, Number((0 - ((temp[String('exp')]) / Math.pow(2, temp[String('level-mult')])) * 519)), Number(0))
            var JimpImage2 = await jimp.read(String('bases/level background.png'));
                await image.blit( JimpImage2, Number(0), Number(0))
            await image.writeAsync('outputs/level card.png');await s4d.client.channels.cache.get('994108471958044754').send({
                    files: ['outputs/level card.png'],
                    components: [],

                 });
               s4d.client.channels.cache.get('994108471958044754').messages.fetch({ limit: 1 }).then(async (last_messages_in_channel) => {
                  var embed = new Discord.MessageEmbed();
                 embed.setColor('#66cccc');
                embed.setAuthor({name: String((user.tag)), iconURL: String((user.displayAvatarURL({format:"png"})))});
                embed.setTitle(String((['@',user.tag,'\'s level'].join(''))))
                embed.setDescription(String((['exp ',temp[String('exp')],'/',Math.pow(2, temp[String('level-mult')]),'\n','level ',temp[String('level')]].join(''))));
                embed.setThumbnail(String((user.displayAvatarURL({format:"png"}))));
                embed.setImage(String((((last_messages_in_channel.at(1 - 1)).attachments.at(Number(1) - 1)).url)));
                s4dmessage.channel.send({embeds: [embed]});


            });

          });

        break;
        case 'set-level':
              if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            temp = leveling.get(String((((s4dmessage).mentions.users.at(Number(1) - 1)).id)));
            temp[String('level')] = (Number((arguments2[1])))
                leveling.set(String((((s4dmessage).mentions.users.at(Number(1) - 1)).id)), temp);
            s4dmessage.channel.send({content:String((['successfully set the level of ',(s4dmessage).mentions.users.at(Number(1) - 1),' to ',arguments2[1]].join('')))});
          } else {
            s4dmessage.channel.send({content:String('you need manage messages perm to use this')});
          }

        break;
        case 'add-level':
              if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            temp = leveling.get(String((((s4dmessage).mentions.users.at(Number(1) - 1)).id)));
            temp[String('level')] = ((temp[String('level')]) + (Number((arguments2[1]))))
                leveling.set(String((((s4dmessage).mentions.users.at(Number(1) - 1)).id)), temp);
            s4dmessage.channel.send({content:String((['successfully added ',arguments2[1],' levels to ',(s4dmessage).mentions.users.at(Number(1) - 1)].join('')))});
          } else {
            s4dmessage.channel.send({content:String('you need manage messages perm to use this')});
          }

        break;

            /*
            lb here
            */
           case 'transfer-level':
              if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            (s4dmessage.channel).send(String((['do you really want to transfer acount from ',(s4dmessage).mentions.users.at(Number(1) - 1),' to ',(s4dmessage).mentions.users.at(Number(2) - 1),'?'].join('')))).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
             s4d.message = collected.first();
               if (((s4d.reply) || '').startsWith('y' || '')) {
                try{
                          temp = leveling.get(String((((s4dmessage).mentions.users.at(Number(1) - 1)).id)));
                  leveling.set(String((((s4dmessage).mentions.users.at(Number(2) - 1)).id)), temp);
                  s4dmessage.channel.send({content:String((['successfully transferred ',(s4dmessage).mentions.users.at(Number(1) - 1),' to ',(s4dmessage).mentions.users.at(Number(2) - 1)].join('')))});

                    }catch(err){
                          console.log((err));
                  s4dmessage.channel.send({content:String(('transfer failed with error ' + String(err)))});

                    };
                    } else {
                s4dmessage.channel.send({content:String('canceled')});
              }

             s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('took to long to reply')});
             });
            })
          } else {
            s4dmessage.channel.send({content:String('you need manage messages perm to use this')});
          }

        break;case 'lb':
            case 'leaderboard':
              db = leveling.all();
          lb = [];
          db.splice(0, 1);
          db.splice(0, 1);
          var j_end = db.length;
          var j_inc = 1;
          if (1 > j_end) {
            j_inc = -j_inc;
          }
          for (j = 1; j_inc >= 0 ? j <= j_end : j >= j_end; j += j_inc) {
            var i_end = db.length - j;
            var i_inc = 1;
            if (1 > i_end) {
              i_inc = -i_inc;
            }
            for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
              if (db[((i + 1) - 1)] == null || db[(i - 1)] == null) {
                break;
              }
              object = ((db[(i - 1)])[String('data')]);
              object_two = ((db[((i + 1) - 1)])[String('data')]);
              if ((object[String('level')]) < (object_two[String('level')])) {
                temp = db[((i + 1) - 1)];
                db[((i + 1) - 1)] = db[(i - 1)];
                db[(i - 1)] = temp;
              }
            }
          }
          j = 1;
          var repeat_end4 = Math.ceil(db.length / 10);
          for (var count5 = 0; count5 < repeat_end4; count5++) {
            temp = '';
            i = 1;
            for (var count4 = 0; count4 < 10; count4++) {
              if (db[((i + (j - 1) * 10) - 1)] == null) {
                break;
              }
              object = (db[((i + (j - 1) * 10) - 1)]["data"]);
              temp = [temp,'\n',((i + (j - 1) * 10) - 1) + 1,'. <@',db[((i + (j - 1) * 10) - 1)]['key'],'> | `level ',object[String('level')],'` | ',object[String('exp')],' exp'].join('');
              i = (typeof i === 'number' ? i : 0) + 1;
            }
            lb.push(temp);
            j = (typeof j === 'number' ? j : 0) + 1;
          }
          lb_page = 1;
          var embed = new Discord.MessageEmbed();
             embed.setColor('#33ccff');
            embed.setTitle(String('level leaderboard'))
            embed.setAuthor({name: String(((s4dmessage.author).tag)), iconURL: String(((s4dmessage.author).displayAvatarURL({format:"png"})))});
            embed.setDescription(String((lb[(lb_page - 1)])));
            embed.setTimestamp(new Date());
            if (lb.length > 1) {
              menu = (new MessageActionRow()
              .addComponents(  new MessageButton()
                .setCustomId('left')
                .setLabel('<')
                .setDisabled(true)
                .setStyle(('PRIMARY')),
                new MessageButton()
                .setCustomId('how')
                .setLabel(([lb_page,'/',lb.length].join('')))
                .setDisabled(true)
                .setStyle(('SECONDARY')),
                new MessageButton()
                .setCustomId('right')
                .setLabel('>')
                .setDisabled(false)
                .setStyle(('PRIMARY')),
              ));
            } else {
              menu = (new MessageActionRow()
              .addComponents(  new MessageButton()
                .setCustomId('left')
                .setLabel('<')
                .setDisabled(true)
                .setStyle(('PRIMARY')),
                new MessageButton()
                .setCustomId('how')
                .setLabel(([lb_page,'/',lb.length].join('')))
                .setDisabled(true)
                .setStyle(('SECONDARY')),
                new MessageButton()
                .setCustomId('right')
                .setLabel('>')
                .setDisabled(true)
                .setStyle(('PRIMARY')),
              ));
            }
            (s4dmessage.channel).send({embeds: [embed],components:[menu]}).then(async m=>{
                              let collector = m.createMessageComponentCollector({filter: i=>i.user.id === (s4dmessage.member).id ,time:60000});
                  collector.on('collect',async i=>{
                        if ((i.customId) == 'left') {
                  lb_page = (typeof lb_page === 'number' ? lb_page : 0) + -1;
                  if (lb_page < 1) {
                    lb_page = 1;
                    var embed = new Discord.MessageEmbed();
                       embed.setColor('#33ccff');
                      embed.setTitle(String('level leaderboard'))
                      embed.setAuthor({name: String(((s4dmessage.author).tag)), iconURL: String(((s4dmessage.author).displayAvatarURL({format:"png"})))});
                      embed.setDescription(String((lb[(lb_page - 1)])));
                      embed.setTimestamp(new Date());
                      await i.update({embeds: [embed],components:[(new MessageActionRow()
                      .addComponents(  new MessageButton()
                        .setCustomId('left')
                        .setLabel('<')
                        .setDisabled(true)
                        .setStyle(('PRIMARY')),
                        new MessageButton()
                        .setCustomId('how')
                        .setLabel(([lb_page,'/',lb.length].join('')))
                        .setDisabled(true)
                        .setStyle(('SECONDARY')),
                        new MessageButton()
                        .setCustomId('right')
                        .setLabel('>')
                        .setDisabled(true)
                        .setStyle(('PRIMARY')),
                      ))]}).then(async m=>{

                                  });

                  } else {
                    var embed = new Discord.MessageEmbed();
                       embed.setColor('#33ccff');
                      embed.setTitle(String('level leaderboard'))
                      embed.setAuthor({name: String(((s4dmessage.author).tag)), iconURL: String(((s4dmessage.author).displayAvatarURL({format:"png"})))});
                      embed.setDescription(String((lb[(lb_page - 1)])));
                      embed.setTimestamp(new Date());
                      await i.update({embeds: [embed],components:[(new MessageActionRow()
                      .addComponents(  new MessageButton()
                        .setCustomId('left')
                        .setLabel('<')
                        .setDisabled(false)
                        .setStyle(('PRIMARY')),
                        new MessageButton()
                        .setCustomId('how')
                        .setLabel(([lb_page,'/',lb.length].join('')))
                        .setDisabled(true)
                        .setStyle(('SECONDARY')),
                        new MessageButton()
                        .setCustomId('right')
                        .setLabel('>')
                        .setDisabled(false)
                        .setStyle(('PRIMARY')),
                      ))]}).then(async m=>{

                                  });

                  }
                } else if ((i.customId) == 'how') {
                  await i.reply({content:'how?!',ephemeral:false});
                } else if ((i.customId) == 'right') {
                  lb_page = (typeof lb_page === 'number' ? lb_page : 0) + 1;
                  if (lb_page > lb.length) {
                    lb_page = lb.length;
                    var embed = new Discord.MessageEmbed();
                       embed.setColor('#33ccff');
                      embed.setTitle(String('level leaderboard'))
                      embed.setAuthor({name: String(((s4dmessage.author).tag)), iconURL: String(((s4dmessage.author).displayAvatarURL({format:"png"})))});
                      embed.setDescription(String((lb[(lb_page - 1)])));
                      embed.setTimestamp(new Date());
                      await i.update({embeds: [embed],components:[(new MessageActionRow()
                      .addComponents(  new MessageButton()
                        .setCustomId('left')
                        .setLabel('<')
                        .setDisabled(false)
                        .setStyle(('PRIMARY')),
                        new MessageButton()
                        .setCustomId('how')
                        .setLabel(([lb_page,'/',lb.length].join('')))
                        .setDisabled(true)
                        .setStyle(('SECONDARY')),
                        new MessageButton()
                        .setCustomId('right')
                        .setLabel('>')
                        .setDisabled(true)
                        .setStyle(('PRIMARY')),
                      ))]}).then(async m=>{

                                  });

                  } else {
                    var embed = new Discord.MessageEmbed();
                       embed.setColor('#33ccff');
                      embed.setTitle(String('level leaderboard'))
                      embed.setAuthor({name: String(((s4dmessage.author).tag)), iconURL: String(((s4dmessage.author).displayAvatarURL({format:"png"})))});
                      embed.setDescription(String((lb[(lb_page - 1)])));
                      embed.setTimestamp(new Date());
                      await i.update({embeds: [embed],components:[(new MessageActionRow()
                      .addComponents(  new MessageButton()
                        .setCustomId('left')
                        .setLabel('<')
                        .setDisabled(false)
                        .setStyle(('PRIMARY')),
                        new MessageButton()
                        .setCustomId('how')
                        .setLabel(([lb_page,'/',lb.length].join('')))
                        .setDisabled(true)
                        .setStyle(('SECONDARY')),
                        new MessageButton()
                        .setCustomId('right')
                        .setLabel('>')
                        .setDisabled(false)
                        .setStyle(('PRIMARY')),
                      ))]}).then(async m=>{

                                  });

                  }
                }

                  })

                        });


        break;
        case 'no-level-channels':
              if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
            list = leveling.get(String('no-message'));
            if (arguments2[0] == 'add') {
              list.push((((s4dmessage).mentions.channels.at(Number(1) - 1)).id));
              s4dmessage.channel.send({content:String(('added ' + String((s4dmessage).mentions.channels.at(Number(1) - 1))))});
            } else if (arguments2[0] == 'remove') {
              list.splice(((list.indexOf(((s4dmessage).mentions.channels.at(Number(1) - 1)).id) + 1) - 1), 1);
              s4dmessage.channel.send({content:String(('removed ' + String((s4dmessage).mentions.channels.at(Number(1) - 1))))});
            }
            leveling.set(String('no-message'), list);
          } else {
            s4dmessage.channel.send({content:String('you need manage channels perm to use this')});
          }

        break;
        case 'level-roles':
              if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
            list = leveling.get(String('roles'));
            if (arguments2[0] == 'add') {
              list[String((arguments2[2]))] = (((s4dmessage).mentions.roles.at(Number(1) - 1)).id)
                  s4dmessage.channel.send({content:String(('added ' + String((s4dmessage).mentions.roles.at(Number(1) - 1))))});
            } else if (arguments2[0] == 'remove') {
              list[String((arguments2[2]))] = null
                  s4dmessage.channel.send({content:String(('removed ' + String((s4dmessage).mentions.roles.at(Number(1) - 1))))});
            }
            leveling.set(String('roles'), list);
          } else {
            s4dmessage.channel.send({content:String('you need manage roles perm to use this')});
          }

        break;
        case 'wanted':
              if (!((s4dmessage).mentions.users != null && (s4dmessage).mentions.users.size > 0)) {
            s4dmessage.channel.send({content:String('you need to mention someone!')});
            return
          }
          var JimpImageBlock = ('https://api.popcat.xyz/wanted?image=' + String(((s4dmessage).mentions.users.at(Number(1) - 1)).displayAvatarURL({format:"png"})));
          await jimp.read(('https://api.popcat.xyz/wanted?image=' + String(((s4dmessage).mentions.users.at(Number(1) - 1)).displayAvatarURL({format:"png"}))), async (err, image) => {
              if (err) throw err;
                await image.writeAsync('outputs/wanted.png');await (s4dmessage.channel).send({
                    files: ['outputs/wanted.png'],
                    components: [],

                 });

          });

        break;
        case 'showerthoughts':
              https.get('https://api.popcat.xyz/showerthoughts', async resp => {
          let data2 = "";
          resp.on("data",async chunk => {
          data2 += chunk;
          });
          resp.on("end",async () => {
          let data = JSON.parse(data2)
             s4dmessage.channel.send({content:String((['"',data.result,'"','\n',' — ',data.author].join('')))});

          });
          })
          .on("error",async err => {
          console.log("Error: " + err.message);
          });

        break;
        case 'kelp':
              s4dmessage.reply({content:String('<:kelp:1007174503895400448>'), allowedMentions: {
                  repliedUser: false
              }});

        break;
        case '8ball':
              https.get('https://api.popcat.xyz/8ball', async resp => {
          let data2 = "";
          resp.on("data",async chunk => {
          data2 += chunk;
          });
          resp.on("end",async () => {
          let data = JSON.parse(data2)
             s4dmessage.channel.send({content:String((data.answer))});

          });
          })
          .on("error",async err => {
          console.log("Error: " + err.message);
          });

        break;
        case 'facts':
              if (arguments2.join(' ') == null) {
            s4dmessage.channel.send({content:String('you need to put text to use!')});
            return
          }
          var JimpImageBlock = ('https://api.popcat.xyz/facts?text=' + String(arguments2.join(' ')));
          await jimp.read(('https://api.popcat.xyz/facts?text=' + String(arguments2.join(' '))), async (err, image) => {
              if (err) throw err;
                await image.writeAsync('outputs/facts.png');await (s4dmessage.channel).send({
                    files: ['outputs/facts.png'],
                    components: [],

                 });

          });

        break;

          };

        }catch(err){
              console.log((err));
      s4dmessage.channel.send({content:String((['error!','\n',err].join('')))});
      s4d.client.channels.cache.get('983516228691824641').send({content:String((err))});

        };
        }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage).type == "REPLY") {
    if ((((s4dmessage).mentions.repliedUser).id) == '882556092893245501') {
      if ((((s4dmessage.content) || '').startsWith('stfu' || '')) || (((s4dmessage.content) || '').startsWith('shut' || ''))) {
        s4dmessage.reply({content:String('no u'), allowedMentions: {
                repliedUser: false
            }});
        return
      }
      https.get((['https://api.popcat.xyz/chatbot?msg=',s4dmessage.content,'&owner=godslayerakp&botname=arcade tools'].join('')), async resp => {
      let data2 = "";
      resp.on("data",async chunk => {
      data2 += chunk;
      });
      resp.on("end",async () => {
      let data = JSON.parse(data2)
         s4dmessage.reply({content:String((data.response)), allowedMentions: {
                repliedUser: false
            }});

      });
      })
      .on("error",async err => {
      console.log("Error: " + err.message);
      });
    }
  }
  if (!((s4dmessage.author).bot)) {
    if (!(leveling.get(String('no-message')).includes(((s4dmessage.channel).id)))) {
      if (!leveling.has(String(((s4dmessage.author).id)))) {
        temp = (new Object());
        temp[String('message')] = (s4dmessage.content)
            temp[String('timestamp')] = (s4dmessage.createdTimestamp)
            temp[String('level-mult')] = 7
            temp[String('exp')] = 0
            temp[String('level')] = 1
            leveling.set(String(((s4dmessage.author).id)), temp);
        return
      }
      temp = leveling.get(String(((s4dmessage.author).id)));
      if ((temp[String('message')]) == (s4dmessage.content)) {
        return
      }
      temp[String('message')] = (s4dmessage.content)
          temp[String('timestamp')] = (s4dmessage.createdTimestamp)
          temp[String('exp')] = ((temp[String('exp')]) + 1)
          if ((temp[String('exp')]) > Math.pow(2, temp[String('level-mult')])) {
        s4dmessage.channel.send({content:String((['congrats ',(s4dmessage.author).tag,' you are now level ',(temp[String('level')]) + 1].join('')))});
        temp[String('level-mult')] = ((temp[String('level-mult')]) + 1)
            temp[String('level')] = ((temp[String('level')]) + 1)
            temp[String('exp')] = 0
            }
      leveling.set(String(((s4dmessage.author).id)), temp);
      THIS_IS_SO_FUCKING_STUPID = leveling.get(String('roles'));
      if ((THIS_IS_SO_FUCKING_STUPID[String((temp[String('level')]))]) != null) {
        (s4dmessage.member).roles.add(((s4dmessage.guild).roles.cache.get((THIS_IS_SO_FUCKING_STUPID[String((temp[String('level')]))]))));
      }
    }
  }

});

                    return s4d
                    })();