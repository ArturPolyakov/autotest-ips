async function print(): Promise<void> {
    const object: Promise<string> = new Promise(function (resolve) {
        setTimeout(() => resolve('resolve'), 1000)
    })
    console.log('Fulfilled:', await object)
}

print()

