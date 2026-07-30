export class Logger {
    static info(message: string): void {
        console.log(`[INFO] ${message}`);
    }

    static success(message: string): void {
        console.log(`[SUCCESS] ${message}`);
    }

    static warn(message: string): void {
        console.warn(`[WARNING] ${message}`);
    }

    static error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }

    static step(message: string): void {
        console.log(`\n========== ${message} ==========\n`);
    }
}