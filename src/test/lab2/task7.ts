async function print(): Promise<void> {
    const object: Promise<string> = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('resolve'), 1000),
            setTimeout(() => reject('reject'), 100)
    })
    try {
        console.log('Fulfilled:', await object)
    } catch (error) {
        console.log('Rejected:', error)
    }
}

print()
