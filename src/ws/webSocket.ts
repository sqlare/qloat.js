import * as WebSocket from 'ws';

class WebSocketClient {
    private socket: WebSocket;

    constructor(url: string) {
        this.socket = new WebSocket(url);

        this.socket.on('open', () => {
            console.log('WebSocket connection opened');
        });

        this.socket.on('message', (data: WebSocket.Data) => {
            console.log('WebSocket message received:', data.toString());
        });

        this.socket.on('close', () => {
            console.log('WebSocket connection closed');
        });

        this.socket.on('error', (error) => {
            console.error('WebSocket error:', error);
        });
    }

    login(data: Record<string, string>) {
        const loginRequest = JSON.stringify(data);
        this.socket.send(loginRequest);
    }
}

export default WebSocketClient;
