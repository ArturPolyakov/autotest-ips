function checkAccess(age: number) {
    if (age >= 18) {
        console.log('Страница доступна')
    } else {
        console.log('Старница недоступна')
    }
}
checkAccess(18)
