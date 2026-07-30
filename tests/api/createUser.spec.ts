import { test, expect } from '../../src/fixtures/apiFixture';
import { UserFactory } from '../../src/factories/UserFactory';

test.describe('Employee API', {
    tag: '@api',
}, () => {

    test(
        'Should create user',
        {
            tag: '@smoke',
        },
        async ({ employeeApi }) => {

            const newUser = UserFactory.create();

            const response = await employeeApi.createUser(newUser);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(201);

            const body = await response.json();

            expect(body.name).toBe(newUser.name);
            expect(body.email).toBe(newUser.email);
            expect(body.id).toBeDefined();

        }
    );

});