const { mongoose } = require('mongoose');
const mongo = require("../structures/mongo.js");

const Inventory = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    items: {
        computer: {
            type: Number,
            default: 0,
        }
    },
    lootboxes: {
        classic: {
            type: Number,
            default: 0,
        },
        premium: {
            type: Number,
            default: 0,
        },
        event: {
            type: Number,
            default: 0,
        }
    }
})

module.exports = mongoose.model("inventory", Inventory, "inventory"), {Inventory};