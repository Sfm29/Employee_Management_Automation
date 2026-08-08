import { chromium, Browser, Page } from '@playwright/test';

import { LoginPage } from '../../src/pages/auth/LoginPage';

import { EmployeeListPage } from '../../src/pages/pim/EmployeeListPage';
import { EmployeeFormPage } from '../../src/pages/pim/EmployeeFormPage';
import { EmployeeDetailsPage } from '../../src/pages/pim/EmployeeDetailsPage';

import { ConfirmationDialog } from '../../src/components/ConfirmationDialog';
import { Toast } from '../../src/components/Toast';

import { EmployeeService } from '../../src/services/EmployeeService';

import { Users } from '../../src/data/Users';

export async function createQaRuntime() {
    const browser: Browser = await chromium.launch({
        headless: false,
    });

    const context = await browser.newContext({
        baseURL: process.env.BASE_URL,
    });

    const page: Page = await context.newPage();

    const loginPage = new LoginPage(page);

    const employeeListPage = new EmployeeListPage(page);
    const employeeFormPage = new EmployeeFormPage(page);
    const employeeDetailsPage = new EmployeeDetailsPage(page);

    const confirmationDialog = new ConfirmationDialog(page);
    const toast = new Toast(page);

    const employeeService = new EmployeeService(
        employeeListPage,
        employeeFormPage,
        employeeDetailsPage,
        confirmationDialog,
        toast
    );

    await loginPage.open();
    await loginPage.login(Users.admin);
    await loginPage.verifySuccessfulLogin();

    return {
        browser,
        page,
        employeeService,
    };
}