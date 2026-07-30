import { test, expect } from '../../src/fixtures/apiFixture';

test.describe('Employee API', () => {

    test('Should get user', async ({ employeeApi }) => {

        const response = await employeeApi.getUser(1);

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.id).toBe(1);
        expect(body.email).toContain('@');

    });

});