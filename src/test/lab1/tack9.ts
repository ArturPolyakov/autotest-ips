
const honest: number[] = []
const odd: number[] = []
for (let number = 0; number <= 100; number++) {
    if (number % 2 == 0) {
        honest.push(number)
    }
    else {
        odd.push(number)
    }
}
console.log([...honest, ...odd])

