"use strict";
// import * as pluralize from "pluralize";
Object.defineProperty(exports, "__esModule", { value: true });
class KareValidate {
    constructor() {
        /** ************************************************
         * rules
         */
        this.rules = {
            min: () => { },
            max: () => { }
        };
    }
    /**
     * Validation Check
     * @param value Verification value
     * @param rules Validation rules - ex:{ required:true, min:2, max:4 }
     * @param messages Failure notice messages
     */
    check(value, rules, messages) {
        const returnValue = {
            result: true,
            info: Object.assign({}, rules),
            messages: Object.assign({}, rules),
            messagesArr: []
        };
        return returnValue;
    }
    /** ************************************************
     * utils
     */
    isRequired(value) {
        if (value === false)
            return false;
        if (value === undefined)
            return false;
        if (value === null)
            return false;
        if (value === "")
            return false;
        return true;
    }
    isBlank(value) {
        return (typeof value === "undefined" ||
            value === null ||
            this.testRegex(value, /^[\s]*$/));
    }
    testRegex(value, regex) {
        return value.toString().match(regex) !== null;
    }
}
exports.KareValidate = KareValidate;
