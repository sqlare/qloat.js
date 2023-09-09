import webSocketClient from "../ws/webSocket";

class client {
    private webSocketClient: webSocketClient;

    constructor() {
        this.webSocketClient = new webSocketClient('wss://ws.qloat.com');
    }

    login(token: string) {
        const loginRequest = { type: 'auth', token: token };
        this.webSocketClient.login(loginRequest);
    }
}

export default client;