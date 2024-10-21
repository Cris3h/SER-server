const { MONGO_URI } = require('../config/envs');
const mongoose = require('mongoose');

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
    User: conn.model('User', require('./userSchema')),
    Client: conn.model('Client', require('./clientSchema')),
    Package: conn.model('Package', require('./packageSchema'))
};