const mongoose = require("mongoose");
const { profileSchema, reqString } = require("../schemas/profile-schema.js");
const prettyMs = require("pretty-ms");
const id = require("discord.js");
const economy = require("../economy/economy.js");
const mongo = require("../structures/mongo.js");

async function addXp(userId) {
    mongo();
    const user = userId;
    const userData = await profileSchema.findOne({ userId: user.id }) || new profileSchema({ userId: user.id })
    const xpToAdd = Math.floor(Math.random() * 25) + 15;
    if (userData.cooldowns.xp > Date.now()) {
        return;
    } else {
        userData.cooldowns.xp = Date.now() + (1000 * 60 * 2)
        userData.xp += xpToAdd * userData.multipliers.userXpMultiplier;
    }
}

module.exports ={
    addXp: addXp,
}