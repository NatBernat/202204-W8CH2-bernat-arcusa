"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Robot {
    constructor(type) {
        this.type = type;
        this.battery = 100;
        this.name = this.generateName();
    }
    reset() {
        this.battery = 100;
        this.name = this.generateName();
    }
    work() {
        let message;
        switch (this.type) {
            case "Cleaner":
                message = "Larala larita, I clean my little house";
                break;
            case "Waiter":
                message = "Do you feel like a mini of fuet?";
                break;
            case "Developer":
                message = "JavaScript is cool - I develop with JavaScript -> I'm cool";
                break;
        }
    }
    generateName() {
        let name = "";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 4; i++) {
            if (i !== 3) {
                name += chars.charAt(Math.random() * chars.length);
                continue;
            }
            name += Math.floor(Math.random() * (99 - 10) + 10);
        }
        return name;
    }
}
exports.default = Robot;
