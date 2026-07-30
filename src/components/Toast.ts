import { expect, Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Toast extends BaseComponent {

    constructor(page: Page) {
        super(page);
    }

    private get successToast(): Locator {
        return this.page.locator('.oxd-toast--success');
    }

    async verifySuccess(): Promise<void> {

        await expect(this.successToast).toBeVisible();

        await expect(this.successToast).toContainText('Successfully');
    }

    async waitUntilDisappear(): Promise<void> {

        await this.successToast.waitFor({
            state: 'hidden'
        });
    }

}