

## 3.2.0-0.0.3 (Fri Feb 28 2014)


 *  修正插件配置的依赖引擎版本号类似于x.x.x-rc1时，插件安装时会出现版本不匹配的bug
 *  将plugin registry的地址由www.polyvi.net改为plugins.polyvi.net
 *  由于statusbar/keyboard插件的仓库名称作了调整，在reposet中搜索插件时也作相应调整
 *  修改xplugin的help文档
 *  修改plugin registry服务器地址，调整部分代码
 *  CB-5891 Fix engine check when path has spaces.
 *  updated release notes
 *  CB-5804: added repo & issues to plugman publish
 *  CB-5299 Cache pbxproj to avoid re-parsing it for each plugin.
 *  Update node-xcode dependency to 0.6.6
 *  Bump node-xcode dependency version
 *  CB-5802 Updated version and RELEASENOTES.md for release 0.18.0
 *  CB-5006 Fix searchpath not being passed to dependent plugins.
 *  CB-5006 Change searchpath to use repeated flag instead of delimiter
 *  CB-5770 plugman prepare.js script content wrapping no longer allows ending parens/braces to be commented out from end of line comment
 *  Update xcode npm dependency version now that pull request is merged.
 *  Fix-up trailing comma in previous commit :(
 *  CB-4871 Add spec/ to .npmignore
 *  CB-4871 Remove unused dep "ncallbacks", move osenv to devDependencies
 *  CB-4871 Switch to plist-with-patches to save ~10meg of test files in node_dependencies.
 *  CB-5720 Tests and formatting tweaks to <resource-file>
 *  CB-5720 add resource-file to plugin.xml
 *  CB-5006: Add --searchpath option for local plugin search path
 *  White space & style fixes.
 *  CB-5701 Reference custom frameworks usinexecHelperrelative paths
 *  Add release notes for the last few releases
 *  CB-5495, CB=5568 fix config.xml path for ios
 *  batch modify .reviewboard
 *  匹配插件依赖项时，遍历到的插件目录无plugin.xml文件时不作处理，继续下一个
 *  在根据插件id在reposet下查找plugin时，将extra也纳入查找范围
 *  匹配config.xml的路径时，解决过滤不合法路径的正则表达式不正确的bug
 *  修正一处路径拼接错误
 *  将命令名由plugman改为xplugin
 *  由于新版本plugman是将插件js安装在.staging目录下，故插件安装完成后就.staging下的js拷贝到所有安装的应用下面
 *  updated version to 0.17.0
 *  CB-5579 Add support for --www param for install, uninstall, prepare commands.
 *  CB-5619 Avoid Error: Error ...
 *  updated to 0.16.0
 *  Updated amazon-fireos.spec with amazon-fireos platform name. Corrected project names for android_one and android_two. Modified README.md for Cordova-AmazonWebView-Plugman
 *  Added amazon-fireos platform.
 *  add ubuntu platform
 *  added battery-status + device-motion to whitelist
 *  CB-5034 document registry functions in plugman
 *  CB-5584 Fix git clone of not working on windows.
 *  CB-5238 fixing typo and updating tests
 *  bumping xcode version
 *  CB-5238 adding custom frameworks
 *  CB-5367 reject non-whitelisted org.apache.cordova plugins
 *  Write plugin metadata (ID and version) into cordova_plugins.js
 *  Revert "Add <plugins> tag to config.xml, containing a list of plugins."
 *  Add <plugins> tag to config.xml, containing a list of plugins.
 *  Fixing plugman tests on Linux.
 *  解决没有引入common模块的错误
 *  安装插件时，如果存在多应用，将插件js拷贝到其它app中
 *  安装插件时通过解析config.xml来获取默认应用的路径
 *  暴露platforms模块，方便在xface-cli中使用
 *  updated version to 0.15.0
 *  [CB-4994] Update xcode dependency to parse Xcode 5 capabilities.
 *  CB-5091: Use cwd option rather than shell.cd when cloning plugin repos
 *  CB-4981 updating help
 *  在android平台安装/卸载插件时，添加对proguard，application，activity配置的处理
 *  解决类unix系统上使用相对路径安装插件时，为插件目录创建的符号链接不正确的bug
 *  CB-4872 - updated default engine names to include windows scripts
 *  [CB-5197] Updated version and RELEASENOTES.md for release 0.14.0
 *  CB-5192 Plugman engine check fails on Windows
 *  [CB-5184] Fix uninstall logic being too aggressive
 *  CB-4872 - updated default plugin to include new bb10 script
 *  CB-4872 - took out custom version compare and went back to semver
 *  Overhaul dependency uninstallation
 *  [CB-4872] - deleted some comments
 *  [CB-4872] - adding in custom semver check for project
 *  [CB-4872] - updated paths to version files
 *  Update action-stack to avoid static platform detection + test if parseProjectFile is present instead of switch case + test if project_files is not null instead of [].indexOf + More dynamic, more long term evolution
 *  Update spec to match new ios parse method name
 *  Update references to old ios parse method
 *  Rename parse method and add a write method to result + parseIOSProjectFiles --> parseProjectFile + write method save both pbx and xcode + allow a more common experience
 *  updating README.rd doc
 *  CB-5065 remove breaking parameter
 *  increased version to 0.14.0 to reflect that it is newer than published version on npm
 *  Correctly tell plugman which object in config to remove
 *  [CB-5012]: No whitespace in empty plist string nodes.
 *  CB-4983 plugin name check
 *  [windows8][CB-4943] .appxmanifest should be treated like .xml, not like a plist-xml
 *  修正一处未检查文件是否存在的错误
 *  解决再次安装一个插件时会将plugins下对应的插件删掉的bug
 *  内部开发模式下，从reposet中安装插件时，使用符号链接的方式将插件从reposet链接到<xface-proj>/plugins下
 *  install、fetch插件时，如果options参数中有repoSet属性，则优先到reposet中查找对应插件
 *  fixed  wp8 project reduplicate add plugin js reference!
 *  fixed wp8 remove plugin not remove plugin.js reference in project file problem
 *  修改reviewboard配置中的仓库地址
 *  解决wp8平台安装插件时找不到version直接退出的bug
 *  将windows phone平台名称由wp改回wp8
 *  将wp8改为wp，同时将路径www改为xface3/helloxface
 *  修改xplugin进行插件操作时的目标应用路径
 *  [CB-4809]: Check that dependencies' IDs match the <dependency> tags
 *  [CB-4877]: Add --silent flag and basic logging.
 *  Removed extra comma
 *  Refactor to use Q.js promises in place of callbacks everywhere.
 *  [CB-4837]: Version 0.12.0. Release notes updated.
 *  Rename CHANGELOG.md -> RELEASENOTES.md
 *  CB-4492 tracking which of cli or plugman is used to fetch from registry
 *  removed unncessary console.logs
 *  add full ff support to plugman
 *  add firefoxos
 *  removed unncessary console.logs
 *  add full ff support to plugman
 *  add firefoxos
 *  Fix tests broken by lazy module requiring.
 *  CB-4786 adding documentation
 *  [CB-4793] Lazily require modules in plugin.js
 *  CB-4786 adding owner and checking in some spec requirements
 *  CB-4770 dependent plugins can be fetched from registry
 *  Updated version to 0.11.1-dev
 *  [CB-4750] Updated version and changelog for 0.11.0
 *  Revert "[CB-4714] Add -f option to 'plugin rm' to forcefully remove a plugin."
 *  [CB-4036] - forgot to add .bat to windows version paths
 *  [CB-4430] Add tests for lib-file support on Android.
 *  [CB-4430] Add lib-file support to Android
 *  [CB-4714] Add -f option to 'plugin rm' to forcefully remove a plugin.
 *  [CB-4502] Ignore www/config.xml, projects in ^[xyz].* now work
 *  [CB-4622]: Allow git URLs with a hash specifying git ref and subdir
 *  Fix use for path.join etc. for web paths as opposed to platform paths.
 *  CB-4494 adding info command and storing engine data in registry
 *  CB-4492 updated download tracking
 *  Add download count pushing to the registry fetching.
 *  [CB-4036] - forgot to add test file
 *  [CB-4036] - added ability to list multiple platforms in plugin.xml
 *  [CB-4036] - fix for handling current state of platform branches with version listed as dev
 *  [CB-3646] - fixed custom engine src script not being properly set
 *  [CB-4036] - fixed custom engine loading and added test
 *  [CB-4036] Forgot updated default-engines file
 *  [CB-4036] - fixed up the default engines and added some tests
 *  [CB-4036] - added more tests and fixed up some logic
 *  [CB-4036] - fixed up how plugin install handles the dev flag for repos as well as cleaned up some errors
 *  [CB-4490 & CB-4036] - added check for cordova-plugman and made a util function
 *  [CB-4036] - fixed up some small errors
 *  [CB-4036] - another pass at the engine/platform check problem
 *  [CB-4036] - synching up with master and fixed failing tests
 *  [CB-4036] - fixed up some failing tests
 *  [CB-4036] - refactored the engine/version checks for easier testing
 *  [CB-4036] - added test file for checking engine and versions
 *  [CB-4036] - first pass for adding version script
 *  support windows8 config-file which uses an xml file with a .appxmanifest extension
 *  plugin rm now doesn't choke when a file is already deleted
 *  0.10.1. [CB-4455] Add a deprecation warning when used with <plugins-plist> elements for cordova-ios 2.2 and earlier projects.
 *  [CB-4543] Changed implementation of graftXML to create parent if its not present
 *  [CB-4513] Adding logic to remove lib-files at uninstall
 *  update help for publish
 *  adding cordova name
 *  removed plugin spec and updated link to point to cordova-docs.
 *  0.10.0. Resolves [CB-4373].
 *  [CB-4373] Added tests for framework ref counting.
 *  Logic fix for framework-install.
 *  [CB-4373] Uninstall should no longer concern itself with frameworks (handled in prepare). Added array of four frameworks required by default by cordova-ios.
 *  [CB-4373] First pass at ios frameworks being handled in prepare stage.
 *  fix windows8 tests
 *  made console.log a plugman.emit.log call
 *  plugins are added to www/plugins/ folder
 *  windows8 is just like wp7 + wp8
 *  cleanup WIP adding windows8
 *  Updated readme with a requirements section. Resolved [CB-4375]: error msgs get properly bubbled up if git is missing. Version bump to 0.9.11.
 *  [wp] created fixture for testing csproj remove functionality
 *  Reset csproj object on every test, seems to fix a failing test for me.
 *  fixing tests
 *  Starting point, breakout functions
 *  removing xmldom dependency and using elementtree
 *  fixing doc
 *  bumping version
 *  CB-4415 fixing possible bugs on windows
 *  fixing settings in registry
 *  bug on first action
 *  updating version
 *  adding help
 *  updating specs
 *  adding registry code in plugman and removing dependencies. Updated configuration handling
 *  license appeared twice in the spec
 *  Updated readme with a requirements section. Resolved [CB-4375]: error msgs get properly bubbled up if git is missing. Version bump to 0.9.11.
 *  [wp] created fixture for testing csproj remove functionality
 *  [CB-4372] Fixed "Plugman fails when fetching local plugins with space in path"
 *  Reset csproj object on every test, seems to fix a failing test for me.
 *  more generix
 *  keep generic stuff generic
 *  [CB-4341] Adding a fix to make subdirectories work within a local plugin dependency - Includes the integration of integration specs which test installation   of plugins with dependencies
 *  [wp] tweak for adding pages in csproj
 *  0.9.10. [CB-4292] fixes for plugman and fetching.
 *  Fixes dependency fetching to work with subdirectories. Also allows subdirectories within platform tags
 *  0.9.9
 *  Bumping elementtree version to support namespaced xml
 *  adding callbacks to most functions and updating README.md
 *  testing config.js
 *  updating dependencies
 *  fixing fetch
 *  0.9.8. cordova versions that have "rc" in it will be munged slightly to add a dash in between the version and the rc number, to play nice with semver.
 *  0.9.7
 *  bumping version of dependencies
 *  removing --plugin option
 *  updated cli interface
 *  added tests for adding/removing Conent refereces to csproj file
 *  [windowsphone] csproj update for Content references
 *  error handling
 *  typo in callback
 *  Wp now adds www content to .csproj file
 *  adding callback to search
 *  fixed wrong URL
 *  0.9.6. [CB-3182] Interpolate variables into <info> tags.
 *  0.9.5. [CB-3572] Enable having <info> tags outside of a <platform> tag.
 *  0.9.4. Added an always-logged "results" event that is emitted when plugins are installed + uninstalled.
 *  Added WP8 to the supported platforms, was wp7 only
 *  [CB-4141] removed cordova_plugins.json writing and related spec. Added mee-self to the contributors. cordova_plugns.js is pretty printed.
 *  0.9.3. uninstallPlugin should not complain if a certain plugin repo is gone already.
 *  minor refactor, added specs
 *  adding argument check
 *  adding search results
 *  fixing issue with fetch
 *  adding config
 *  updating plugin spec
 *  updating cli options and adding short hands
 *  adding fetch and fixing cli interface
 *  adding registry dependency and wiring up commands
 *  adding actions
 *  typo
 *  minor refactor, added specs
 *  adding argument check
 *  adding search results
 *  fixing issue with fetch
 *  adding config
 *  updating plugin spec
 *  updating cli options and adding short hands
 *  adding fetch and fixing cli interface
 *  adding registry dependency and wiring up commands
 *  adding actions
 *  fixing help
 *  forgot comma
 *  typo
 *  minor refactor, added specs
 *  updating cli options and adding short hands
 *  adding fetch and fixing cli interface
 *  adding registry dependency and wiring up commands
 *  adding actions
 *  minor refactor, added specs
 *  adding search results
 *  fixing issue with fetch
 *  adding config
 *  updating plugin spec
 *  updating cli options and adding short hands
 *  adding fetch and fixing cli interface
 *  adding registry dependency and wiring up commands
 *  adding actions
 *  0.9.2. uninstallPlatform should never invoke uninstallPlugin. uninstallPlugin needs to recurse for dependencies.
 *  Removed "last updated" line from plugin spec.
 *  0.9.1. [CB-3499] Uninstalled plugins have their js-module www assets properly removed now.
 *  0.9.0
 *  Added a spec for uninstalling dependencies.
 *  Further [CB-4077] work: remove plugin directory for dependent plugins during uninstallation.
 *  Work for [CB-4077]: uninstallation should look at platform json file for determining which plugins to iterate over. fetching multiple plugins from git should not collide in temp dir.
 *  [CB-4077] Fix tests for cordova-cli, properly uninstall plugin source
 *  [CB-4077] Separate the actions of removing a plugin from a platform and removing the plugin entirely
 *  Revert "[CB-4016] only write out cordova_plugins.js."
 *  [CB-4016] only write out cordova_plugins.js.
 *  removed a console log
 *  Added tests for windows phone
 *  [CB-3751] test running on windows, yay
 *  0.8.2. Fixing event emitters. Require weirdness?
 *  0.8.1. Updated plugin spec re: compiler flags for iOS.
 *  Slight tweak for wp8 support in action-stack.
 *  Most console.logs should be removed in favour of events now. Hooked it up properly to cli shim.
 *  part of the way there to refactor output into eventemitter.
 *  updated xcode dependency to 0.6.1 which supports compiler flags. added compiler flag support to ios plugin installation for <source-file> elements.
 *  [npm] Add Michael Brooks as contributor.
 *  [CB-4060] Remove git dependency from the npm package.
 *  Fix in action-stack for wp8
 *  npm version 0.8.0. Tests are generally fixed up.
 *  redid core method specs so they dont touch FS
 *  added ability to load .dll from a windows phone plugin
 *  0.7.15. Made help output more.. helpful. Factored out into own module.
 *  0.7.14. Fixed [CB-3943]: dont error out <engine> element checking if version script fails.
 *  0.7.13. 0.7.12 already existed on npm but the version in the repo was never incremented...
 *  0.7.12
 *  Make sure to write out both cordova_plugins.json and cordova_plugins.js
 *  testing out plugin loader approach by jesse
 *  Should install plugin after fetching from url
 *  0.7.11
 *  Support for adding UI elements to windows phone plugins
 *  Treat 'dev' as greater than any expected engine version
 *  Fix misleading error message for failed run of the version script.
 *  updated wp8.js parser file
 *  Fix incorrect links in example plugins section
 *  0.7.10
 *  don't fail on undetected cordova version
 *  Update fetch tests now that clonePluginGitRepo always has a callback.
 *  Add support for relative dependencies with a url of "."
 *  Add .fetch.json metadata file to plugin dirs after fetch
 *  0.7.9
 *  fix for failing test in plugin uninstallation.
 *  exposed the config_changes module to the top-level module. refactored config-changes into discrete add+remove methods for handling config additions/removals.
 *  updating plugman to 0.7.8 for npm goodness
 *  npm test for windows friendliness
 *  Fix util/plugins tests
 *  Refactor uninstall to use an options object instead of many parameters
 *  Refactor fetch to use an options object instead of many parameters
 *  Refactor install to have a single options parameter
 *  [CB-3500] fixing usage+readme on uninstall instructions.
 *  Testing various plugins
 *  [CB-3234] - first pass at implementing engine tag
 *  Fix handling of git revisions when fetching dependencies
 *  cd into the cloned git repo before running git checkout.
 *  removed debuggin statements. fix for proper handling of fetch callback to check for errors before triggering main plugin handling.
 *  Whole bunch of debugging output and not quite working
 *  0.7.7. Fix for [CB-3431] adding stuff to xcodeproj library search paths
 *  Add a .reviewboardrc file to make using post-review easier.
 *  added node module usage docs
 *  start of node module usage documentation
 *  [CB-3429] fix for bad referencing of framework + source files. bumped to 0.7.6.
 *  split out readme and spec into separate documents
 *  0.7.5. Support for Windows Phone 7
 *  windows vetting: parsing xml is hard.
 *  split hten join, not join then join
 *  unused target-dir should not blow the thing up.
 *  i wonder how many more commits i will need to make to fix this.
 *  small tweak :)
 *  updating glob since it sucked on windows.
 *  fix for using glob since its dumb
 *  fixed an issue in csproj and start of tests for it
 *  change of npm test script so it works on windows
 *  added a csproj file parses module, incorporated into action stack, and first pass at wp7 platform handler
 *  start of rework of windows phone support to adhere to new arch
 *  [CB-3419] Change plugin XML namespace to cordova.apache.org
 *  0.7.4. Fix for [CB-2718] source-file can now specify framework=true to add the file as a framework in an iOS project.
 *  0.7.3 now that you need node minimum 0.9
 *  Update node version requirement
 *  updated dep ref of xcode to npm version num
 *  0.7.2. [CB-2717] namespace ios files within the Plugins/ dir by plugin id.
 *  0.7.1. fixed an issue with ios source-file installs.
 *  update to usage instructions and readme
 *  updated bb10 pull with latest dependency changes.
 *  Add leading slash to js-modules within cordova_plugins.json
 *  [BlackBerry10] Adding support for new BlackBerry10 platform  - Also re-introduces <lib-file> tags  Reviewed by Bryan Higgins <bhiggins@blackberry.com>i
 *  adding indent to config files
 *  version 0.7.0 after landing dependencies
 *  added dependency module tests.
 *  added tests for action-stack
 *  tests fixed! woot.
 *  fixed blackberry specs
 *  axed old remove modules, fixed up android handler specs.
 *  tweaks for prepare specs
 *  updated/fixed install + uninstall specs. added specs to both for plugins with dependencies
 *  uninstallation with dependents should now work.
 *  differentiating between top-level and dependent plugins. uninstall should work for the single plugin case (still need to fire off dependent plugin danglin uninstalls).
 *  slight workaround to avoid duplication operations during ios installs
 *  Add git ref support to fetch. Not used anywhere yet.
 *  giant refactor for dependencies, part one: changing the way install works.
 *  Fix source and destination paths for installing plugins from local disk
 *  Add spec for <dependency> tag to README.md.
 *  added specs for fetch and clonePluginGitRepo w.r.t. subdirectory support
 *  Fix tests after adding dependencies.
 *  First pass at dependency support.
 *  Adding subdirectory support to fetch.
 *  Make plugin cache directories be named after the plugin ID
 *  Add www_dir argument to uninstall.
 *  Add --www option to install and uninstall. Fix specs, add new specs.
 *  adding more specs for assets install/uninstall
 *  fixing uninstall reversion
 *  removing <asset/> from android, ios and blackberry. Updating specs
 *  updating assets and spec
 *  adding TODOs
 *  removing unused actions
 *  removing --list
 *  deleting unused and useless things
 *  updated plugin spec to note that js-module and asset elements can be nested under platform elements.
 *  CB-3215 added ability to use zip archives from local/remote sources
 *  CB-3284 moving assets to install/uninstall
 *  updates to spec regarding config-file elements.
 *  0.6.2 version bump
 *  added more variable documentation to README. added support for platform-agnostic config changes using top-level <config-file> element. add support for wildcard xpath selectors in xml helpers. added tests for prune/graftXML helper methods. factored out common parent resolution from xml helper methods. factored out common post-install prepare steps from install module.
 *  fixed up config_munge so it drops in PACKAGE_NAME var interpolation properly. delegated responsibility of determining package name to platform-level handlers. fixed up/added specs related to these changes.
 *  Fixed ios spec test to match moving some specific ios steps into a common module
 *  Added ios uninstall tests and fixed up ios a bit to get tests passing
 *  Fixing up ios uninstall tests
 *  fixing some tests in uninstall following refactor
 *  a couple of test stubs re package name interpolation inside the config handler. removed config-file and plugins-plist handling from platform-level handlers. added custom config file / wildcard filepaths for config file handling (as it was before more or less)
 *  finished config-handler uninstall specs
 *   a couple of config uninstallation specs and a plugin interpolation for uninstallation fix for config-handler.
 *  updates to plugman readme following weekend updates.
 *  bump to 0.6.1
 *  wire up config handler into prepare. config dependencies hsould be good to go now
 *  a few more specs and a tweak to plugins-plist handling.
 *  pretty much there for a config handler module. a few uninstall tests missing, and need to wire up to install/uninstall/prepare properly (and add tests for interaction between those modules)
 *  CB-3284 moving asset installation to platforms
 *  CB-3297 fixing trailing / case for local plugins
 *  re-adding installation by name from remote source
 *  removing --remove
 *  updated version for npm push
 *  remove old tests. jasmine migration complete
 *  proper uninstall + specs.
 *  added plugin value check when detecting collisions for ios
 *  ios resource and framework tests.
 *  ios resource specs
 *  moar ios specs
 *  minor tweaks to common specs
 *  a few more ios spec stubs
 *  tons of ios specs.
 *  fixed a few typos
 *  merged changes to common tests and common.js
 *  clonePluginGitRepo provides the dir of cloned plugin as callback param. propagates back to install module during a install->fetch->install flow.
 *  Fix copy of .java files being put in the wrong place.
 *  Fix exception on install of ios plugin. plistEle is an array.
 *  More exposing of stack traces.
 *  Fix for config-file element parsing
 *  Always print full stack trace on uncaught exceptions.
 *  ios handler spec stubs. removed library-file handling from ios handler.
 *  blackberry handler specs.
 *  remove www platform.
 *  refactored xml-helpers tests
 *  refactored plugins tests and made a small fix to the plugins.js
 *  finished android handler specs. fixed a bug with asset removal (yay tests!). removed retrieving plugins during an uninstall.
 *  removing unused <library-file> element code. android handler install specs done.
 *  some android handler specs
 *  finished refactor of ios handler. install grabs plugins-plist and hands over to handlers now too.
 *  Fix reference error where exports was referred to but not updated.
 *  Fix parse error in package.json
 *  added contributors to package.json. start of rejiggering ios handler.
 *  blackberry handler test stubs.
 *  fixed issue in common.js. added test stubs for common platform handler, and a few more to android handler
 *  android handler spec stubs.
 *  install specs done. uninstall still need some work. removed unused requires.
 *  android handler should be good to go. added fetch spec to install
 *  Added in remote plugin tests
 *  transaction based install with android handler refactored
 *  added spec stubs for install/uninstall to do with transactions of (uninstall) modifications
 *  (un)install specs. start of refactor
 *  prepare specs
 *  moar tests
 *  fetch tests in jasmine
 *  refactor should be done.
 *  hugeass refactor
 *  start of nodeunit -> jasmine
 *  Fully refactored tests.
 *  First pass at the refactoring, manual and automatic tests passing.
 *  Fixed ios install and uninstall test
 *  Fixed old test, axed submodules, SCREW submodules.
 *  Fix path reference to test file.
 *  Clarified spec
 *  Call prepare after each install and uninstall.
 *  README improvements for spec and dropping TODOs. Added <dependency> section to the spec and made explicit error cases.
 *  Fixed ios plist install with moving js file
 *  Fixed android two uninstall not removing directory
 *  Fixed up test for js file in ios config install
 *  Fixed android one uninstall test
 *  Remove --www parameter from --prepare, infer from platform instead.
 *  Add tests for --prepare behavior
 *  Remove all assets and JS modules on plugin uninstallation.
 *  Add --link option to --fetch; make --remove handle symlinks
 *  Added plugin loader to plugman test
 *  fixed up ios plist install
 *  removed www test
 *  fixed config changes
 *  fixed DummyPlugin's plugin.xml file for installing blackberry
 *  fixed blacberry install tests
 *  took out console log
 *  fixed android two install tests
 *  added in variable support back in
 *  fixed up some more ios tests
 *  Messed up ios merge - added some stuff back in and cleaned the ios tests up a bit
 *  fixed some typos with ending brances and misplaced semi colon
 *  trying to get ios tests work
 *  fixed tests to the point all android-one-install will work
 *  Deleted sql plugin and got some more tests passing
 *  Made sure to check for directory
 *  Fixed moving src folder around
 *  Remove src/<platform> directory structure.
 *  updated futures README with some minor tweaks to the spec and kept track of outstanding issues in JIRA
 *  Updated README with <js-module> tags, other updates, TODO
 *  No <platform> tags for JS-only plugins.
 *  Rewire commands: Split into --fetch, --install, --uninstall, --remove.
 *  Plugin loading works correctly when using plugman solo.
 *  --prepare with ported JS installation, cache plugins locally
 *  Add FUTURE.md describing the goals of this branch
 *  Remove src/<platform> directory structure.
 *  updated futures README with some minor tweaks to the spec and kept track of outstanding issues in JIRA
 *  Updated README with <js-module> tags, other updates, TODO
 *  No <platform> tags for JS-only plugins.
 *  Rewire commands: Split into --fetch, --install, --uninstall, --remove.
 *  Plugin loading works correctly when using plugman solo.
 *  --prepare with ported JS installation, cache plugins locally
 *  Add FUTURE.md describing the goals of this branch
 *  fixed issues with tests
 *  split wp8 into it's own file for future branching, today it is roughly identical to the wp7.js file but that could change
 *  added support for wp8, same as wp7 really, except plugin/xml must specify the platform.
 *  xml-helper now supports windows (BOM), writes to config.xml
 *  [wp7] Empty node handling, always modify csproj so Visual Studio will notice and reload it. Plugins folder use does not require project changes
 *  added support for --remove
 *  adding wp7
 *  [ios] remove external hosts fix
 *  [ios] add custom config-file support
 *  added error code for plugin installed, added check of plugin value to see if installed
 *  bumping version
 *  updating plugman test
 *  updating plugin with <info> tag
 *  CB-2782 adding support for <info>
 *  updating README.rd
 *  adding force actions for blackberry and android
 *  renamed blackberry assets
 *  updating options
 *  updating force-install for ios-plist
 *  updating force-install for ios-config-xml
 *  does not create a directory for files
 *  adding faulty plugin
 *  reverting changes on action failures and other minor modifications
 *  checking error in shell commands
 *  adding old iOS project with support for {PhoneGap,Cordova}.plist
 *  changing iOS project root tag from cordova to widget
 *  updating plugins manifest files to support config.xml
 *  updating iOS tests to use either plist or config.xml approach
 *  deleting old ios project
 *  adding force action, handling configuration errors and correcting indentation
 *  explicit error messages for configuration updates
 *  Updating docs for variables/preferences
 *  Tests for variable substitution
 *  Variable substitution on standard config files
 *  Add variable command line options
 *  Fix error message that used an out-of-scope variable
 *  Support web-only plugins with no config changes
 *  Issue issue 35 problem with license header and shebang
 *  Adding apache license headers and copyright
 *  bumping version to 0.5.7
 *  [tests] corrected test plugin.xml path
 *  [ios] add <access /> support
 *  [android] add <access /> support
 *  [ios] added support for weakly linked frameworks
 *  [tests] fix for tests
 *  Issue issue 31 --list error message
 *  small refactor and added tests
 *  Fixed up some tests and added bb10 to the dummyplugin for testing
 *  tests for uninstall on bb10
 *  Added another test to see if it edited config.xml
 *  Adding tests for BlackBerry 10 and fixed some errors up
 *  added cordova.echo test plugin
 *  renamed platform tag for BlackBerry 10
 *  Minor cleanup
 *  Fixing spacing
 *  Adding in bb10 support
 *  hiding git clone messages
 *  Adds support for old plugin.xml spec using <plugins-plist> for config.xml iOS projects.
 *  bumping shelljs to 0.1.x and de-asyncing one of the tests as a weird way of making it work...
 *  Issue issue 24 Unexpected end of input fix
 *  fixing legacy android 1.0 plugins.xml
 *  updating version to 0.5.6
 *  Issue issue 17 Adding collision detection for iOS/Android
 *  adding list plugins
 *  Issue issue 16 first test
 *  Fixes issue 14 - npm install -g, shortcut is still named 'pluginstall'
 *  removing backup file
 *  Issue issue 14 wrong bin name
 *  adding config.xml tests
 *  adding test config.xml plugin/project
 *  updating configuration support
 *  bumping versions to 0.5.5
 *  updating package.json to relfect name change
 *  never ever check in node modules. baaad.
 *  updating one reference
 *  renaming project
 *  Issue issue 10 tests for webless plugins
 *  Bumping version number
 *  Issue issue 7 adding tests
 *  issue issue 6 fixing android asset copying
 *  issue issue 6 asset copying always creates a new dir
 *  updating version
 *  deleting package directory when deleting a android plugin
 *  updating package.json version
 *  fixing issue with new project format
 *  adding +x on pluginstall.js
 *  fixing some of the install/uninstall tests
 *  add/remove res files from/to the right folder
 *  adding resource files to Resources/ instead of Plugins/
 *  adding test projects
 *  add/remove res files from/to the right folder
 *  adding resource files to Resources/ instead of Plugins/
 *  cleaned up gitignore. node_modules is checked in since this is an app. See: http://www.mikealrogers.com/posts/nodemodules-in-git.html
 *  removed unused module in package.json
 *  resources are added to the resources dir in xcode now
 *  reorganized multiple children tests, though some still break
 *  fixed android tests
 *  refactored android code. Fixed several tests
 *  re-enabled www support and fixed the tests
 *  merged my code in for ios, and cleaned up the ios tests.
 *  updating README.rd
 *  updating cli.js
 *  adding test for ios uninstall process
 *  updating ios uninstall process
 *  updating package.json to use a different version of xcode
 *  adding uninstall tests for cordova android 2.0 projects
 *  fixing android config file update
 *  removing node-uuid dependency
 *  support for git repo URLs
 *  adding android one uninstall test
 *  updating android uninstall process
 *  first try
 *  support for git repo URLs
 *  removing node-uuid dependency
 *  support for git repo URLs
 *  0.5.0
 *  [gitignore] web-platform test dir
 *  [www] Added new platform 'www'
 *  0.4.0
 *  [android] support $PACKAGE_NAME interpolation
 *  ignoring the right file
 *  [android] add multiple children from plugin.xml
 *  [util] function to compare two XML nodes
 *  remove unnecessary test file
 *  [test] [android] flex out commented test
 *  [android] single fs.writeFile per config file
 *  [npm] new node-xcode + version bump
 *  polyfill fs.existsSync for 0.6.x
 *  0.3.7
 *  [android] handle config.xml and plugins.xml
 *  [util] config-changes
 *  updating/refactoring tests
 *  [npm] update xcode to 0.4.0
 *  0.3.6
 *  support old-style and new-style source-file paths
 *  0.3.5
 *  [ocd] formatting stuff
 *  [android] Fixed android manifest test
 *  [android] Fixed a couple of errors
 *  [android] Updated android install script
 *  [unit-tests] Fixed ios AndroidManifest test
 *  [unit-tests] Updating unit tests
 *  updated .gitignore
 *  [ios] Added support for whitelist additions via access xml element
 *  [ios] Added support for preserve-dirs attribute on sourcefiles and headerfiles
 *  sourcefiles and headerfiles now support the target-dir attribute
 *  [readme] dev
 *  [test] tear down to clean existing files
 *  support node 0.8
 *  0.3.3: new node-xcode (support for .framework)
 *  update node-xcode, bump version
 *  npm test script
 *  [README] point to cordova-plugin-spec
 *  [npm] 0.3.1
 *  [ios] handle weirdness with node-plist
 *  [ios] support for frameworks (.dylib)
 *  v0.2.4
 *  [ios] glob {PhoneGap,Cordova}
 *  [cli] usage message + version check
 *  v0.2.3
 *  [npm] ncp @ 0.2.6
 *  use standard elementtree
 *  0.2.2
 *  [npm] replacing fstream with ncp
 *  fixing case-sensitive require
 *  v0.2.1
 *  [ios] fix for plists in build dir
 *  v0.2.0
 *  README + LICENSE
 *  [ios] fixing plist writing
 *  [bin] added hashbang to cli.js
 *  [ios] modify pbxproj file
 *  [ios] adding key to PhoneGap.plist
 *  [npm] using a different fork of node-plist
 *  [ios] move resource files
 *  [refactor] moving fstream usage into one function
 *  [test] fixing async problem
 *  v0.1.1
 *  [npm] using patched node-elementtree
 *  [npm] xcode@0.2.1 + patched plist
 *  [repo] moving node_modules to .gitignore
 *  [ios] moving some files around
 *  ignoring test-copied files
 *  [npm] glob@3.0.1
 *  [ios] official entries
 *  [ios] fixtures for testing iOS install
 *  [test] adding platform=ios
 *  [npm] node-plist
 *  [npm] node-xcode @ 0.2.0
 *  [xml] change source-code to source-file
 *  [cli] super basic cli
 *  remove stupid "only" attribute
 *  [android] make changes to AndroidManifest
 *  [test] fixture rename
 *  [npm] patch for elementtree
 *  [test] more fixture stuff
 *  [android] editing plugins.xml
 *  [test] fixture enhancement
 *  [test] typo
 *  [test] fixtures for config files
 *  [android] move specified src file
 *  [test] refactor to use nCallbacks
 *  moving nCallbacks into own module
 *  [npm] mkdirp@0.2.2
 *  [test] further fixtures
 *  [android] first pass at android install
 *  gitignore
 *  [test] fixture files for testing
 *  internal api changes
 *  [test] change to plugin.xml structure
 *  [npm] fstream + rimraf
 *  style for test names
 *  parseXml functions and tests
 *  [npm] elementtree@0.1.1
 *  initialize function
 *  [npm] nodeunit@0.6.4
 *  initial package.json
 *  liftoff
 *  提交reviewboard配置文件


## 3.2.0-0.0.4 (Wed Mar 19 2014)


 *  removed hack for plugin statusbar, since it got promoted to core plugin now
 *  将keyboard和statusbar两个插件的id加入whitelist，以使其能够被publish到plugin registry上
 *  added xface-android to default engine
 *  added xface-ios to default engines
