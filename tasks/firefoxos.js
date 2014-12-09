'use strict';

module.exports = function (grunt) {
  var ffos = require('node-firefoxos-utils');
  var path = require('path');

  grunt.registerTask('ffosstopb2g', 'Stops B2G', function () {
    var done = this.async();
    ffos.stopB2G(function () {
      console.log('B2G process stopped');
      done();
    });
  });

  grunt.registerTask('ffosstartb2g', 'Starts B2G', function () {
    var done = this.async();
    ffos.startB2G(function () {
      console.log('B2G process started');
      done();
    });
  });

  grunt.registerTask('ffosgetprefs', 'Get FirefoxOS prefs file', function () {
    var done = this.async();
    ffos.pullPrefs(function onRead(error, data){
      if (error != null)
        console.log("error retrieving prefs.js " + error);
      else
        console.log("prefs.js retrieved from the device");
      done();
    });
  });

  grunt.registerTask('ffossetprefs', 'Set FirefoxOS prefs file', function () {
    var done = this.async();
    ffos.pushPrefs(function onRead(error, data){
      if (error != null)
        console.log("error writing prefs.js " + error);
      else
        console.log("prefs.js pushed to the device");
      done();
    });
  });
};

