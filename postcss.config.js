
var postcssPr = require('postcss-pr');
var px2rem = require('postcss-px2rem');
var autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
        px2rem({remUnit: 72}),
        autoprefixer,
        postcssPr({fontSize: 32})
    ]
    /*  // to edit target browsers: use "browserlist" field in package.json
     "autoprefixer": {},
     }*/
}