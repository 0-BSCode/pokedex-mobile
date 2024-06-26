process.env.EXPO_ROUTER_APP_ROOT = '../../app';

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      ['module:react-native-dotenv'],
    ],
    
  };
};
