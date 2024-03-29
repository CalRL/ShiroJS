const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true,
};

const profileSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },

    coins: { 
        type: Number,
        required: true,
        default: 0,
    },
    xp: {
        type: Number,
        required: true,
        default: 0,
    },
    premium: {type: Boolean, default: false},
    cooldowns: {
        work: { 
            type: Date,
            default: Date.now(),
        },
        message: {
            type: Date,
            default: Date.now(),
        }
    },
    multipliers: {
        userCoinsMultiplier: { type: Number, default: 1 },
        userXpMultiplier: { type: Number, default: 1 },
    },
    tokens: {
        type: Number,
        required: true,
        default: 0,
    }

});
module.exports = mongoose.model("profiles", profileSchema, "profiles"), {profileSchema, reqString};