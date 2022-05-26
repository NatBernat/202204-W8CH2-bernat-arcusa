type RobotType = "Cleaner" | "Waiter" | "Developer";

interface IRobot {
  name: string;
  battery: number;
  type: RobotType;
  work: () => void;
  reset: () => void;
}

export default class Robot implements IRobot {
  battery: number;
  name: string;
  constructor(public type: RobotType) {
    this.battery = 100;
    this.name = this.generateName();
  }
  reset() {
    this.battery = 100;
    this.name = this.generateName();
  }
  work() {
    let message: string;

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

  generateName(): string {
    let name: string = "";
    const chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
