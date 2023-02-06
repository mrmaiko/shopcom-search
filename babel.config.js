/*module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    //presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "react-native-reanimated/plugin",
        {
          //  globals: ["__detectObject"],
          globals: ["detectObject"],
        },
      ],
    ],
  };
};
*/

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "react-native-reanimated/plugin",
      {
        globals: ["__detectObject"],
      },
    ],
  ],
};
