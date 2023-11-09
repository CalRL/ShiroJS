const mongoose = require("mongoose");
const { profileSchema, reqString } = require("../schemas/profile-schema.js");
const prettyMs = require("pretty-ms");
const id = require("discord.js");
const economy = require("../economy/economy.js");
const mongo = require("../structures/mongo.js");

async function addXp(userId) {

    const userData = await profileSchema.findOne({ userId: message.author.id }) || new profileSchema({ userId: message.author.id })
    const xpToAdd = Math.floor(Math.random() * (25 - 15 + 1)) + 15;

        if (userData.cooldowns.message > Date.now()) {
            return;
        } else {
            userData.cooldowns.message = Date.now() + (1000 * 60 * 2)
            userData.xp += xpToAdd * userData.multipliers.userXpMultiplier;
            userData.save();
        }
    
    
}

module.exports ={
    addXp: addXp,
}