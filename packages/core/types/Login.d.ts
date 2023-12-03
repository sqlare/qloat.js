export declare class Login {
    private path: string;

    public token: string;
    public user: User | null = null;
    
    public error: string | null = null;

    constructor(token: string)

    public async login(): void;
}

export { Login };