var path = require('path'),
    fs = require('fs'),
    shell = require('shelljs'),
    common = require('../platforms/common');

//TODO: 将common中的getInstalledApps、findDefaultAppId方法移过来
module.exports = {
    overridePluginJs : function(projectDir, wwwDir, platform) {
        var installedApps = common.getInstalledApps(projectDir, platform),
            xface3Dir = path.dirname(require('../platforms')[platform].www_dir(projectDir));

        // copy plugin js into all app folders
        installedApps.forEach(function(appId) {
            var targetAppPath = path.join(xface3Dir, appId);
            var pluginsPath = path.join(wwwDir, 'plugins'),
                pluginRegistryPath = path.join(wwwDir, 'cordova_plugins.js');
            fs.existsSync(pluginRegistryPath) && shell.cp('-f', pluginRegistryPath, targetAppPath);
            var targetPluginJsDir = path.join(targetAppPath, 'plugins');
            fs.existsSync(targetPluginJsDir) && shell.rm('-rf', targetPluginJsDir);
            fs.existsSync(pluginsPath) && shell.cp('-rf', pluginsPath, targetAppPath);
        });
    },
    installAssets : function(asset_el, plugin_dir, projectDir, platform) {
        var src = asset_el.attrib.src;
        var target = asset_el.attrib.target;

        if (!src) {
            throw new Error('<asset> tag without required "src" attribute');
        }
        if (!target) {
            throw new Error('<asset> tag without required "target" attribute');
        }

        if(isOutsideOfCurrentDir(target)){
            return;
        }
        var installedApps = common.getInstalledApps(projectDir, platform),
            xface3Dir = path.dirname(require('../platforms')[platform].www_dir(projectDir));
        installedApps.forEach(function(appId) {
            var targetAppPath = path.join(xface3Dir, appId);
            common.copyFile(plugin_dir, src, targetAppPath, target);
        });
    },
    uninstallAssets : function(asset_el, plugin_id, projectDir, platform) {
        var target = asset_el.attrib.target || asset_el.attrib.src;

        if (!target) {
            throw new Error('<asset> tag without required "target" attribute');
        }

        if(isOutsideOfCurrentDir(target)){
            return;
        }
        var installedApps = common.getInstalledApps(projectDir, platform),
            xface3Dir = path.dirname(require('../platforms')[platform].www_dir(projectDir));
        installedApps.forEach(function(appId) {
            var targetAppPath = path.join(xface3Dir, appId);
            common.removeFile(targetAppPath, target);
            common.removeFileF(path.resolve(targetAppPath, 'plugins', plugin_id));
        });
    }
};

function isOutsideOfCurrentDir(target) {
    var p = path.normalize(target);
    p = path.relative('.', p);
    return p.indexOf('..') != -1;
}
