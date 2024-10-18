let temp: number = 19
if (temp < -10) {
    console.log('Очень холодно')
} else if (temp > -10 && temp < 10) {
    console.log('Холодно')
} else if (temp >= 10 && temp < 18) {
    console.log('Прохладно')
} else if (temp >= 18 && temp < 25) {
    console.log('Тепло')
} else {
    console.log('Жарко')
}