function sum(a: number, b: number) {
    console.log('сумма:', a + b)
}
function sub(a: number, b: number) {
    console.log('разница', a - b)
}
function multi(a: number, b: number) {
    console.log('произведение', a * b)
}
function divi(a: number, b: number) {
    console.log('деление', a / b)
}
function calc(
    callback: (a: number, b: number) => void,
    a: number,
    b: number,
) {
    callback(a, b)
}
calc(sum, 5, 4)