const { Package } = require("../../../schemas");

const getPackages = async () => {
try {
    const packages = await Package.find();
    if(!packages) throw new Error('No packages found');
    return packages;
} catch (error) {
    console.log(error); 
}
};

module.exports = getPackages;