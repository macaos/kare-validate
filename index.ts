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
      result: true,
      info: Object.assign({}, rules),
      messages: Object.assign({}, rules),
      messagesArr: []
    };

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
