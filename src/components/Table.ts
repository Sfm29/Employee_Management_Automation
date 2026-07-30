import { expect, Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Table extends BaseComponent {

    constructor(page: Page) {
        super(page);
    }

    rowContaining(text: string): Locator {
        return this.page.locator('.oxd-table-row').filter({
            hasText: text
        });
    }

    async shouldContain(text: string): Promise<void> {
        await expect(this.rowContaining(text)).toBeVisible();
    }

    async shouldNotContain(text: string): Promise<void> {
        await expect(this.rowContaining(text)).toHaveCount(0);
    }
}