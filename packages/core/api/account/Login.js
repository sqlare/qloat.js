import { Response } from "node-fetch";
import { API, User } from "../../index.js";

class Login {
    path = "/account/token";

    constructor(token) {
        this.token = token;
    }

    async login() {
        await new API()
            .call(this.path, "POST", { token: this.token }, { "Content-Type": "application/json" })
            .then((res) => {
                if (res.status !== 200) {
                    this.error = res.statusText;
                    return;
                }

                res.json().then((data) => {
                    this.user = new User(data.id, data.email, data.displayName, data.uid, data.type);
                })
            })
            .catch((err) => {
                this.error = err.message;
            })
    }
}

export { Login };