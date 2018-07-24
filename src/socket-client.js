import io from 'socket.io-client';
import config from './config';

export default class socketAPI {
    socket;

    init(messageCallback, disconnectCallback) {
        this.socket = new WebSocket(config.webSocketUrl);
        this.socket.onerror = error => {
            console.log(error);
        };
        this.socket.onmessage = e => {
            console.log(e.data);
            messageCallback(e.data);
        };

        this.socket.onclose = () => {
            console.log('Im close function');
            disconnectCallback();
        };

        return new Promise((resolve, reject) => {
            this.socket.onopen = () => {
                return resolve();
            };

            this.socket.onerror = error => {
                return reject(error);
            };
        });
    }

    connect(event, onOpenFunc, onMessageFund) {
        return new Promise((resolve, reject) => {
            this.socket.onopen = onOpenFunc;
            this.socket.onmessage = onMessageFund;
        });
    }

    disconnect() {
        return new Promise((resolve, reject) => {
            // this.socket.disconnect(() => {
            //     this.socket = null;
            //     resolve();
            // });
            this.socket.close();
        });
    }

    emit(data, reconnectCallback) {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                return reject('No socket connection.');
            }

            // this.socket.onopen = () => {
            if (this.socket.readyState === this.socket.OPEN) {
                this.socket.send(JSON.stringify(data));
                return resolve();
            }

            if (this.socket.readyState === this.socket.CLOSED) {
                this.socket.close();
                return reject();
            }

            return reject();
        });
    }

    detect() {
        return new Promise((resolve, reject) => {
            if (!this.socket || this.socket.readyState === this.socket.CLOSED) {
                return reject();
            }

            return resolve();
        });
    }
}
