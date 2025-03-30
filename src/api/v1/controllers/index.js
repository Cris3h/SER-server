module.exports = {
    getByQueryOrAll: require("./getClientsByQueryOrAll"),
    postPackageAndClientController: require("./postPackageAndClientController"),

    registerUserController: require("./postUserController"),

    loginUserController: require('./loginUsersController'),

    deletePackageController: require('./deletePackageController'),
    updatePackageController: require('./updatePackageNorUserController'),
};