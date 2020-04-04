// import * as pluralize from "pluralize";

// export function getPlural(str: any): string {
//   return pluralize.plural(str);
// }

export type TCheckResult = {
  result: boolean;
  info: { [s: string]: any };
  messages: { [s: string]: string };
  messagesArr: string[];
};

export type TMessages = { [s: string]: string };

export class KareValidate {
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
}
