irc = require('irc');
var phrase1 = "don't care";
var phrase2 = "don't give a fuck";
var irc_server = "irc.freenode.net";
var channel = "#modilabs";
var nick = "honey_badger";


function random_say(one,two) {
    var rand = Math.random();
    if (rand > 0.5) {
        return one;
    }else{
        return two;
    }
};

var bot = new irc.Client(irc_server, nick, {
    debug:false,
    channels:[channel],
    realName: "James Joyce",
});

bot.addListener('error', function(message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message', function (from, to, message) {

    if (message.match(/honey_badger/)) {
        bot.say(channel,random_say(phrase1, phrase2));
    }

    if (to==nick) {
        bot.say(from,random_say(phrase1,phrase2));
    }

    if (message.match(/^attack/)) {
        var temp_nick = message.split("attack ")[1]
        bot.say(channel, "Tears "+temp_nick+"'s intestine out, yummy")
    }
});

