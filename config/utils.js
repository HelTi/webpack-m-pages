let path = require('path');
/*设置生产环境与开发环境路径*/
exports.assetsPath = function (_path) {
    let assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? 'static'
        : 'static'
    console.log(path.posix.join(assetsSubDirectory, _path))
    return path.posix.join(assetsSubDirectory, _path)
}