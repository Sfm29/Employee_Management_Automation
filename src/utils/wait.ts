import { expect, Locator, Page } from '@playwright/test';
import { Timeouts } from '../constants/Timeouts';

export class WaitUtils {

    static async forPageLoad(page: Page): Promise<void> {

        await page.waitForLoadState('domcontentloaded');

    }

    static async forNetworkIdle(page: Page): Promise<void> {

        await page.waitForLoadState('networkidle');

    }

    static async forURL(page: Page, url: string): Promise<void> {

        await page.waitForURL(url, {
            timeout: Timeouts.LONG,
        });

    }

    static async forVisible(locator: Locator): Promise<void> {

        await locator.waitFor({
            state: 'visible',
            timeout: Timeouts.MEDIUM,
        });

    }

    static async forHidden(locator: Locator): Promise<void> {

        await locator.waitFor({
            state: 'hidden',
            timeout: Timeouts.MEDIUM,
        });

    }

    static async forEnabled(locator: Locator): Promise<void> {

        await expect(locator).toBeEnabled({
            timeout: Timeouts.MEDIUM,
        });

    }

    static async forLoaderToDisappear(page: Page): Promise<void> {

        const loader = page.locator('.oxd-form-loader');

        await loader.waitFor({
            state: 'hidden',
            timeout: Timeouts.LONG,
        }).catch(() => {
            // O loader pode nunca aparecer.
        });

    }

}