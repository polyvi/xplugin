#!/usr/bin/env node
/*
 *
 * Copyright 2013 Anis Kadri
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

// copyright (c) 2013 Andrew Lunny, Adobe Systems
var path = require('path')
    , url = require('url')
    , package = require(path.join(__dirname, 'package'))
    , nopt = require('nopt')
    , Q = require('q')
    , help = require('./src/help')
    , xface_lib = require('xface-lib')
    , xplugin = xface_lib.xplugin;

var known_opts = { 'platform' : [ 'ios', 'android', 'amazon-fireos', 'blackberry10', 'wp7', 'wp8' , 'windows8', 'firefoxos' ]
        , 'project' : path
        , 'plugin' : [String, path, url, Array]
        , 'version' : Boolean
        , 'help' : Boolean
        , 'debug' : Boolean
        , 'silent' : Boolean
        , 'plugins': path
        , 'link': Boolean
        , 'variable' : Array
        , 'www': path
        , 'searchpath' : [path, Array]
}, shortHands = { 'var' : ['--variable'], 'v': ['--version'], 'h': ['--help'] };

var cli_opts = nopt(known_opts, shortHands);

var cmd = cli_opts.argv.remain.shift();

// Without these arguments, the commands will fail and print the usage anyway.
if (cli_opts.plugins_dir || cli_opts.project) {
    cli_opts.plugins_dir = typeof cli_opts.plugins_dir == 'string' ?
        cli_opts.plugins_dir :
        path.join(cli_opts.project, 'cordova', 'plugins');
}

process.on('uncaughtException', function(error) {
    if (cli_opts.debug) {
        console.error(error.stack);
    } else {
        console.error(error.message);
    }
    process.exit(1);
});

// Set up appropriate logging based on events
if (cli_opts.debug) {
    xplugin.on('verbose', console.log);
}

if (!cli_opts.silent) {
    xplugin.on('log', console.log);
    xplugin.on('warn', console.warn);
    xplugin.on('results', console.log);
}

xplugin.on('error', console.error);

if (cli_opts.version) {
    console.log(package.version);
} else if (cli_opts.help) {
    console.log(help());
} else if (xplugin.commands[cmd]) {
    var result = xplugin.commands[cmd](cli_opts);
    if (result && Q.isPromise(result)) {
        result.done();
    }
} else {
    console.log(help());
}
