import { Login, User } from "@qloat.js/core";

export declare class Client {
    public token: string;
    
    public user: User | null = null;

    constructor(token: ClientOptions);

    public async login(): void;
}

export declare interface ClientOptions {
    token: string;
}