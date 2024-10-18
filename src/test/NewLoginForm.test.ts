import { LoginPage } from "../page-objects/Login.page"
import { MainPage } from "../page-objects/Main.page"
import { auth } from "../secrets/passwords"

describe('Login form', () => {
    let loginPage: LoginPage

    before(async () => {
        loginPage = new LoginPage(browser)
    })

    it('login with valid data', async () => {
        const loginPage: LoginPage = new LoginPage(browser)
        await loginPage.login(auth)

        const maimPage: MainPage = new MainPage(browser)
        const isDisplayedElement: boolean = await maimPage.isDisplayedUserLogin()

        expect(isDisplayedElement).toEqual(true)
    })

})
