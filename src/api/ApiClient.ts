import {
    APIRequestContext,
    APIResponse,
  request
} from '@playwright/test';

export class APIClient {

    protected context!: APIRequestContext;

    async initialize(baseURL: string): Promise<void> {

        this.context = await request.newContext({
            baseURL
        });

    }

    async get(url: string): Promise<APIResponse> {

        return await this.context.get(url);

    }

    async post(url: string, body?: unknown): Promise<APIResponse> {

        return await this.context.post(url, {
            data: body
        });

    }

    async put(url: string, body?: unknown): Promise<APIResponse> {

        return await this.context.put(url, {
            data: body
        });

    }

    async delete(url: string): Promise<APIResponse> {

        return await this.context.delete(url);

    }

    async dispose(): Promise<void> {

        await this.context.dispose();

    }

}