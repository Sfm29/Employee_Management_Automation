import { test as base, expect } from '@playwright/test';
import { EmployeeApi } from '../api/EmployeeApi';

type ApiFixtures = {
    employeeApi: EmployeeApi;
};

export const test = base.extend<ApiFixtures>({
    employeeApi: async ({}, use) => {
        const api = new EmployeeApi();

        await api.initialize();

        await use(api);

        await api.dispose();
    }
});

export { expect };