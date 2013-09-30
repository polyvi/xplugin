var ios = require('../platforms/ios'),
    wp7 = require('../platforms/wp7'),
    wp8 = require('../platforms/wp8'),
    windows8 = require('../platforms/windows8'),
    Q = require('q'),
    fs = require('fs');

function ActionStack() {
    this.stack = [];
    this.completed = [];
}

ActionStack.prototype = {
    createAction:function(handler, action_params, reverter, revert_params) {
        return {
            handler:{
                run:handler,
                params:action_params
            },
            reverter:{
                run:reverter,
                params:revert_params
            }
        };
    },
    push:function(tx) {
        this.stack.push(tx);
    },
    // Returns a promise.
    process:function(platform, project_dir) {
        require('../../plugman').emit('verbose', 'Beginning processing of action stack for ' + platform + ' project...');
        var project_files;
        // parse platform-specific project files once
        require('../../plugman').emit('verbose', 'Parsing ' + platform + ' project files...');
        switch(platform) {
            case "ios": 
                require('../../plugman').emit('verbose', 'Parsing iOS project files...');
                project_files = ios.parseIOSProjectFiles(project_dir);
                break;
            case "wp7": 
                require('../../plugman').emit('verbose', 'Parsing WP7 project files...');
                project_files = wp7.parseProjectFile(project_dir);
                break;
            case "wp8": 
                require('../../plugman').emit('verbose', 'Parsing WP8 project files...');
                project_files = wp8.parseProjectFile(project_dir);
                break;
            case "windows8": 
                require('../../plugman').emit('verbose', 'Parsing Windows8 project files...');
                project_files = windows8.parseProjectFile(project_dir);
                break;
        }

        while(this.stack.length) {
            var action = this.stack.shift();
            var handler = action.handler.run;
            var action_params = action.handler.params;
            if(['ios','wp7','wp8','windows8'].indexOf(platform) > -1) {
                action_params.push(project_files);
            }

            try {
                handler.apply(null, action_params);
            } catch(e) {
                require('../../plugman').emit('warn', 'Error during processing of action! Attempting to revert...');
                var incomplete = this.stack.unshift(action);
                var issue = 'Uh oh!\n';
                // revert completed tasks
                while(this.completed.length) {
                    var undo = this.completed.shift();
                    var revert = undo.reverter.run;
                    var revert_params = undo.reverter.params;

                    if(['ios','wp7','wp8','windows8'].indexOf(platform) > -1) {
                        revert_params.push(project_files);
                    }

                    try {
                        revert.apply(null, revert_params);
                    } catch(err) {
                        require('../plugman').emit('warn', 'Error during reversion of action! We probably really messed up your project now, sorry! D:');
                        issue += 'A reversion action failed: ' + err.message + '\n';
                    }
                }
                e.message = issue + e.message;
                return Q.reject(e);
            }
            this.completed.push(action);
        }
        require('../../plugman').emit('verbose', 'Action stack processing complete.');
        if (platform == 'ios') {
            // write out xcodeproj file
            require('../../plugman').emit('verbose', 'Writing out iOS pbxproj file...');
            fs.writeFileSync(project_files.pbx, project_files.xcode.writeSync());
        }
        if (platform == 'wp7' || platform == 'wp8' || platform == "windows8") {
            require('../../plugman').emit('verbose', 'Writing out ' + platform + ' project files...');
            project_files.write();
        }
        return Q();
    }
};

module.exports = ActionStack;
