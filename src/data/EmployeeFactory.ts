import { Employee } from '../models/Employee';

export class EmployeeFactory {

    static create(): Employee {

        const id = Date.now().toString().slice(-6);

        return {
            firstName: `John${id}`,
            lastName: `Doe${id}`,
            employeeId: id
        };
    }

}