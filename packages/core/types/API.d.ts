import { Response } from "node-fetch";

export declare class API {
    private api: string;

    public call(path: string, method: string, data: Object, headers: Object): Promise<Response>;
}

export { API };