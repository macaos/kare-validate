"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize = require("pluralize");
function getPlural(str) {
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
