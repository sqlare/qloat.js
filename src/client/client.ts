import webSocketClient from "../ws/webSocket";

class client {
    private webSocketClient: webSocketClient;

    constructor() {
        this.webSocketClient = new webSocketClient('ws://152.67.211.102:3001');
    }

    login(token: string) {
        const loginRequest = { type: 'auth', token: token };
        this.webSocketClient.login(loginRequest);
    }
}

export default client;