import { test, expect } from '../../src/fixtures/apiFixture';

test.describe('Employee API', () => {

    test('Should update user', async ({ employeeApi }) => {

        const updatedUser = {
            name: 'Steve Updated',
            email: 'steve.updated@test.com'
        };

        const response = await employeeApi.updateUser(1, updatedUser);

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.name).toBe(updatedUser.name);
        expect(body.email).toBe(updatedUser.email);

    });

});