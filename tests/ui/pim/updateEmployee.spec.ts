import { test } from '../../../src/fixtures/baseFixture';

import { EmployeeFactory } from '../../../src/data/EmployeeFactory';
import { Users } from '../../../src/data/Users';

test.describe('Employee Management', () => {

    test('Should update employee last name', async ({

        loginPage,
        employeeService

    }) => {

        const employee = EmployeeFactory.create();

        await loginPage.open();

        await loginPage.login(Users.admin);

        await loginPage.verifySuccessfulLogin();

        await employeeService.open();

        await employeeService.create(employee);

        employee.lastName = 'Updated';

        await employeeService.updateLastName(
            employee.employeeId,
            employee.lastName
        );

        await employeeService.verifyEmployeeExists(employee);

    });

});