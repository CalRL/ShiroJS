const mongoose = require('mongoose');

const Guild = new mongoose.Schema({
    guildId: {
        type: String,
        required: true,
        unique: true
    },
    premium: {
        type: Boolean,
        default: false
    },
    welcome: {
        enabed: {
            type: Boolean,
            default: false
        },
        welcomeMessage: {
            type: String,
        },
        embed: {
            title: {
                type: String,
            },
            description: {
                type: String,
            },
            image: { 
                tyoe: String,
            }
        }
    }
})

module.exports = mongoose.model("guild", Guild, "guild"), {Guild};