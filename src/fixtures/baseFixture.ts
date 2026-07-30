import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/auth/LoginPage';

import { EmployeeListPage } from '../pages/pim/EmployeeListPage';
import { EmployeeFormPage } from '../pages/pim/EmployeeFormPage';
import { EmployeeDetailsPage } from '../pages/pim/EmployeeDetailsPage';

import { ConfirmationDialog } from '../components/ConfirmationDialog';
import { Toast } from '../components/Toast';

import { EmployeeService } from '../services/EmployeeService';

import { User } from '../models/LoginUser';
import { Users } from '../data/Users';

type Fixtures = {

    loginPage: LoginPage;

    employeeListPage: EmployeeListPage;
    employeeFormPage: EmployeeFormPage;
    employeeDetailsPage: EmployeeDetailsPage;

    confirmationDialog: ConfirmationDialog;
    toast: Toast;

    employeeService: EmployeeService;

    adminUser: User;
};

export const test = base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    employeeListPage: async ({ page }, use) => {
        await use(new EmployeeListPage(page));
    },

    employeeFormPage: async ({ page }, use) => {
        await use(new EmployeeFormPage(page));
    },

    employeeDetailsPage: async ({ page }, use) => {
        await use(new EmployeeDetailsPage(page));
    },

    confirmationDialog: async ({ page }, use) => {
        await use(new ConfirmationDialog(page));
    },

    toast: async ({ page }, use) => {
        await use(new Toast(page));
    },

    employeeService: async (
        {
            employeeListPage,
            employeeFormPage,
            employeeDetailsPage,
            confirmationDialog,
            toast
        },
        use
    ) => {

        const employeeService = new EmployeeService(
            employeeListPage,
            employeeFormPage,
            employeeDetailsPage,
            confirmationDialog,
            toast
        );

        await use(employeeService);
    },

    adminUser: async ({}, use) => {
        await use(Users.admin);
    }

});

export { expect };