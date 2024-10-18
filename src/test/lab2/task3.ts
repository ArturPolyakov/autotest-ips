class Car {
    private state: string = 'Выключена'
    public turnOn() {
        this.state = 'Включена'
    }
    public turnOff() {
        this.state = 'Выключена'
    }
    public getState() {
        console.log(this.state)
    }
}
const car: Car = new Car()

car.turnOn()
car.getState()
