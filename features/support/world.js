(function (module) {
     var webdriverio = require('webdriverio'),
         chai = require('chai'),
         World;

     // cucumber world
     World = function () {
          this.World = function (next) {
               // this.whatever becomes available as this.whatever in cucumber steps

               /**
               * the chai assertion lib
               * @type {object}
               */
               this.expect = chai.expect;
          };
     };

  module.exports = World;
}(module));
