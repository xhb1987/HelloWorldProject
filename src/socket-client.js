import io from 'socket.io-client';
import config from './config';

export default class socketAPI {
    socket;

    connect() {
        this.socket = new WebSocket('ws://39.105.23.168:8081/neighbors-talk/talk');
        return new Promise((resolve, reject) => {
            this.socket.onopen = () => {
                this.socket.send(JSON.stringify({ funCode: '', sessionToken: global.token }));
                resolve();
            };

            this.socket.onerror = error => {
                reject(error);
            };
            // this.socket.on('connect', () => resolve());
            // this.socket.on('connect_error', error => reject(error));
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
            this.socket.send(JSON.stringify(data));
            resolve();

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

    on(event, fun) {
        // No promise is needed here, but we're expecting one in the middleware.
        return new Promise(resolve => {
            if (!this.socket) return reject('No socket connection.');
            this.socket.onmessage = e => {
                console.log(e);
                fun(e);
            };
            // this.socket.on(event, fun);
            resolve();
        });
    }
}
