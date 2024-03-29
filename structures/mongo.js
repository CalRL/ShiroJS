const mongoose = require("mongoose");

module.exports = async () => { 
    await mongoose.connect(process.env.databaseLogin, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose;
}