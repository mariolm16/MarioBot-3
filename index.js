var Discord = require("discord.io");
var logger = require("winston");
const fetch = require("axios");
const DISCORD_TOKEN = process.env['DISCORD_TOKEN']
const express = require("express")

const server = express()

// Keep server alive
server.all("/", (req, res) => {
  res.send("MarioBot is awake")
})

function dontSleep() {
  server.listen(3000, () => {
    console.log('MarioBot is ready')
  })
}


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true,
});
logger.level = "debug";

// Initialize Discord Bot
var bot = new Discord.Client({
  token: DISCORD_TOKEN,
  autorun: true,
});

bot.on("ready", (users) => {
  logger.info("Connected");
  logger.info("Logged in as: TabulaRasa");
  logger.info(bot.username + " - (" + bot.id + ")");
   bot.sendMessage({
      to: '902285594384797759',
      message: "ok back"
    });
});


const bullyMessages = [
  "ur a bitch",
  "post physique",
  "youre fat tho ",
  "manlet alrt ",
  "nintendrone moment ",
  "mind your business ",
  "what makes you think that is okay",
  "tell me your favorite avenger moment",
  "what the fucvk si wring with you ",
  "lets go charles !! https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.entoin.com%2Fimages%2Fac46.jpg&f=1&nofb=1",
  "deez",
  "prove it",
  "fak check",
  "you suck at smash just buy an ethernet cord",
  "remmber not to leave yur cat at the gas station",
  "only white mosnter",
  "beef lean patty will never notice you",
  "did you learn that on reddit",
  "curious you simp a game series youve never played",
  "looking good jonker",
  "i will beat off to yuour fursona",
  "your a reaper main thio",
  "what is on the top of your head youre bald",
  "did you hear that on reddit",
  "truly if you were right, then God would be on your side",
  "someone got get charles",
  "charles have you ever been bullied"
];

let sexWarSubstrings = [
  "crystals",
  "rocks",
  "sex",
  "war",
  "crystal",
  "rock",
  "unhinged",
  "sad",
  "gender"
];

const bullyGifs = [
  "https://media3.giphy.com/media/dCF8T5wk5HJAvPmVEp/200w.webp?cid=ecf05e4747mrww2p1cknmacr3cl6out1ah3rla6fqpexw9xi&rid=200w.webp&ct=g",
  "https://giphy.com/gifs/bostonuprising-bostonup-boston-uprising-uprisin-Wplu4Xfda17AMjJ8SK",
  "https://giphy.com/gifs/persona-pq-akihiko-HBstg9X7t1Lpe",
  "https://media.giphy.com/media/LVFI2mSmR7SdG/giphy.gif",
  "https://media.giphy.com/media/cEYFeDKVPTmRgIG9fmo/giphy.gif",
  "https://media.giphy.com/media/F5mrqRvhkfWxO/giphy.gif",
  "https://media.giphy.com/media/QHjUiL2bCCQGQ/giphy.gif",
  "https://media.giphy.com/media/8EzqYFdwMSzPa/giphy.gif",
  "https://media.giphy.com/media/PkcU5iRxBUFi0kqRQc/giphy.gif",
  "https://media.giphy.com/media/13Al2Pm566BpVm/giphy.gif",
  " https://tenor.com/byGBC.gif",
  "https://tenor.com/bmqo8.gif",
  "https://tenor.com/bmhNE.gif",
  "https://media.giphy.com/media/26xBIjtp7Nhupfc2Y/giphy.gif",
  "https://media.giphy.com/media/AMJL5dMqqxNL2/giphy.gif",
  "https://media.giphy.com/media/cKsXjwNQxtVncNBTey/giphy.gif",
];

const jonkerLines = [
  "....charles......",
  "The only sensible way to live in this world is without rules",
  "Smile, because it confuses people. Smile, because it’s easier than explaining what is killing you inside",
  "They need you right now, but when they don’t, they’ll cast you out like a leper!",
  "We stopped checking for monsters under our bed, when we realized they were inside us.",
  "Why so serious?",
  "Why so serious?",
  "See I’m a man of simple taste. I like things such as gunpowder…dynamite and…gasoline!",
  "I’m not political. I’m just trying to make people laugh.",
  "I used to think that my life was a tragedy. But now I realize, it’s a comedy.",
  "It’s funny, when I was a little boy, and told people I was going to be a comedian, everyone laughed at me. Well, no one’s laughing now.",
  "I know the voices in my head aren’t real, but sometimes their ideas are absolutely awesome.",
  "For my whole life, I didn’t know if I even really existed. But I do, and people are starting to notice.",
  "Do I look like I’m joking?",
  "’m not exactly sure what happened. Sometimes I remember it one way, sometimes another. If I’m going to have a past, I prefer it to be multiple choice!",
  "Batman… Batman… Can somebody tell me what kind of a world we live in, where a man dressed up as a bat gets all of my press? This town needs an enema!",
  "Oh, what the heck, I’ll laugh anyway. HA HA HA HA HA HAA!",
  "You don’t listen, do you? You just ask the same questions every week. ‘How’s your job?’ ‘Are you having any negative thoughts?’ All I have are negative thoughts.",
  "The worst part of having a mental illness is people expect you to behave as if you don’t",
];

jonkerGifs = [
  "https://media.giphy.com/media/ZCU3YxmmD8lh6savbB/giphy.gif",
  "https://media.giphy.com/media/F0A48Q2wFjE7S/giphy.gif",
  "https://media.giphy.com/media/J5jiSSrEkV3Kd8iOwb/giphy.gif",
  "https://media.giphy.com/media/k75ngU7xpje0M/giphy.gif",
  "https://media.giphy.com/media/A7ZbCuv0fJ0POGucwV/giphy.gif",
  "https://media.giphy.com/media/yOt4iUfeWtk88/giphy.gif",
  "https://media.giphy.com/media/B7M1hhOdSd4iY/giphy.gif",
  "https://media.giphy.com/media/KZd26L2o8QXtK/giphy.gif",
  "https://media.giphy.com/media/3NeRncMrUNb8astzVy/giphy.gif",
  "https://media.giphy.com/media/2gVZiHtaYKJXvhKvuN/giphy.gif",
  "https://media.giphy.com/media/ICa9W0DbMZbSInIPGO/giphy.gif",
  "https://media.giphy.com/media/3o85xJ0EvZg6ZiZLd6/giphy.gif",
  "https://media.giphy.com/media/2R78MsGSola12/giphy.gif",
  "https://media.giphy.com/media/GYN08CHYRiKhG/giphy.gif",
  "https://media.giphy.com/media/936sKqgL8W4O4/giphy.gif",
  "https://media.giphy.com/media/3ds2v3Cs6MBoY/giphy.gif",
  "https://media.giphy.com/media/eJFWFRCD0Bfl8jqabR/giphy-downsized-large.gif",
  "https://media.giphy.com/media/YAOF1Wu8vBmxJiUq2x/giphy.gif",
];

crystalQueries = [
  "i can sense them around me",
  "maybe we can be allies in this war",
  "and how does that make you feel?",
  "is there anything you can do to stop the curse?",
  "why do good fellas get involed with sex war",
  "simply become a sigma male",
  "why dont you get your own crystals, grow your power, become unstoppable",
  "this is the last straw...",
  "am hero",
  "maybe we can combine all of our boulders, and finally get rid of these witches",
  "drown her cat in the potion she is brewoing",
  "i cant take this antymotre...",
  "https://media1.giphy.com/media/JstGaObAteS5KldQzH/200w.webp?cid=ecf05e47vcbss1pc51sxrykaiosp0uewzexc7tkz82uh8e0h&rid=200w.webp&ct=g",
  "https://media3.giphy.com/media/D5H2pksUeW6Va/200w.webp?cid=ecf05e47vcbss1pc51sxrykaiosp0uewzexc7tkz82uh8e0h&rid=200w.webp&ct=g",
  "https://giphy.com/gifs/cartoonnetwork-steven-universe-cartoon-network-future-l2GSIsUiGhIDMX99nN",
  "https://giphy.com/gifs/steven-universe-01x01-gem-glow-xTiTnl0lT3RPgTeMkE",
  "https://giphy.com/gifs/steven-universe-hahaha-gif-qkWsZIQUJ1Yyc",
  "have you ever had your load stack crushed by an amythist",
  "why are you doing this to your self",
  "why do they treeat us like this....",
  "i just wanted to help",
  "Mass Effect is a great game",
  "what have I become",
  "dug too deep int to crsyrtal",
  "why do they fgeel they can do trhis to us? ...",
  "!danger",
  "what would charles do in this siutation?",
  "I wish she would call me....",
  "Charles.....help mods please anyone",
];

const getCrystal = () => {
  const randomRockMessages =
    crystalQueries[Math.floor(Math.random() * crystalQueries.length)];
  return randomRockMessages;
};

const getJocker = () => {
  const randomJonckerMessages =
    jonkerLines[Math.floor(Math.random() * jonkerLines.length)];
  const randomJonckerGifs =
    jonkerGifs[Math.floor(Math.random() * jonkerGifs.length)];
  return randomJonckerMessages + "" + randomJonckerGifs;
};

const getBully = () => {
  const randomBullyMessages =
    bullyMessages[Math.floor(Math.random() * bullyMessages.length)];
  const randomBullyGifs =
    bullyGifs[Math.floor(Math.random() * jonkerGifs.length)];
  return randomBullyMessages + randomBullyGifs;
};

bot.on("voiceStateUpdate", (channel
) => {
// RR GENERAL CHAT 934806714908303410
// TS GENERAL CHAT 902285594384797759
  bot.sendMessage({
      to: '902285594384797759',
      message:channel.d.member.user.username + " is streaming his nonsense again =/"
    });
})






bot.on("message", (user, userID, channelID, message, evt) => {
  // if (user === "MarioBot") return;
  const lowerCaseMessage = message.toLocaleLowerCase().split(" ");

  if (lowerCaseMessage.includes("kingo")) {
    bot.sendMessage({
      to: channelID,
      message:
        "https://media.discordapp.net/attachments/512005735723565057/901139228157702234/image0.jpg?width=421&height=404",
    });
  }

  if (lowerCaseMessage.includes("jocker")) {
    bot.sendMessage({
      to: channelID,
      message: getJocker(),
    });
  }

  if (
    sexWarSubstrings.some((substring) => lowerCaseMessage.includes(substring))
  ) {
    bot.sendMessage({
      to: channelID,
      message: `@${user} ${getCrystal()}`,
    });
  }

  if (lowerCaseMessage.includes("mods")) {
    bot.sendMessage({
      to: channelID,
      message:
        '@everyone helpppppppppppp  !!! https://media2.giphy.com/media/6pPvY1fDyKIy4/200w.webp?cid=ecf05e47mob87hn4b1t3cxgrrrmice845ej1ng3ochkvekgp&rid=200w.webp&ct=g',
    });
  }

  if (lowerCaseMessage.includes("fight")) {
    bot.sendMessage({
      to: channelID,
      message:
        "https://www.youtube.com/watch?v=D_2bluVPsb0",
    });
  }

  if (lowerCaseMessage.includes("fellas")) {
    bot.sendMessage({
      to: channelID,
      message: "yes, what is it brother?",
    });
  }

  if (lowerCaseMessage.includes("brother")) {
    bot.sendMessage({
      to: channelID,
      message: ".. i believe i am a victim of the crystals",
    });
  }
  if (lowerCaseMessage.includes("inshallah")) {
    bot.sendMessage({
      to: channelID,
      message: "Do Start with Bismillah. Do end with Alhamdulillah. Do appreciate with Subḥān Allāh. Hope with Insha’Allah. And life will be blessed by Allah",
    });
  }
  if (lowerCaseMessage.includes("furry")) {
    bot.sendMessage({
      to: channelID,
      message: "https://media.giphy.com/media/5vWsNi8vhSz4ZlE56J/giphy.gif",
    });
  }
  if (lowerCaseMessage.includes("charles")) {
    bot.sendMessage({
      to: channelID,
      message: "https://media.giphy.com/media/10XiFYfOhhFxjW/giphy.gif",
    });
  }

  if (lowerCaseMessage.includes("deadlift")) {
    bot.sendMessage({
      to: channelID,
      message: "literally just deeadlift everyday",
    });
  }

  if (lowerCaseMessage.includes("gorilla", "powder")) {
    bot.sendMessage({
      to: channelID,
      message:
        "GORILLLLLAAAAAAAAAA https://cdn.shopify.com/s/files/1/0369/2580/0493/products/Gorilla-Mode-Bombsicle_600x.png?v=1608241404",
    });
  }

  if (lowerCaseMessage.includes("monke")) {
    bot.sendMessage({
      to: channelID,
      message:
        "https://media.giphy.com/media/5oYgxQKHhEjEk/giphy-downsized-large.gif",
    });
  }

  if (lowerCaseMessage.includes("nintendo", "sucks")) {
    bot.sendMessage({
      to: channelID,
      message:
        "hoes mad and your are wrong this video will detail it for you :) https://www.youtube.com/watch?v=WxRqpbpC4CU",
    });
  }

  if (message.substring(0, 1) == "!") {
    var args = message.substring(1).split(" ");
    var cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      case "dinner":
        bot.sendMessage({
          to: channelID,
          message: getDinner()
        });
        break;
      case "jocker":
        bot.sendMessage({
          to: channelID,
          message: getJocker(),
        }).catch(console.log('Error dummy'));
        break;
      case "danger":
        bot.sendMessage({
          to: channelID,
          message:
            "Charles don't click this!!!!!!!!!!!!!!!!!!!! ahhhhhhhhhhhhhhhhhhhh https://media.giphy.com/media/CkYl1qlzkxPRbklfXx/giphy.gif",
        });
        break;
      case "baka":
        bot.sendMessage({
          to: channelID,
          message:
            "https://tenor.com/view/among-us-sussy-baka-sus-check-gif-22735287",
        });
        break;
      case "jim":
        bot.sendMessage({
          to: channelID,
          message:
            "we go Jim and then protene food ? https://tenor.com/view/the-rock-the-rock-sus-gym-vibe-check-gif-22919190",
        });
        break;
      case "bully":
        bot.sendMessage({
          to: channelID,
          message: getBully(),
        });
        break;
    }
  }
});

bot.on("messageDelete", (user) => {
  if (user.t === "MESSAGE_DELETE") {
    bot.sendMessage({
      to: user.d.channel_id,
      message: "https://media.giphy.com/media/SGujC3SmOI5Vu/giphy.gif",
    });
  }
});
dontSleep()
