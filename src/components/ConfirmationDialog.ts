import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class ConfirmationDialog extends BaseComponent {

    constructor(page: Page) {
        super(page);
    }

    private get confirmButton(): Locator {
        return this.page.getByRole('button', {
            name: 'Yes, Delete'
        });
    }

    private get cancelButton(): Locator {
        return this.page.getByRole('button', {
            name: 'No, Cancel'
        });
    }

    async confirm(): Promise<void> {

        await this.confirmButton.waitFor({
            state: 'visible'
        });

        await this.confirmButton.click();
    }

    async cancel(): Promise<void> {

        await this.cancelButton.waitFor({
            state: 'visible'
        });

        await this.cancelButton.click();
    }

}