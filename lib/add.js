
const inquirer = require('inquirer');
const colors = require('colors');
const pad = require('pad');
const fs = require('fs');
const path = require("path");

const questions = [
    { type: 'input', name: 'title', message: 'Please input snippet title.' },
    { type: 'editor', name: 'content' }
];

module.exports = function () {
    inquirer
        .prompt(questions)
        .then(function (answers) {

            addFile(answers.title + '.md', answers.content);

            console.log('Added snipett.');
            console.log(pad(colors.blue('title: '), 30), answers.title);
            console.log(pad(colors.grey('content: \n'), 30), answers.content);
        });
};

function addFile(filename, content) {

    var home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"]
    var filepath = home + "/.snipp/" + filename;
    var dirname = path.dirname(filepath);

    fs.access(dirname, fs.constants.R_OK | fs.constants.W_OK, (error) => {
        if (error) {
            if (error.code === "ENOENT") {
                fs.mkdirSync(dirname);
            } else {
                return;
            }
        }
        fs.writeFile(filepath, content, "utf8", (error) => {
            console.log(error);
        });
    });

}

