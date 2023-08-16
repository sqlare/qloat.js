class webSocketClient {
    private socket: WebSocket;
  
    constructor(url: string) {
        this.socket = new WebSocket(url);
  
        this.socket.onopen = (event) => {
            console.log('WebSocket connection opened');
        };
  
        this.socket.onmessage = (event) => {
            console.log('WebSocket message received:', event.data);
        };
  
        this.socket.onclose = (event) => {
            console.log('WebSocket connection closed');
        };
        
        this.socket.onerror = (event) => {
            console.error('WebSocket error:', event);
        };
    }

    login(data: Record<string, string>) {
        const loginRequest = JSON.stringify(data);
        this.socket.send(loginRequest);
    }
}

export default webSocketClient;