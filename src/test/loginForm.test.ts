import { auth } from "../secrets/passwords"

describe('Login form', () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login')
    })

    it('login with valid data', async () => {
        await browser.$('//*[@id="login"]').waitForDisplayed({
            timeoutMsg: 'Login form was not displayed',
        })

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Email input was not displayed',
        })

        await browser.$('//*[@id="login_field"]').setValue(auth.login)

        await browser.$('//*[@id="password"]').waitForDisplayed({
            timeoutMsg: 'Password input was not displayed',
        })

        await browser.$('//*[@id="password"]').setValue(auth.password)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clicable',
        })

        await browser.$('//*[@type="submit"]').click()

        const isDisplayedElement: boolean = await (await browser.$('//form[@action="/sessions/verified-device"] | //*[@data-login="ArturPolyakov"]')).isDisplayed()

        expect(isDisplayedElement).toEqual(true)
    })

    it('login with invalid password', async () => {
        await browser.$('//*[@data-login="ArturPolyakov"]').waitForClickable({
            timeoutMsg: 'Button label was not clicable',
        })

        await browser.$('//*[@data-login="ArturPolyakov"]').click()

        await browser.$('//*[@id=":r10:"]/div').waitForClickable({
            timeoutMsg: 'Log out button was not clicable',
        })

        await browser.$('//*[@id=":r10:"]/div').click()

        await browser.reloadSession()

        await browser.url('https://github.com/login')

        await browser.$('//*[@id="login"]').waitForDisplayed({
            timeoutMsg: 'Login form was not displayed',
        })

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Email input was not displayed',
        })

        await browser.$('//*[@id="login_field"]').setValue(auth.login)

        await browser.$('//*[@id="password"]').waitForDisplayed({
            timeoutMsg: 'Password input was not displayed',
        })

        await browser.$('//*[@id="password"]').setValue('12345Q')

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clicable',
        })

        await browser.$('//*[@type="submit"]').click()

        const isDisplayedElement: boolean = await (await browser.$('//*[@id="js-flash-container"]/div/div/div')).isDisplayed()

        expect(isDisplayedElement).toEqual(true)
    })

    it('login with invalid login', async () => {
        await browser.url('https://github.com/login')

        await browser.$('//*[@id="login"]').waitForDisplayed({
            timeoutMsg: 'Login form was not displayed',
        })

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Email input was not displayed',
        })

        await browser.$('//*[@id="login_field"]').setValue('Artur')

        await browser.$('//*[@id="password"]').waitForDisplayed({
            timeoutMsg: 'Password input was not displayed',
        })

        await browser.$('//*[@id="password"]').setValue(auth.password)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clicable',
        })

        await browser.$('//*[@type="submit"]').click()

        const isDisplayedElement: boolean = await (await browser.$('//*[@id="js-flash-container"]/div/div/div')).isDisplayed()

        expect(isDisplayedElement).toEqual(true)
    })

    it('link forgot password', async () => {
        await browser.url('https://github.com/login')

        await browser.$('//*[@id="forgot-password"]').waitForClickable({
            timeoutMsg: 'Forgot password link was not clicable',
        })

        await browser.$('//*[@id="forgot-password"]').click()

        const isDisplayedElement: boolean = await (await browser.$('//*[@id="forgot_password_form"]/div[1]/h1')).isDisplayed()

        expect(isDisplayedElement).toEqual(true)
    })

})
