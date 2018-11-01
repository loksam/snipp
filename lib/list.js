
const colors = require('colors');
const { commands } = require('./values');

module.exports = function() {
    console.log('snipett');
    console.log('------------------');

    commands.forEach((cmd) => {
        console.log('%s', colors.bold(cmd));
    });
};
