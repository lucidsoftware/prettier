"use strict";

const createLanguage = require("../utils/create-language");
const printer = require("./printer-postcss");
const options = require("./options");

const languages = [
  createLanguage(require("linguist-languages/data/CSS"), () => ({
    since: "1.4.0",
    parsers: ["css"],
    vscodeLanguageIds: ["css"],
  })),
  createLanguage(require("linguist-languages/data/PostCSS"), () => ({
    since: "1.4.0",
    parsers: ["css"],
    vscodeLanguageIds: ["postcss"],
  })),
  createLanguage(require("linguist-languages/data/Less"), () => ({
    since: "1.4.0",
    parsers: ["less"],
    vscodeLanguageIds: ["less"],
  })),
  createLanguage(require("linguist-languages/data/SCSS"), () => ({
    since: "1.4.0",
    parsers: ["scss"],
    vscodeLanguageIds: ["scss"],
  })),
];

const printers = {
  postcss: printer,
};

const parsers = {
  // TODO: switch these to just `postcss` and use `language` instead.
  get css() {
    return require("./parser-postcss").parsers.css;
  },
  get less() {
    return require("./parser-postcss").parsers.less;
  },
  get scss() {
    return require("./parser-postcss").parsers.scss;
  },
};

module.exports = {
  languages,
  options,
  printers,
  parsers,
};
