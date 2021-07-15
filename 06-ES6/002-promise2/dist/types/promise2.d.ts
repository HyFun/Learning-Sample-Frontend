declare class Promise2 {
    status: string;
    value: any;
    reason: any;
    onFulfilledCallback: Array<Function>;
    onRejectedCallback: Array<Function>;
    constructor(executor: Function);
    then(onResolve: Function, onReject: Function): Promise2;
    static resolve: (value: any) => Promise2;
    static reject: (reason: any) => Promise2;
    /**
     * 提供给promise A+ 测试使用的方法
     */
    static deferred: () => any;
}
export default Promise2;
