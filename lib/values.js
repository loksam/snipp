var fs = require('fs');
var readline = require("readline");

var text = fs.readFileSync("./list.snp");
var lines = text.toString().split('\n');

// commands
exports.commands = lines;
exports.commandsPlain = exports.commands.map(function(o) {
    return o;
});