export default class Response {
    public Status: boolean;
    public Data: any;
    public Messages: string;
    public Exception: string;

    constructor(status: boolean, data: any, mess: string, exception: string) {
        this.Status = status;
        this.Data = data;
        this.Messages = mess;
        this.Exception = exception;
    }

}