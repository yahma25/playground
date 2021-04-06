module.exports = {
  presets: [
    // To use import syntax
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  plugins: [
    // To transform json to class
    '@babel/plugin-proposal-class-properties'
  ]
};