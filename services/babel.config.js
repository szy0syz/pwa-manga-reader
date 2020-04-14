module.exports = {
  presets: ["@babel/env"],
  plugins: [
    [
      "module-resolver",
      {
        // root: ["./src"],
        alias: {
          "#root": "./src",
        },
      },
    ],
  ],
};
