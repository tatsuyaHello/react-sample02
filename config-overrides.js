module.exports = function override(config) {
  // 出力ファイル名を固定
  config.output.filename = "static/js/[name].js";
  config.output.chunkFilename = "static/js/[name].chunk.js";

  // CSS も固定
  config.plugins.forEach((plugin) => {
    if (plugin.constructor.name === "MiniCssExtractPlugin") {
      plugin.options.filename = "static/css/[name].css";
      plugin.options.chunkFilename = "static/css/[name].chunk.css";
    }
  });

  return config;
};
