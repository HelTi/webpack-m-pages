var glob = require("glob");
var path = require("path");

var PAGES_DIR = path.resolve(__dirname, "../src/pages");

exports.entries = function() {
  var entryFiles = glob.sync(PAGES_DIR + "/*/*.js");
  var resultEntry = {};
  entryFiles.forEach(filePath => {
    var filename = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );
    resultEntry[filename] = filePath;
  });
  return resultEntry;
};

exports.htmlPages = function() {
  var entryHtmls = glob.sync(PAGES_DIR + "/*/*.html");
  var resultHtmlPages = [];

  entryHtmls.forEach(filePath => {
    var filename = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );

    var htmlPlugin = {
      template: filePath,
      filename: filename + ".html",
      chunks: filename,
      inject: true
    };

    resultHtmlPages.push(htmlPlugin);
  });

  return resultHtmlPages;
};
