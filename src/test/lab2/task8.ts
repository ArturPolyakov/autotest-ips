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
    public setSpeed(newSpeed: number) {
        if (this.state === 'Выключена') {
            console.log('При выключенном автомобиле скорость устанавливать нельзя')
        }
        else {
            if (newSpeed < 0 || newSpeed > 100) {
                console.log('Минимальная скорость 0, максимальная 100')
            }
            else {
                console.log('Ваша скорость:', newSpeed)
            }
        }
    }
}

const car: Car = new Car()

car.turnOn()
car.getState()
car.setSpeed(132)