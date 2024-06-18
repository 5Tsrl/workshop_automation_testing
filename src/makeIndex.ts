const arithmetic = require("../src/arithmetic");

import pug = require("pug");

import fs = require("fs");

let dir = "artifact/";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

let a = 123;
let b = 456;

fs.writeFileSync(
  dir + "index.html",
  pug.compileFile("src/indexTemplate.pug")({
    operations: [
      { title: "Addition", example: `${a} + ${b} = ${arithmetic.sum(a, b)}` },
    ],
  })
);
