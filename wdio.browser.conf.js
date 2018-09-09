var merge = require("deepmerge");
var wdioConf = require("./wdio.conf.js");
var path = require("path");

const pathToDownload = path.resolve("chromeDownloads");

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
    capabilities: [
        {
            browserName: "chrome",
            chromeOptions: {
                args: ["--window-size=1280,800", "user-data-dir=./chrome/user-data"],
                prefs: {
                    "download.default_directory": pathToDownload
                    // "profile.default_content_setting_values.automatic_downloads": 2
                }
            }
        }
    ],
    port: "9515",
    path: "/",
    services: ["chromedriver"]
});
