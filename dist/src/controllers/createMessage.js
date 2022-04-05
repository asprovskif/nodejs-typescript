"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Messenger {
    constructor(port) {
        this.port = port;
    }
    messagePrint() {
        return `Node and express server is running on port ${this.port}`;
    }
}
exports.default = Messenger;
// namespace Messagespace {
//     export class Messenger {
//         port: number;
//
//         constructor(port) {
//             this.port = port;
//         }
//
//         messagePrint() {
//             return `Node and express server is running on port ${this.port}`;
//         }
//     }
// }
