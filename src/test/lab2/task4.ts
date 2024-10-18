const object: Promise<string> = new Promise(function (resolve) {
    setTimeout(() => resolve('resolve'), 1000)
})
object.then(
    value => console.log('Fulfilled:', value)
)