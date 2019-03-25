#!/usr/bin/env node
module.exports = () => {
    let lib  = {};

    lib.name = require("../lib/index")();
    console.log(lib.name());
    return lib;
}