// import * as pluralize from "pluralize";

// export function getPlural(str: any): string {
//   return pluralize.plural(str);
// }

type TRuleVal = string | boolean | number;

type TCheckResult = {
  result: boolean;
  info: { [s: string]: any };
  messages: { [s: string]: string };
  messagesArr: string[];
};

type TMessages = { [s: string]: string };

export class KareValidate {
  constructor() {}
  /**
   * Validation Check
   * @param value Verification value
   * @param rules Validation rules - ex:{ required:true, min:2, max:4 }
   * @param messages Failure notice messages
   */
  check(
    value: any,
    rules: { [key: string]: any },
    messages?: TMessages
  ): TCheckResult {
    const returnValue: TCheckResult = {
      result: false,
      info: Object.assign({}, rules),
      messages: Object.assign({}, rules),
      messagesArr: []
    };

    let allCheck: boolean = true;

    for (let i in rules) {
      const ruleName: string = i;
      const ruleValue: any = rules[i];
      const func: any = this.rules[ruleName];
      if (func) {
        const check = func(value, ruleValue);
        if (allCheck) allCheck = check;
        const getMessage = this.getMessage(
          check,
          value,
          ruleName,
          ruleValue,
          messages
        );
        returnValue.info[ruleName] = check;
        returnValue.messages[ruleName] = getMessage;
        if (getMessage !== "") returnValue.messagesArr.push(getMessage);
      } else {
        // There are no rules.
      }
    }
    returnValue.result = allCheck;

    return returnValue;
  }

  /** ************************************************
   * rules
   */
  rules: {
    [key: string]: (val: any, ruleVal: TRuleVal) => void;
  } = {
    min: () => {},
    max: () => {}
  };

  getMessage(
    check: boolean,
    value: any,
    ruleName: string,
    ruleValue: TRuleVal,
    inMessages?: TMessages
  ): string {
    return "";
  }

  /** ************************************************
   * utils
   */
  isRequired(value: any): boolean {
    if (value === false) return false;
    if (value === undefined) return false;
    if (value === null) return false;
    if (value === "") return false;
    return true;
  }
  isBlank(value: any): boolean {
    return (
      typeof value === "undefined" ||
      value === null ||
      this.testRegex(value, /^[\s]*$/)
    );
  }
  testRegex(value: any, regex: RegExp) {
    return value.toString().match(regex) !== null;
  }
}
