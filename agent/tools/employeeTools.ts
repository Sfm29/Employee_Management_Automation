import { tool } from '@openai/agents';
import { z } from 'zod';

import { EmployeeService } from '../../src/services/EmployeeService';

export function createEmployeeTools(employeeService: EmployeeService) {

    const searchEmployee = tool({
        name: 'search_employee',

        description:
            'Search for an employee in the Employee Management application using their employee ID. Use this tool when you need to verify whether an employee exists.',

        parameters: z.object({
            employeeId: z
                .string()
                .describe('The employee ID to search for.'),
        }),

        async execute({ employeeId }) {

            console.log(`Tool: searching for employee ${employeeId}`);

            // Step 1: Perform the search.
            try {
                await employeeService.search(employeeId);
            } catch (error) {
                console.error('Search operation failed:', error);

                const result = {
                    status: 'ERROR',
                    employeeId,
                    message:
                        'The employee search could not be completed because the automation failed.',
                };

                console.log('Tool result:', result);

                return JSON.stringify(result);
            }

            // Step 2: Verify whether the employee exists.
            try {
                await employeeService.verifyEmployeeExists({
                    firstName: '',
                    lastName: '',
                    employeeId,
                });

                const result = {
                    status: 'PASS',
                    employeeId,
                    message: `Employee ${employeeId} was found.`,
                };

                console.log('Tool result:', result);

                return JSON.stringify(result);

            } catch (error) {

                console.error('Verification error:', error);

                const result = {
                    status: 'NOT_FOUND',
                    employeeId,
                    message: `Employee ${employeeId} was not found.`,
                };

                console.log('Tool result:', result);

                return JSON.stringify(result);
            }
        },
    });


    const createEmployee = tool({
        name: 'create_employee',

        description:
            'Create a new employee in the Employee Management application. Use this tool when the test requires creating an employee.',

        parameters: z.object({
            firstName: z
                .string()
                .describe('The first name of the employee.'),

            lastName: z
                .string()
                .describe('The last name of the employee.'),

            employeeId: z
                .string()
                .describe('The unique employee ID to assign to the employee.'),
        }),

        async execute({ firstName, lastName, employeeId }) {

            console.log(
                `Tool: creating employee ${firstName} ${lastName} (${employeeId})`
            );

            const employee = {
                firstName,
                lastName,
                employeeId,
            };

            try {
                await employeeService.open();
                await employeeService.create(employee);

                const result = {
                    status: 'CREATED',
                    employee,
                    message:
                        `Employee ${firstName} ${lastName} with ID ${employeeId} was created successfully.`,
                };

                console.log('Tool result:', result);

                return JSON.stringify(result);

            } catch (error) {

                console.error('Employee creation failed:', error);

                const result = {
                    status: 'ERROR',
                    employee,
                    message:
                        'The employee could not be created because the automation failed.',
                };

                console.log('Tool result:', result);

                return JSON.stringify(result);
            }
        },
    });


    return {
        searchEmployee,
        createEmployee,
    };
}