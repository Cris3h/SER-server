const { Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    name: String,
    email: {type: String, unique: true},
    password: {type: String, required: true},
    clients: [{
        type: Schema.Types.ObjectId, ref: "Client"
    }]
})

module.exports = userSchema;