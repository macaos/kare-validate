"use strict";
// import * as pluralize from "pluralize";
Object.defineProperty(exports, "__esModule", { value: true });
class KareValidate {
    check(value, rules, messages) {
        const returnValue = {
            result: true,
            info: Object.assign({}, rules),
            messages: Object.assign({}, rules),
            messagesArr: []
        };
        return returnValue;
    }
}
exports.KareValidate = KareValidate;
