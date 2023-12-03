import fetch, { Response } from "node-fetch";

class API {
    api= "https://api.qloat.com";

    call(path, method, data, headers) {
        return fetch(new URL(this.api + path), {
            method: method,
            headers: {
                ...headers
            },
            body: JSON.stringify(data)
        })
    }
}

export { API };