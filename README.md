# pwa-manga-reader

## Services

### Initial

- `yarn init`
- `yarn add @babel/core @babel/register @babel/preset-env`
- `yarn add babel-watch`

```js
// babel.config.js
module.exports = {
  presets: ['@babel/env'],
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

## Reader-App

### Initial Reader-App

- `yarn init`
- `yarn add -D parcel-bundler`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Manga Reader</title>
</head>
<body>
  <div id="app"></div>
  <script src="index.js"></script>
</body>
</html>
```

```js
import React from 'react'
import { render } from 'react-dom';

render(<h1>Working</h1>, document.getElementById('app'));
```

```json
"scripts": {
  "watch": "parcel src/index.html"
},
```
