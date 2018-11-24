#!/usr/bin/env node

const program = require('commander');

// import function to list
const list = require('../lib/list');
const add = require('../lib/add');

/*******************************************/

program
    .command('list') // sub-command name
    .alias('ls') // alternative sub-command is `al`
    .description('List snipett') // command description

    // function to execute when command is uses
    .action(function () {
        list();
    });

program
    .command('add') // sub-command name
    .alias('n') // alternative sub-command is `al`
    .description('Add new snipett') // command description

    // function to execute when command is uses
    .action(function () {
        add();
    });

// allow commander to parse `process.argv`
program.parse(process.argv);
