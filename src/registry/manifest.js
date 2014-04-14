var xml_helpers = require('../util/xml-helpers'),
    path = require('path'),
    Q = require('q'),
    fs = require('fs'),
    whitelist = require('./whitelist');

function validateName(name) {
    if(!name.match(/^(\w+\.){2,}.*$/)) {
      return false;
    }

    if(name.match(/org.apache.cordova\..*/) && whitelist.indexOf(name) === -1) {
      return false;
    }

    return true;
}

// Java world big-up!
// Returns a promise.
function generatePackageJsonFromPluginXml(plugin_path) {
    var package_json = {};
    var pluginXml = xml_helpers.parseElementtreeSync(path.join(plugin_path, 'plugin.xml'));

    if(!pluginXml) return Q.reject(new Error('invalid plugin.xml document'));

    var pluginElm = pluginXml.getroot();

    if(!pluginElm) return Q.reject(new Error('invalid plugin.xml document'));

    // REQUIRED: name, version
    // OPTIONAL: description, license, keywords, engine
    var name = pluginElm.attrib.id,
        version = pluginElm.attrib.version,
        cordova_name = pluginElm.findtext('name'),
        description = pluginElm.findtext('description'),
        license = pluginElm.findtext('license'),
        keywords = pluginElm.findtext('keywords'),
        repo = pluginElm.findtext('repo'),
        issue = pluginElm.findtext('issue'),
        engines = pluginElm.findall('engines/engine'),
        platformsElm = pluginElm.findall('platform'),
        platforms = [];

    platformsElm.forEach(function(plat){
        platforms.push(plat.attrib.name);
    })
    if(!version) return Q.reject(new Error('`version` required'));

    if(version.indexOf('dev') != -1) {
        return Q.reject(new Error('Current version "' + version + '" is not formal, which can\'t be published.'));
    }

    package_json.version = version;

    if(!name) return Q.reject(new Error('`name` is required'));

    if(!validateName(name))
        return Q.reject(new Error('`name` is invalid. It has to follow the reverse domain `com.domain.plugin` format'));
    
    package_json.name = name.toLowerCase();

    if(cordova_name) package_json.cordova_name = cordova_name;
    if(description)  package_json.description  = description;
    if(license)      package_json.license      = license;
    if(repo)         package_json.repo         = repo;
    if(issue)        package_json.issue        = issue;
    if(keywords)     package_json.keywords     = keywords.split(',');
    if(platforms)    package_json.platforms    = platforms;

    // adding engines
    if(engines) {
        package_json.engines = [];
        for(var i = 0, j = engines.length ; i < j ; i++) {
            package_json.engines.push({name: engines[i].attrib.name, version: engines[i].attrib.version});
        }
    }

    // write package.json
    var package_json_path = path.resolve(plugin_path, 'package.json');
    fs.writeFileSync(package_json_path, JSON.stringify(package_json, null, 4), 'utf8');
    return Q(package_json);
}

module.exports.generatePackageJsonFromPluginXml = generatePackageJsonFromPluginXml;
