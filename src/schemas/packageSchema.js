const { Schema } = require('mongoose');

const packageSchema = new Schema ({
    type: String,
    description: String,
    quantity: Number,
    weight: Number,
    express: Boolean,
    from: String,
    to: String,
    date: {type: Date, default: Date.now()},
    package_id: {type: Schema.Types.ObjectId, ref: "Client"}
})

module.exports = packageSchema;