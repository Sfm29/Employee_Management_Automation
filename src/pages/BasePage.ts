import { expect, Locator, Page } from '@playwright/test';
import { WaitUtils } from '../utils/wait';

export abstract class BasePage {

    constructor(protected readonly page: Page) {}

    async navigate(url: string): Promise<void> {
    await this.page.goto(url, {
        waitUntil: 'domcontentloaded',
    });
}

    async click(locator: Locator): Promise<void> {
        await WaitUtils.forVisible(locator);
        await WaitUtils.forEnabled(locator);

        await expect(locator).toBeEnabled();

        await locator.click();
    }

    async fill(locator: Locator, value: string): Promise<void> {
        await WaitUtils.forVisible(locator);

        await locator.fill(value);
    }

    async clear(locator: Locator): Promise<void> {
        await WaitUtils.forVisible(locator);

        await locator.clear();
    }

    async press(locator: Locator, key: string): Promise<void> {
        await WaitUtils.forVisible(locator);

        await locator.press(key);
    }

    async getText(locator: Locator): Promise<string> {
        await WaitUtils.forVisible(locator);

        return (await locator.textContent())?.trim() ?? '';
    }

    async isVisible(locator: Locator): Promise<boolean> {
        return locator.isVisible();
    }

    async verifyVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    async verifyHidden(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }

    async verifyText(locator: Locator, expected: string): Promise<void> {
        await expect(locator).toHaveText(expected);
    }

    async verifyContainsText(locator: Locator, expected: string): Promise<void> {
        await expect(locator).toContainText(expected);
    }

    async verifyUrl(url: string): Promise<void> {
        await expect(this.page).toHaveURL(url);
    }

    async verifyTitle(title: string): Promise<void> {
        await expect(this.page).toHaveTitle(title);
    }

    async reload(): Promise<void> {
        await this.page.reload();
        await WaitUtils.forPageLoad(this.page);
    }

    async waitForPageLoad(): Promise<void> {
        await WaitUtils.forPageLoad(this.page);
    }
}