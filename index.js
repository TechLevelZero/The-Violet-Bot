/* eslint consistent-return: 0, no-console: 0 */

/*
tessabot INDEV by Ben Hunter
*/

const Discord = require('discord.js');

const config = require('./config.json');

const fs = require('fs');

const client = new Discord.Client();
// files
const welcomemsg = fs.readFileSync('txt_files/welcome message.txt', 'utf8');
const info = fs.readFileSync('logs/info.log', 'utf8');
const log4js = require('log4js');

// function ownerid() {
//  return '376878844528820227';
// }
function khakiid() {
  return '376924050884395008';
}
function dodgerblueid() {
  return '376924622857306123';
}
function cyanid() {
  return '376925446895566849';
}
function deeppinkid() {
  return '376925851599503360';
}
function limeid() {
  return '376926183998357504';
}
function lemonchiffonid() {
  return '376926635418714113';
}
function blueid() {
  return '376926790150520842';
}
function lightpurpleid() {
  return '376928139852382220';
}

log4js.configure({
  appenders: {
    multi: {
      type: 'multiFile', base: 'logs/', property: 'categoryName', extension: '.log',
    },
  },
  categories: {
    default: { appenders: ['multi'], level: 'info' },
  },
});

const errorLogger = log4js.getLogger('fatal');
const infoLogger = log4js.getLogger('info');

client.login(config.token);

client.on('error', console.error);

client.on('error', (error) => {
  errorLogger.fatal(`${error}`);
});

client.on('ready', () => {
  client.user.setActivity('A Broken Record', { type: 'LISTENING' });
  console.log(`Logged in as ${client.user.username}`);
  console.log(info);
  console.log('ARCHIVE LOADED');
});

client.on('guildMemberAdd', (member) => {
  console.log(`${member.user.tag} (${member.id}) has joined ${member.guild.name}`);
  infoLogger.info(`ARCHIVE: ${member.user.tag} (${member.id}) has joined ${member.guild.name}`);
  member.guild.channels.find('name', 'activity').send(`${member}`);
});

client.on('guildMemberAdd', (embedwelcome) => {
  const embed = new Discord.MessageEmbed()
    .setColor(0x9D7BBC)
    .setThumbnail(embedwelcome.guild.iconURL())
    .setTitle('**Welcome to The violet!**')
    .setDescription(welcomemsg);
  embedwelcome.guild.channels.find('name', 'activity').send({ embed });
});

client.on('message', (message) => {
  if (message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.content.indexOf(config.prefix) !== 0) return;

  // colour stuff

  if (command === 'khaki') {
    if (message.member.roles.has(khakiid())) {
      message.channel.send('You have khaki');
      console.log(`${message.author.tag} had the khaki role already`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} had the lime role already`);
    } else {
      message.member.addRole(khakiid());
      message.member.removeRole(dodgerblueid());
      message.member.removeRole(cyanid());
      message.member.removeRole(deeppinkid());
      message.member.removeRole(limeid());
      message.member.removeRole(lemonchiffonid());
      message.member.removeRole(blueid());
      message.member.removeRole(lightpurpleid());
      message.channel.send(`Khaki is now your colour ${message.author}`);
      console.log(`${message.author.tag} now has the Khaki role now`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} has the Khaki role now`);
    }
  }

  if (command === 'dodgerblue') {
    if (message.member.roles.has(dodgerblueid())) {
      message.channel.send('You have dodger blue');
      console.log(`${message.author.tag} had the dodger blue role already`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} had the dodger blue role already`);
    } else {
      message.member.addRole(dodgerblueid());
      message.member.removeRole(khakiid());
      message.member.removeRole(cyanid());
      message.member.removeRole(deeppinkid());
      message.member.removeRole(limeid());
      message.member.removeRole(lemonchiffonid());
      message.member.removeRole(blueid());
      message.member.removeRole(lightpurpleid());
      message.channel.send(`Dodger blue is now your colour ${message.author}`);
      console.log(`${message.author.tag} now has the dodger blue role now`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} has the dodger blue role now`);
    }
  }

  if (command === 'cyan') {
    if (message.member.roles.has(cyanid())) {
      message.channel.send('You have cyan');
      console.log(`${message.author.tag} had the cyan role already`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} had the cyan role already`);
    } else {
      message.member.addRole(cyanid());
      message.member.removeRole(khakiid());
      message.member.removeRole(dodgerblueid());
      message.member.removeRole(deeppinkid());
      message.member.removeRole(limeid());
      message.member.removeRole(lemonchiffonid());
      message.member.removeRole(blueid());
      message.member.removeRole(lightpurpleid());
      message.channel.send(`Cyan is now your colour ${message.author}`);
      console.log(`${message.author.tag} now has the cyan role now`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} has the cyan role now`);
    }
  }

  if (command === 'deeppink') {
    if (message.member.roles.has(deeppinkid())) {
      message.channel.send('You have deep pink');
      console.log(`${message.author.tag} had the deep pink role already`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} had the deep pink role already`);
    } else {
      message.member.addRole(deeppinkid());
      message.member.removeRole(khakiid());
      message.member.removeRole(dodgerblueid());
      message.member.removeRole(cyanid());
      message.member.removeRole(limeid());
      message.member.removeRole(lemonchiffonid());
      message.member.removeRole(blueid());
      message.member.removeRole(lightpurpleid());
      message.channel.send(`Deep pink is now your colour ${message.author}`);
      console.log(`${message.author.tag} now has the deep pink role now`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} has the deep pink role now`);
    }
  }

  if (command === 'lime') {
    if (message.member.roles.has(limeid())) {
      message.channel.send('You have lime');
      console.log(`${message.author.tag} had the lime role already`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} had the lime role already`);
    } else {
      message.member.addRole(limeid());
      message.member.removeRole(khakiid());
      message.member.removeRole(dodgerblueid());
      message.member.removeRole(cyanid());
      message.member.removeRole(deeppinkid());
      message.member.removeRole(lemonchiffonid());
      message.member.removeRole(blueid());
      message.member.removeRole(lightpurpleid());
      message.channel.send(`Lime is now your colour ${message.author}`);
      console.log(`${message.author.tag} now has the lime role now`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} has the lime role now`);
    }
  }

  if (command === 'lemon') {
    if (message.member.roles.has(lemonchiffonid())) {
      message.channel.send('You have lemon chiffon');
      console.log(`${message.author.tag} had the lemon chiffon role already`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} had the lemon chiffon role already`);
    } else {
      message.member.addRole(lemonchiffonid());
      message.member.removeRole(khakiid());
      message.member.removeRole(dodgerblueid());
      message.member.removeRole(cyanid());
      message.member.removeRole(limeid());
      message.member.removeRole(deeppinkid());
      message.member.removeRole(blueid());
      message.member.removeRole(lightpurpleid());
      message.channel.send(`Lemon chiffon is now your colour ${message.author}`);
      console.log(`${message.author.tag} now has the lemon chiffon role now`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} has the lemon chiffon role now`);
    }
  }

  if (command === 'blue') {
    if (message.member.roles.has(limeid())) {
      message.channel.send('You have blue');
      console.log(`${message.author.tag} had the blue role already`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} had the blue role already`);
    } else {
      message.member.addRole(limeid());
      message.member.removeRole(khakiid());
      message.member.removeRole(dodgerblueid());
      message.member.removeRole(cyanid());
      message.member.removeRole(deeppinkid());
      message.member.removeRole(lemonchiffonid());
      message.member.removeRole(blueid());
      message.member.removeRole(lightpurpleid());
      message.channel.send(`Lime is now your colour ${message.author}`);
      console.log(`${message.author.tag} now has the blue role now`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} has the blue role now`);
    }
  }

  if (command === 'blue') {
    if (message.member.roles.has(limeid())) {
      message.channel.send('You have blue');
      console.log(`${message.author.tag} had the blue role already`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} had the blue role already`);
    } else {
      message.member.addRole(blueid());
      message.member.removeRole(khakiid());
      message.member.removeRole(dodgerblueid());
      message.member.removeRole(cyanid());
      message.member.removeRole(deeppinkid());
      message.member.removeRole(lemonchiffonid());
      message.member.removeRole(limeid());
      message.member.removeRole(lightpurpleid());
      message.channel.send(`Blue is now your colour ${message.author}`);
      console.log(`${message.author.tag} now has the blue role now`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} has the blue role now`);
    }
  }

  if (command === 'lightpurple') {
    if (message.member.roles.has(lightpurpleid())) {
      message.channel.send('You have light purple');
      console.log(`${message.author.tag} had the light purple role already`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} had the light purple role already`);
    } else {
      message.member.addRole(lightpurpleid());
      message.member.removeRole(khakiid());
      message.member.removeRole(dodgerblueid());
      message.member.removeRole(cyanid());
      message.member.removeRole(deeppinkid());
      message.member.removeRole(lemonchiffonid());
      message.member.removeRole(limeid());
      message.member.removeRole(blueid());
      message.channel.send(`Light purple is now your colour ${message.author}`);
      console.log(`${message.author.tag} now has the light purple role now`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} has the light purple role now`);
    }
  }


  if (command === 'removecolour') {
    if
    (message.member.roles.has(khakiid())) {
      message.member.removeRole(khakiid());
      message.channel.send(`Khaki has been removed ${message.author}`);
      console.log(`${message.author.tag} Has removed khaki`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} Has removed khaki`);
    } else if
    (message.member.roles.has(dodgerblueid())) {
      message.member.removeRole(dodgerblueid());
      message.channel.send(`Dodger blue has been removed ${message.author}`);
      console.log(`${message.author.tag} Has removed dodger blue`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} Has removed dodger blue`);
    } else if
    (message.member.roles.has(cyanid())) {
      message.member.removeRole(cyanid());
      message.channel.send(`Cyan has been removed ${message.author}`);
      console.log(`${message.author.tag} Has removed cyan`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} Has removed cyan`);
    } else if
    (message.member.roles.has(deeppinkid())) {
      message.member.removeRole(deeppinkid());
      message.channel.send(`Deep pink has been removed ${message.author}`);
      console.log(`${message.author.tag} Have removed deep pink`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} Has removed deep pink`);
    } else if
    (message.member.roles.has(limeid())) {
      message.member.removeRole(limeid());
      message.channel.send(`Lime has been removed ${message.author}`);
      console.log(`${message.author.tag} Have removed lime`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} Has removed lime`);
    } else if
    (message.member.roles.has(lemonchiffonid())) {
      message.member.removeRole(lemonchiffonid());
      message.channel.send(`Lemon chiffon has been removed ${message.author}`);
      console.log(`${message.author.tag} Have removed lemon chiffon`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} Has removed lemon chiffon`);
    } else if
    (message.member.roles.has(blueid())) {
      message.member.removeRole(blueid());
      message.channel.send(`Blue has been removed ${message.author}`);
      console.log(`${message.author.tag} Have removed blue`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} Has removed blue`);
    } else if
    (message.member.roles.has(lightpurpleid())) {
      message.member.removeRole(lightpurpleid());
      message.channel.send(`Light purple has been removed ${message.author}`);
      console.log(`${message.author.tag} Have removed light purple`);
      infoLogger.info(`ARCHIVE: ${message.author.tag} Has removed light purple`);
    } else {
      message.channel.send(`You dont have a colour asignd ${message.author}`);
    }
  }

  // End of colour stuff

  if (command === 'serverinfo') {
    const embed = new Discord.MessageEmbed()
      .setColor(0x9D7BBC)
      .setDescription(`**__${message.guild.name} Details__**`)
      .setThumbnail(message.guild.iconURL())
      .addField('Members', `${message.guild.memberCount - message.guild.members.filter(member => member.user.bot).size} Members`)
      .addField('Bots', `${message.guild.members.filter(member => member.user.bot).size} Bots`)
      .addField('Channels', `${message.guild.channels.filter(chan => chan.type === 'voice').size} voice / ${message.guild.channels.filter(chan => chan.type === 'text').size} text`)
      .addField('Owner', '@doctorzelda75')
      .addField('Co-Owners', '@DJ Beep Boop, @Liv ☾')
      .addField('Admins', '@${message.author}, @Papi Chulo, @ShaunaSmells')
      .addField('Mods', '@philosophicalMoose, @SCಠಠP');
    message.channel.send({ embed });
  }

  if (command === 'ping') {
    message.channel.send(`Ping is ${Math.round(client.ping)}ms`);
    infoLogger.info(`Ping was ${Math.round(client.ping)}ms`);
  }

  if (command === 'welcomeembedtest') {
    const embed = new Discord.MessageEmbed()
      .setColor(0x9D7BBC)
      .setThumbnail(message.guild.iconURL())
      .setTitle('**Welcome to The Violet!**')
      .setDescription(welcomemsg);
    message.channel.send({ embed });
  }

  if (command === 'patreon') {
    message.channel.send('Support the bots @-----> <https://www.patreon.com/benhunter>');
  }
});
