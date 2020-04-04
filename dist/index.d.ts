declare type TRuleVal = string | boolean | number;
declare type TCheckResult = {
    result: boolean;
    info: {
        [s: string]: any;
    };
    messages: {
        [s: string]: string;
    };
    messagesArr: string[];
};
declare type TMessages = {
    [s: string]: string;
};
export declare class KareValidate {
    constructor();
    /**
     * Validation Check
     * @param value Verification value
     * @param rules Validation rules - ex:{ required:true, min:2, max:4 }
     * @param messages Failure notice messages
     */
    check(value: any, rules: {
        [key: string]: any;
    }, messages?: TMessages): TCheckResult;
    /** ************************************************
     * rules
     */
    rules: {
        [key: string]: (val: any, ruleVal: TRuleVal) => void;
    };
    /** ************************************************
     * utils
     */
    isRequired(value: any): boolean;
    isBlank(value: any): boolean;
    testRegex(value: any, regex: RegExp): boolean;
}
export {};
