import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { Timeouts } from './src/constants/Timeouts';

dotenv.config();

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['list'],
        ['html', { open: 'never' }],
        ['allure-playwright']
    ],

    use: {
        baseURL: process.env.BASE_URL,

        trace: 'retain-on-failure',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        actionTimeout: Timeouts.LONG,

        navigationTimeout: Timeouts.EXTRA_LONG,

        headless: true
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari']
            }
        }
    ]
});