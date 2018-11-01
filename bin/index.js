#!/usr/bin/env node

const program = require('commander');

// import function to list
const list = require('../lib/list');

/*******************************************/

program
    .command('list') // sub-command name
    .alias('ls') // alternative sub-command is `al`
    .description('List snipett') // command description

    // function to execute when command is uses
    .action(function () {
        list();
    });


// allow commander to parse `process.argv`
program.parse(process.argv);
