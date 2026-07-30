import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { Employee } from '../../models/Employee';

export class EmployeeFormPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    /*
     * Locators
     */

    private get firstNameInput(): Locator {
        return this.page.locator('input[name="firstName"]');
    }

    private get lastNameInput(): Locator {
        return this.page.locator('input[name="lastName"]');
    }

    private get employeeIdInput(): Locator {
        return this.page
            .locator('input.oxd-input')
            .nth(4);
    }

    private get saveButton(): Locator {
        return this.page.getByRole('button', {
            name: 'Save'
        });
    }

    private get cancelButton(): Locator {
        return this.page.getByRole('button', {
            name: 'Cancel'
        });
    }

    /*
     * Actions
     */

    async fillEmployee(employee: Employee): Promise<void> {

        await this.fill(this.firstNameInput, employee.firstName);

        await this.fill(this.lastNameInput, employee.lastName);

        await this.fill(this.employeeIdInput, employee.employeeId);
    }

    async save(): Promise<void> {

        await this.click(this.saveButton);

        await this.page.waitForLoadState('networkidle');

        await this.page.waitForTimeout(2000);
    }

    async cancel(): Promise<void> {

        await this.click(this.cancelButton);
    }

    async create(employee: Employee): Promise<void> {

        await this.fillEmployee(employee);

        await this.save();
    }

    async updateLastName(lastName: string): Promise<void> {

        await this.fill(this.lastNameInput, lastName);

        await this.save();
    }
}