export { default as mangas } from "./mangas";

// import fs from "fs";
// import path from "path";

// const thisfile = path.basename(__filename);
// const fieldsObj = {};

// fs.readFileSync(__dirname)
//   .filter((filename) => !filename.startsWith(".") && filename !== thisfile)
//   .forEach((filename) => {
//     const filenameWithoutExtension = filename.replace(/\..+$/, "");
//     fieldsObj[filenameWithoutExtension] = require(`./${filenameWithoutExtension}`).default();
//   });

// export default () => fileObj;
