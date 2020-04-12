# pwa-manga-reader

## Services

### Initial

- `yarn init`
- `yarn add @babel/core @babel/register @babel/preset-env`
- `yarn add babel-watch`

```js
// babel.config.js
module.exports = {
  presets: ['env'],
};
```

```json
// package.json
"devDependencies": {
  "@babel/core": "^7.9.0",
  "@babel/preset-env": "^7.9.5",
  "@babel/register": "^7.9.0",
  "babel-watch": "^7.0.0"
},
"scripts": {
  "watch": "babel-watch index.js"
}
```
