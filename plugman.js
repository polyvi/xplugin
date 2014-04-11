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

var emitter = require('./src/events');
var Q = require('q');

function addProperty(o, symbol, modulePath, doWrap) {
    var val = null;

    if (doWrap) {
        o[symbol] = function() {
            val = val || require(modulePath);
            if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
                // If args exist and the last one is a function, it's the callback.
                var args = Array.prototype.slice.call(arguments);
                var cb = args.pop();
                val.apply(o, args).done(cb, cb);
            } else {
                val.apply(o, arguments).done(null, function(err){ throw err; });
            }
        };
    } else {
        // The top-level plugman.foo
        Object.defineProperty(o, symbol, {
            get : function() { return val = val || require(modulePath); },
            set : function(v) { val = v; }
        });
    }

    // The plugman.raw.foo
    Object.defineProperty(o.raw, symbol, {
        get : function() { return val = val || require(modulePath); },
        set : function(v) { val = v; }
    });
}

plugman = {
    on:                 emitter.addListener,
    off:                emitter.removeListener,
    removeAllListeners: emitter.removeAllListeners,
    emit:               emitter.emit,
    raw:                {}
};
addProperty(plugman, 'help', './src/help');
addProperty(plugman, 'install', './src/install', true);
addProperty(plugman, 'uninstall', './src/uninstall', true);
addProperty(plugman, 'fetch', './src/fetch', true);
addProperty(plugman, 'prepare', './src/prepare');
addProperty(plugman, 'config', './src/config', true);
addProperty(plugman, 'owner', './src/owner', true);
addProperty(plugman, 'adduser', './src/adduser', true);
addProperty(plugman, 'publish', './src/publish', true);
addProperty(plugman, 'unpublish', './src/unpublish', true);
addProperty(plugman, 'search', './src/search', true);
addProperty(plugman, 'info', './src/info', true);
addProperty(plugman, 'create', './src/create', true);
addProperty(plugman, 'platform', './src/platform_operation', true);
addProperty(plugman, 'config_changes', './src/util/config-changes');
addProperty(plugman, 'platforms', './src/platforms');
addProperty(plugman, 'common', './src/platforms/common');
addProperty(plugman, 'multiapp_helpers', './src/util/multiapp-helpers');

plugman.commands =  {
    'config'   : function(cli_opts) {
        plugman.config(cli_opts.argv.remain, function(err) {
            if (err) throw err;
            else console.log('done');
        });
    },
    'owner'   : function(cli_opts) {
        plugman.owner(cli_opts.argv.remain, function(result) {
            if(result instanceof Error) {
                throw result;
            } else {
                console.log(JSON.stringify(result));
            }
        });
    },
    'install'  : function(cli_opts) {
        if(!cli_opts.platform || !cli_opts.project || !cli_opts.plugin) {
            return console.log(plugman.help());
        }
        var cli_variables = {}
        if (cli_opts.variable) {
            cli_opts.variable.forEach(function (variable) {
                    var tokens = variable.split('=');
                    var key = tokens.shift().toUpperCase();
                    if (/^[\w-_]+$/.test(key)) cli_variables[key] = tokens.join('=');
                    });
        }
        var opts = {
            subdir: '.',
            cli_variables: cli_variables,
            www_dir: cli_opts.www,
            searchpath: cli_opts.searchpath
        };

        var p = Q();
        cli_opts.plugin.forEach(function (pluginSrc) {
            p = p.then(function () {
                return plugman.raw.install(cli_opts.platform, cli_opts.project, pluginSrc, cli_opts.plugins_dir, opts);
            })
        });
        
        return p;
    },
    'uninstall': function(cli_opts) {
        if(!cli_opts.platform || !cli_opts.project || !cli_opts.plugin) {
            return console.log(plugman.help());
        }

        var p = Q();
        cli_opts.plugin.forEach(function (pluginSrc) {
            p = p.then(function () {
                return plugman.raw.uninstall(cli_opts.platform, cli_opts.project, pluginSrc, cli_opts.plugins_dir, { www_dir: cli_opts.www });
            });
        });

        return p;
    },
    'adduser'  : function(cli_opts) {
        plugman.adduser(function(err) {
            if (err) throw err;
            else console.log('user added');
        });
    },

    'search'   : function(cli_opts) {
        plugman.search(cli_opts.argv.remain, function(err, plugins) {
            if (err instanceof Error) throw err;
            else {
                plugins = err;
                for(var plugin in plugins) {
                    console.log(plugins[plugin].name, '-', plugins[plugin].description || 'no description provided'); 
                }
            }
        });
    },
    'info'     : function(cli_opts) {
        plugman.info(cli_opts.argv.remain, function(err, plugin_info) {
            if (err instanceof Error) throw err;
            else {
                plugin_info = err;
                console.log('name:', plugin_info.name);
                console.log('version:', plugin_info.version);
                if (plugin_info.engines) {
                    for(var i = 0, j = plugin_info.engines.length ; i < j ; i++) {
                        console.log(plugin_info.engines[i].name, 'version:', plugin_info.engines[i].version);
                    }
                }
            }
        });
    },

    'publish'  : function(cli_opts) {
        var plugin_path = cli_opts.argv.remain;
        if(!plugin_path) {
            return console.log(plugman.help());
        }
        plugman.publish(plugin_path, function(err) {
            if (err) throw err;
            else console.log('Plugin published');
        });
    },

    'unpublish': function(cli_opts) {
        var plugin = cli_opts.argv.remain;
        if(!plugin) {
            return console.log(plugman.help());
        }
        plugman.unpublish(plugin, function(err) {
            if (err) throw err;
            else console.log('Plugin unpublished');
        });
    },
    'create': function(cli_opts) {
        if( !cli_opts.name || !cli_opts.plugin_id || !cli_opts.plugin_version) {
            return console.log( plugman.help() );
        }
        var cli_variables = {};
        if (cli_opts.variable) {
            cli_opts.variable.forEach(function (variable) {
                    var tokens = variable.split('=');
                    var key = tokens.shift().toUpperCase();
                    if (/^[\w-_]+$/.test(key)) cli_variables[key] = tokens.join('=');
                    });
        }
        plugman.create( cli_opts.name, cli_opts.plugin_id, cli_opts.plugin_version, cli_opts.path || ".", cli_variables );
    },
    'platform': function(cli_opts) {
        var operation = cli_opts.argv.remain[ 0 ] || "";
        if( ( operation !== 'add' && operation !== 'remove' ) ||  !cli_opts.platform_name ) {
            return console.log( plugman.help() );
        }
        plugman.platform( { operation: operation, platform_name: cli_opts.platform_name } );
    }
};

module.exports = plugman;
