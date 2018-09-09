# Melior Web Automation web-driver tests

Browser automated tests for Melior websites.
This tests are based on [Cucumber](https://docs.cucumber.io) and
[webdriver](http://webdriver.io/) that takes care of all the underlying
[Selenium web-driver](https://docs.seleniumhq.org/docs/03_webdriver.jsp#setting-up-webdriver-project) session details.:
- [webdriver docs](http://webdriver.io/guide.html)
- [webdriver API docs](http://webdriver.io/api.html)


More specifically for the in-browser tests we use:
- [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/home)


### Install

* Install nodejs [https://nodejs.org/en/download/](https://nodejs.org/en/download/) 7.5

* Install npm [https://docs.npmjs.com/cli/install](https://docs.npmjs.com/cli/install) 4.2

* Install the dependencies
```
npm install
```

### Run tests in headless mode
```
npm test
```

### Run tests in browser
```
npm test-browser
```
or
```
./node_modules/.bin/gulp browser-test
```

### Test details
Any features having the tag @Pending will be skipped when running the tests.
For additional tags configuration check support/tagProcessor.js

### Config

* There is a general wdio configuration file ``wdio.config.js``.
For additional customization for running the tests in headless or no headless mode
make changes to ``wdio.headless.config.js`` and  ``wdio.browser.config.js``.
