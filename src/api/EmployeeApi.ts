import { APIResponse } from '@playwright/test';
import { APIClient } from './ApiClient';

export class EmployeeApi extends APIClient {

    async initialize(): Promise<void> {
        await super.initialize('https://jsonplaceholder.typicode.com');
    }

    async getUser(id: number): Promise<APIResponse> {
        return await this.get(`/users/${id}`);
    }

    async createUser(body: object): Promise<APIResponse> {
        return await this.post('/users', body);
    }

    async updateUser(id: number, body: object): Promise<APIResponse> {
        return await this.put(`/users/${id}`, body);
    }

    async deleteUser(id: number): Promise<APIResponse> {
        return await this.delete(`/users/${id}`);
    }
}