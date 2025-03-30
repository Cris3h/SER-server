const {json} = require('express');
// const morgan = require('morgan');
const cors = require('cors')
const { NODE_ENV } = require('../config/envs');

module.exports = (app) => {
    app.use(json());
    app.use(cors());
    // NODE_ENV == 'development' && app.use(morgan('dev'))
}