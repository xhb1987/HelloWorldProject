import io from 'socket.io-client';
import config from './config';

export default class socketAPI {
    socket;

    init(messageCallback) {
        this.socket = new WebSocket(config.webSocketUrl);
        this.socket.onmessage = e => {
            console.log(e.data);
            messageCallback(e.data);
        };
        return new Promise((resolve, reject) => {
            this.socket.onopen = () => {
                if (this.socket.readyState === this.socket.OPEN) {
                    return resolve();
                }
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
            this.socket.onclose = e => {
                console.log(e.code, e.reason);
                resolve();
            };
        });
    }

    emit(data) {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                return reject('No socket connection.');
            }

            // this.socket.onopen = () => {
            if (this.socket.readyState === this.socket.OPEN) {
                this.socket.send(JSON.stringify(data));
                return resolve();
            }

            // };

            this.socket.onerror = error => {
                return reject(error);
            };

            // return this.socket.onopen(event, data, response => {
            //     // Response is the optional callback that you can use with socket.io in every request. See 1 above.
            //     if (response.error) {
            //         console.error(response.error);
            //         return reject(response.error);
            //     }

            //     return resolve();
            // });
        });
    }

    on(fun) {
        // No promise is needed here, but we're expecting one in the middleware.
        return new Promise(resolve => {
            if (!this.socket) return reject('No socket connection.');
            if (this.socket.readyState === this.socket.OPEN) {
                this.socket.onmessage = e => {
                    console.log(e.data);
                    fun(e.data);
                };
            }
            return resolve();
            this.socket.onerror = error => {
                return reject(error);
            };
            // this.socket.onmessage = fun;
            // this.socket.on(event, fun);
            // return resolve();
        });
    }
}
