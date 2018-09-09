const expect = require("chai").expect;
const logging = require("../../support/logging");

const fsExtra = require("fs-extra");
const https = require("https");
const fs = require("fs");
const download = require("download-file");
const md5File = require("md5-file");

const logger = logging.getLogger();

module.exports = function() {
    this.Given(/^I go to the website "([^"]*)"$/, url => {
        browser.url(url);
    });

    this.Then(/^I expect the title of the page to be "([^"]*)"$/, title => {
        expect(browser.getTitle()).to.be.eql(title);
    });

    this.Then(/^I expect the "([^"]*)" button to exist$/, name => {
        isExisting = browser.isExisting('input[value="' + name + '"]');
        expect(isExisting).to.be.true;
    });

    this.Then(/^I expect the field "([^"]*)" to be available$/, field => {
        browser.pause(2000);
        let fieldExists = browser.isExisting(field);
        expect(fieldExists).to.be.true;
    });

    this.When(/^I click the "([^"]*)" button$/, name => {
        browser.click('input[value="' + name + '"]');
    });

    this.Then(/^I click a button of "([^"]*)" class$/, buttonClass => {
        browser.click("." + buttonClass);
    });

    this.Then(/^I download the "([^"]*)" whitepaper and expect the md5 to be "([^"]*)"$/, (wpText, md5) => {
        logger.debug(`wpText is ${wpText}`);
        let boxLink = browser.getAttribute("=" + wpText, "href");
        logger.debug(JSON.stringify(boxLink, null, 2));
        browser.url(boxLink);

        const pathToChromeDownloads = "./chromeDownloads";
        fsExtra.removeSync(pathToChromeDownloads);
        fsExtra.mkdirsSync(pathToChromeDownloads);

        let fileName = `${wpText}.pdf`;
        logger.debug(`File to be saved at: ${fileName}`);

        var options = {
            directory: pathToChromeDownloads,
            filename: fileName
        };

        download(boxLink, options, function(err) {
            let hash = "";
            if (err) logger.error(`Error on file download: ${err}`);
            logger.info("File downloaded!");
            hash = md5File.sync(`${pathToChromeDownloads}/${fileName}`);
            logger.info(`The MD5 sum of ${fileName}: ${hash}`);
            expect(hash).to.be.eql(md5);
        });
    });

    this.Then(/^I follow the link "([^"]*)"$/, linkName => {
        let link = browser.getAttribute("=" + linkName, "href");
        logger.debug(`Got the following link: ${link}`);
        browser.url(link);
    });

    this.Then(/^I expect the url of the page to be "([^"]*)"$/, url => {
        expect(browser.getUrl()).to.be.eql(url);
    });

    // =============================== TAB steps =================================

    this.Then(/^I switch to the tab number (\d+)$/, tabNum => {
        var tabIds = browser.getTabIds();
        for (id of tabIds) {
            logger.info(id + " ---> " + browser.getUrl());
        }
        let newTab = tabIds[tabNum - 1];
        logger.info(`Switching to tab num ${tabNum} (${newTab})`);
        browser.switchTab(newTab);
    });

    // =============================== MISC steps ===============================

    this.When(/^I wait for "([^"]*)" seconds$/, seconds => {
        browser.pause(parseFloat(seconds * 1000));
    });

    this.When(/^I refresh the page$/, () => {
        browser.refresh();
    });
};
