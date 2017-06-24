var path = require('path');
const fs = require('fs');
/*设置生产环境与开发环境路径*/
exports.assetsPath = function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? 'static'
        : 'static'
    return path.posix.join(assetsSubDirectory, _path)
}