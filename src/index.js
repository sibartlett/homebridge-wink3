const { pluginName, platformName } = require("./constants");
const WinkPlatform = require("./WinkPlatform");

module.exports = homebridge => {
  homebridge.registerPlatform(pluginName, platformName, WinkPlatform, true);
};
