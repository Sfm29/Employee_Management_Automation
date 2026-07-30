import {
    APIRequestContext,
    APIResponse,
    expect
} from '@playwright/test';

export abstract class BaseApiService {

    constructor(
        protected readonly request: APIRequestContext
    ) {}

    protected async get(
        endpoint: string,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return await this.request.get(endpoint, {
            headers
        });
    }

    protected async post(
        endpoint: string,
        body?: unknown,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return await this.request.post(endpoint, {
            data: body,
            headers
        });
    }

    protected async put(
        endpoint: string,
        body?: unknown,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return await this.request.put(endpoint, {
            data: body,
            headers
        });
    }

    protected async delete(
        endpoint: string,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return await this.request.delete(endpoint, {
            headers
        });
    }

    protected async expectStatus(
        response: APIResponse,
        status: number
    ): Promise<void> {

        expect(response.status()).toBe(status);
    }

    protected async responseBody<T>(
        response: APIResponse
    ): Promise<T> {

        return await response.json() as T;
    }
}