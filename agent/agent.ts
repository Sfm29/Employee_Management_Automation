import 'dotenv/config';

import { Agent, run } from '@openai/agents';

import { createQaRuntime } from './runtime/qaRuntime';
import { createEmployeeTools } from './tools/employeeTools';

async function main() {

    const runtime = await createQaRuntime();

    const employeeTools = createEmployeeTools(
        runtime.employeeService
    );

    const qaAgent = new Agent({
        name: 'QA Agent',

        instructions: `
            You are a QA Automation Agent.

            Your job is to execute and analyse software tests
            using the available automation tools.

            When a user asks you to verify something in the
            application, use the appropriate tool instead of
            guessing the result.

            Never claim that an action was executed unless a tool
            actually executed it.

            After receiving a tool result, analyse it and provide
            a clear QA verdict.

            Use:
            - PASS when the requested condition is satisfied.
            - FAIL when the requested condition is not satisfied.
            - ERROR when the automation could not complete because
              of an application or automation error.

            Always explain briefly why the test received its verdict.
        `,

        tools: [
            employeeTools.searchEmployee,
            employeeTools.createEmployee,
        ],
    });

    const result = await run(
    qaAgent,
    `
    Create a new employee with:
    - first name: John
    - last name: Agent
    - employee ID: 999998

    After creating the employee, verify that the employee exists.

    Return a clear QA verdict of PASS or FAIL and explain the result.
    `
);

    console.log('\nAgent result:');
    console.log(result.finalOutput);

    await runtime.browser.close();
}

main().catch(console.error);