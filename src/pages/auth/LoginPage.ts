import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { URLS } from '../../constants/urls';
import { User } from '../../models/LoginUser';
import { MESSAGES } from '../../constants/messages';

export class LoginPage extends BasePage {

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('.oxd-alert-content-text');
    }

    async open(): Promise<void> {

    await this.navigate(URLS.LOGIN);

    await this.verifyVisible(this.usernameInput);
}

    async login(user: User): Promise<void> {


        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);

        await this.loginButton.click();

        await this.page.waitForLoadState('networkidle');

        console.log('Current URL:', this.page.url());

        if (await this.errorMessage.isVisible().catch(() => false)) {
            console.log(
                'Login error:',
                await this.errorMessage.textContent()
            );
        }
    }

    async verifySuccessfulLogin(): Promise<void> {
        await this.verifyUrl(URLS.DASHBOARD);
    }

    async verifyLoginError(): Promise<void> {
        await expect(this.errorMessage).toHaveText(
            MESSAGES.LOGIN_FAILED
        );
    }
}