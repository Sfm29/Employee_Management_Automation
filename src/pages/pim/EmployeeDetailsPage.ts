import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { WaitUtils } from '../../utils/wait';

export class EmployeeDetailsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    /*
     * Locators
     */

    private get lastNameInput(): Locator {
        return this.page.locator('input[name="lastName"]').first();
    }

    private get saveButton(): Locator {
        return this.page
            .getByRole('button', { name: 'Save' })
            .first();
    }

    /*
     * Actions
     */

    async updateLastName(lastName: string): Promise<void> {

        await this.fill(this.lastNameInput, lastName);

        await WaitUtils.forLoaderToDisappear(this.page);

        await this.click(this.saveButton);

        await WaitUtils.forLoaderToDisappear(this.page);

        await WaitUtils.forNetworkIdle(this.page);

    }

}