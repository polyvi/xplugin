// All xplugin js API moved to xface-lib . This is a temporary shim for
// dowstream packages that use xplugin via js API.

var xface_lib = require('xface-lib');
module.exports = xface_lib.xplugin;