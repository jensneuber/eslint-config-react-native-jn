module.exports = {
  "plugins": ["import"],
  "extends": [
    "@react-native-community",
    "prettier",
    "plugin:import/typescript",
  ],
  "rules": {
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],
     "max-len": [
      "error",
      120
    ],
  }
};