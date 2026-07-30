import { Locator, Page } from '@playwright/test';
import { WaitUtils } from '../utils/wait';

export abstract class BaseComponent {
    constructor(protected readonly page: Page) {}

    protected async click(locator: Locator): Promise<void> {
        await WaitUtils.forVisible(locator);

        await locator.click();
    }

    protected async fill(locator: Locator, value: string): Promise<void> {
        await WaitUtils.forVisible(locator);

        await locator.fill(value);
    }

    protected async getText(locator: Locator): Promise<string> {
        await WaitUtils.forVisible(locator);

        return (await locator.textContent())?.trim() ?? '';
    }

    protected async isVisible(locator: Locator): Promise<boolean> {
        return locator.isVisible();
    }
}