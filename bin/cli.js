#!/usr/bin/env node
const pkg = require('../package.json')

const { program } = require('commander');

program
    .version(pkg.version, '-v, --version').description('又一个 Node Cli 工具')

    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza')

const initDev = require('./initDev.js')
program.command('dev')
    .description('开始写代码了')
    .action(() => initDev())

const initBuild = require('./initBuild.js')
program.command('build')
    .description('开始构建了')
    .action(() => initBuild())

program.parse(process.argv)