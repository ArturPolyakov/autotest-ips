const object: Promise<string> = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('resolve'), 1000),
        setTimeout(() => reject('reject'), 100)
})
object.then(
    value => console.log('Fulfilled:', value),
    error => console.log('Rejected:', error)
)




