require('discord.js')
//time since last message using client.user.lastmessage
client.user.lastmessage.createdAt 

if(client.user.lastMessage.createdAt - Date.now() > 60000) {
    addXp()
}

function addXp() { 
    //random number between 10 and 30
    const xp = Math.floor(Math.random() * 20) + 10;
    //add xp to database
}