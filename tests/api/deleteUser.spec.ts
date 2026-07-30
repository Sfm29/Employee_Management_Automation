import { test, expect } from '../../src/fixtures/apiFixture';

test.describe('Employee API', () => {

    test('Should delete user', async ({ employeeApi }) => {

        const response = await employeeApi.deleteUser(1);

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

    });

});