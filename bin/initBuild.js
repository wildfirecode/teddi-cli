const initBuild = () => {
    const Webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const webpackConfig = require('./webpack.prod.config.js');

    const compiler = Webpack(webpackConfig);
    
    compiler.run(async (error, stats) => {
        if (error) {
          return reject(error);
        }
        console.log(
          stats.toString({
            chunks: false, // 使构建过程更静默无输出
            colors: true, // 在控制台展示颜色
          })
        );
  
      });
}



module.exports = initBuild;