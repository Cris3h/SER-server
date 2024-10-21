const { Schema } = require('mongoose');

const clientSchema = new Schema({
    name: String,
    address: String,
    email: String,
    phone: String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    packages: [{
        type: Schema.Types.ObjectId, ref: "Package"
    }]
})

module.exports = clientSchema; 


