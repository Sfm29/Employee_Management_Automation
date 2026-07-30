import { Employee } from '../models/Employee';
import { ConfirmationDialog } from '../components/ConfirmationDialog';
import { Toast } from '../components/Toast';
import { EmployeeListPage } from '../pages/pim/EmployeeListPage';
import { EmployeeFormPage } from '../pages/pim/EmployeeFormPage';
import { EmployeeDetailsPage } from '../pages/pim/EmployeeDetailsPage';

export class EmployeeService {

    constructor(
        private readonly employeeListPage: EmployeeListPage,
        private readonly employeeFormPage: EmployeeFormPage,
        private readonly employeeDetailsPage: EmployeeDetailsPage,
        private readonly confirmationDialog: ConfirmationDialog,
        private readonly toast: Toast
    ) {}

    async open(): Promise<void> {
        await this.employeeListPage.open();
    }

    async create(employee: Employee): Promise<void> {

        await this.employeeListPage.clickAdd();

        await this.employeeFormPage.create(employee);
    }

    async search(employeeId: string): Promise<void> {

        await this.employeeListPage.open();

        await this.employeeListPage.searchByEmployeeId(employeeId);
    }

    async openEmployee(employeeId: string): Promise<void> {

        await this.search(employeeId);

        await this.employeeListPage.openEmployee(employeeId);
    }

    async updateLastName(employeeId: string, lastName: string): Promise<void> {

        await this.openEmployee(employeeId);

        await this.employeeDetailsPage.updateLastName(lastName);
    }

    async delete(employeeId: string): Promise<void> {

        await this.search(employeeId);

        await this.employeeListPage.deleteEmployee(employeeId);

        await this.confirmationDialog.confirm();

        await this.toast.verifySuccess();

        await this.toast.waitUntilDisappear();
    }

    async verifyEmployeeExists(employee: Employee): Promise<void> {

        await this.search(employee.employeeId);

        await this.employeeListPage.verifyEmployeeExists(
            employee.employeeId
        );
    }

    async verifyEmployeeDoesNotExist(employee: Employee): Promise<void> {

        await this.search(employee.employeeId);

        await this.employeeListPage.verifyEmployeeDoesNotExist(
            employee.employeeId
        );
    }

}