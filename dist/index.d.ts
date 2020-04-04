export declare type TCheckResult = {
    result: boolean;
    info: {
        [s: string]: any;
    };
    messages: {
        [s: string]: string;
    };
    messagesArr: string[];
};
export declare type TMessages = {
    [s: string]: string;
};
export declare class KareValidate {
    check(value: any, rules: {
        [key: string]: any;
    }, messages?: TMessages): TCheckResult;
}
