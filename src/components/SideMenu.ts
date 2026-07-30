import { Locator, Page } from '@playwright/test';

export class SideMenu {

    readonly admin: Locator;
    readonly pim: Locator;
    readonly leave: Locator;
    readonly recruitment: Locator;

    constructor(page: Page) {

        this.admin = page.getByRole('link', { name: 'Admin' });

        this.pim = page.getByRole('link', { name: 'PIM' });

        this.leave = page.getByRole('link', { name: 'Leave' });

        this.recruitment = page.getByRole('link', { name: 'Recruitment' });

    }

    async openAdmin() {
        await this.admin.click();
    }

    async openPIM() {
        await this.pim.click();
    }

    async openLeave() {
        await this.leave.click();
    }

    async openRecruitment() {
        await this.recruitment.click();
    }

}