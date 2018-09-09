
const gulp = require('gulp');
const path = require('path');
const Launcher = require('webdriverio/build/lib/launcher');
const wdio = new Launcher(path.join(__dirname, 'wdio.headless.conf.js'));
const wdioBrowser = new Launcher(path.join(__dirname, 'wdio.browser.conf.js'));

gulp.task('test', [], () => {
    return wdio.run().then(code => {
        process.exit(code);
    }, error => {
        console.error('Launcher failed to start the test', error.stacktrace);
        process.exit(1);
    });
});

gulp.task('browser-test', [], () => {
    return wdioBrowser.run().then(code => {
        process.exit(code);
    }, error => {
        console.error('Launcher failed to start the test', error.stacktrace);
        process.exit(1);
    });
});
