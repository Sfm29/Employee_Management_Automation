import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class SearchBox extends BaseComponent {
    private readonly searchButton: Locator;
    private readonly resetButton: Locator;

    constructor(page: Page) {
        super(page);

        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
    }

    async search(): Promise<void> {
        await this.click(this.searchButton);
    }

    async reset(): Promise<void> {
        await this.click(this.resetButton);
    }
}