const mongoose = require("mongoose");
const { profileSchema, reqString } = require("../schemas/profile-schema.js");
const prettyMs = require("pretty-ms");
const id = require("discord.js");
const economy = require("../economy/economy.js");
const mongo = require("../structures/mongo.js");

async function removeXp(userId, value) {
    mongo();
    const user = userId;
    const userData = await profileSchema.findOne({ userId: user.id }) || new profileSchema({ userId: user.id })
    userData.xp -= value;

}



module.exports = {
    removeXp: removeXp,
}