import { test } from '../../../src/fixtures/baseFixture';

import { EmployeeFactory } from '../../../src/data/EmployeeFactory';
import { Users } from '../../../src/data/Users';

test.describe('Employee Management', () => {

    test('Should delete employee', async ({
        loginPage,
        employeeService
    }) => {

        const employee = EmployeeFactory.create();

        await loginPage.open();

        await loginPage.login(Users.admin);

        await loginPage.verifySuccessfulLogin();

        await employeeService.open();

        await employeeService.create(employee);

        await employeeService.delete(employee.employeeId);

        await employeeService.verifyEmployeeDoesNotExist(employee);

    });

});