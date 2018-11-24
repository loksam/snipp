
const colors = require('colors');
const fs = require('fs');

module.exports = function() {
    console.log('snippet');
    console.log('------------------');

    var home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"]
    var dir = home + "/.snipp/";
    var list = fs.readdirSync(dir);

    list.forEach((snippet) => {
        console.log(snippet.replace(/\.md/, ''));
    });
};
