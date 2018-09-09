var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
    capabilities: [
        {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--headless', '--disable-gpu', '--window-size=1280,800']
        }
    }],
    services: ['selenium-standalone', 'chromedriver']
});
