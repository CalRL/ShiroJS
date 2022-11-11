require('discord.js');
const mongoose = require('mongoose');
const mongo = require('../structures/mongo.js');
require('dotenv').config();

const profileSchema = require('../schemas/profile-schema');
//time since last message using client.user.lastmessage
//client.user.lastmessage.createdAt 

async function addXp() { 
    const xp = await econSchema.findOne({
        userId: message.author.id
    });
    if(!xp) {
        let newXp = new econSchema({
            userId: message.author.id,
            value: 1
        });
        newXp.save();
    } else {
        xp.value = xp.value + Math.floor(Math.random() * 15) + 10;
        xp.save();
    }
}


module.exports.getCoins = async function (userId) {
    return await mongo().then(async mongoose => {
        try {
            const result = await profileSchema.findOne({
                userId
            })

            let coins = 0
            if (result) {
                coins = result.coins
            } else {
                console.log('Inserting a document')
                await new profileSchema({
                    userId,
                    coins,
                    premium,
                }).save()
            }
            return coins;
        } finally {
            mongoose.connection.close()
        }
    })
}