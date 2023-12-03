import { Login } from "@qloat.js/core";

class Client {
    constructor(token) {
        this.token = token.token;
    }

    async login() {
        return new Promise(async (resolve, reject) => {
            const login = new Login(this.token);
            await login.login();
    
            login.error ? reject(login.error) : this.user = login.user;
            resolve(this.user);
        })
    }
}

export { Client };