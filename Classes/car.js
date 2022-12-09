class Car {
    constructor(name, maxSpeed, timeToMaxSpeed) {
        this.name = name;
        this.currentSpeed = 0;
        this.maxSpeed = maxSpeed;
        this.timeToMaxSpeed = timeToMaxSpeed;
    }

    startEngine() {
        console.log(this.name.toUpperCase());
        let time = 0;
        while (time <= this.timeToMaxSpeed) {
            console.log(`${time} seconds`);
            console.log(`${this.currentSpeed.toFixed(2)} km/h`);
            time++;
            this.currentSpeed < this.maxSpeed
                ? (this.currentSpeed += this.maxSpeed / this.timeToMaxSpeed)
                : this.maxSpeed;
        }
        this.currentSpeed = 0;
    }
}

function newCar() {}

const ferrari = new Car("ferrari", 250, 10);

const mercedes = new Car("mercedes", 300, 6.3);

mercedes.startEngine();
console.log(' ')
ferrari.startEngine();