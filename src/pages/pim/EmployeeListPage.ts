import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { URLS } from '../../constants/urls';

export class EmployeeListPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    /*
     * Navigation
     */

    async open(): Promise<void> {

    await this.navigate(URLS.PIM);

    await this.verifyVisible(this.addButton);

}

    /*
     * Locators
     */

    private get addButton(): Locator {
        return this.page.getByRole('button', { name: 'Add' });
    }

    private get searchButton(): Locator {
        return this.page.getByRole('button', { name: 'Search' }).first();
    }

    private get resetButton(): Locator {
        return this.page.getByRole('button', { name: 'Reset' }).first();
    }

    private get employeeNameInput(): Locator {
        return this.page.getByPlaceholder('Type for hints...').first();
    }

    private get employeeIdInput(): Locator {
        return this.page
            .locator('input.oxd-input')
            .nth(1);
    }

    private get tableRows(): Locator {
        return this.page.locator('.oxd-table-body .oxd-table-row');
    }

    /*
     * Actions
     */

    async clickAdd(): Promise<void> {
        await this.click(this.addButton);
    }

    async searchByEmployeeId(employeeId: string): Promise<void> {

        await this.fill(this.employeeIdInput, employeeId);

        await this.click(this.searchButton);

        await this.waitForPageLoad();
    }

    async searchByEmployeeName(name: string): Promise<void> {

        await this.fill(this.employeeNameInput, name);

        await this.click(this.searchButton);

        await this.waitForPageLoad();
    }

    async resetSearch(): Promise<void> {

        await this.click(this.resetButton);

        await this.waitForPageLoad();
    }

    /*
     * Validations
     */

    async verifyEmployeeExists(text: string): Promise<void> {

        await expect(
            this.tableRows.filter({
                hasText: text
            })
        ).toBeVisible();
    }

    async verifyEmployeeDoesNotExist(text: string): Promise<void> {

        await expect(
            this.tableRows.filter({
                hasText: text
            })
        ).toHaveCount(0);
    }

    /*
     * Table
     */

    async openEmployee(employeeId: string): Promise<void> {

        const row = this.tableRows.filter({
            hasText: employeeId
        });

        await row.first().click();
    }

    async deleteEmployee(employeeId: string): Promise<void> {

        const row = this.tableRows.filter({
            hasText: employeeId
        });

        await row
            .locator('button:has(.bi-trash)')
            .click();
    }

}