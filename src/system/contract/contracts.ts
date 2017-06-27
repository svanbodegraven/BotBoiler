import * as builder from 'botbuilder';

interface ILogService{
    log(logMessage: string);
    setLogCallback(callback:(logMessage:string) => any);
}

interface INetClient{
    postJson<TUpload, TResult>(url:string, path:string, postData:TUpload, headers?:any):Promise<TResult>;
}

interface IHostService{
    init(connector:any);
}

interface IBotService{
    boot();
}

interface IDialog {
    id: string;
    name: string;
    trigger: string | RegExp;
    waterfall: builder.IDialogWaterfallStep[];
}

let contractSymbols = {
    ILogService: Symbol("ILogService"),    
    IConfig: Symbol("IConfig"),
    IHostService: Symbol("IHostService"),
    IBotService: Symbol("IBotService"), 
    INetClient: Symbol("INetClient")
}

export {contractSymbols, ILogService, IHostService, IBotService, IDialog, INetClient};