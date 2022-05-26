"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Waiter = exports.Cleaner = void 0;
class Robot {
    constructor(name) {
        this.name = name;
        this.battery = 100;
    }
    reset() { }
}
class Cleaner extends Robot {
    constructor(name) {
        super(name);
        this.type = "Cleaner";
    }
    work() {
        console.log("Larala larita, I clean my little house");
    }
}
exports.Cleaner = Cleaner;
class Waiter extends Robot {
    constructor(name) {
        super(name);
        this.type = "Waiter";
    }
    work() {
        console.log("Do you feel like a mini of fuet?");
    }
}
exports.Waiter = Waiter;
class Developer extends Robot {
    constructor(name) {
        super(name);
        this.type = "Developer";
    }
    work() {
        console.log("Do you feel like a mini of fuet?");
    }
}
exports.Developer = Developer;
