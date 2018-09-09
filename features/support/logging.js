let conf = {
    // format: "${timestamp} <${title}> ${file}:${line} ${method} ${message}",
    format: "[${title}] ${file}:${line} => ${message}",
    filters: {
        debug: 'magenta',
        info: 'green',
        notice: 'cyan',
        warning: 'yellow',
        error: 'red',
        critical: 'blue',
        alert: 'yellow',
        emergency: 'red'
    }
};

let Logging = require('js-logging');
let logger = new Logging(conf);

module.exports = {
    getLogger: function() {
        return logger;
    }
}
