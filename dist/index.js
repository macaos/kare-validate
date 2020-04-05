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
            result: false,
            info: Object.assign({}, rules),
            messages: Object.assign({}, rules),
            messagesArr: []
        };
        let allCheck = true;
        for (let i in rules) {
            const ruleName = i;
            const ruleValue = rules[i];
            const func = this.rules[ruleName];
            if (func) {
                const check = func(value, ruleValue);
                if (allCheck)
                    allCheck = check;
                const getMessage = this.getMessage(check, value, ruleName, ruleValue, messages);
                returnValue.info[ruleName] = check;
                returnValue.messages[ruleName] = getMessage;
                if (getMessage !== "")
                    returnValue.messagesArr.push(getMessage);
            }
            else {
                // There are no rules.
            }
        }
        returnValue.result = allCheck;
        return returnValue;
    }
    getMessage(check, value, ruleName, ruleValue, inMessages) {
        return "";
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
