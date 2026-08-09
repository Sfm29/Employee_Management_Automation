# Employee Management Automation
[![CI](https://github.com/Sfm29/Employee_Management_Automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/Sfm29/Employee_Management_Automation/actions/workflows/playwright.yml)
![Playwright](https://img.shields.io/badge/Playwright-Latest-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)


A scalable UI and API automation framework built with **Playwright** and **TypeScript**, enhanced with an **AI-powered QA Agent**.

The project demonstrates modern automation architecture by combining UI and API testing with reusable components, Page Object Model, Service Layer, centralized utilities, Continuous Integration using GitHub Actions and AI-driven test orchestration.

---

# Table of Contents

- [Overview](#overview)
- [Framework Overview](#framework-overview)
- [AI-Powered QA Agent](#ai-powered-qa-agent)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Implemented Features](#implemented-features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running Tests](#running-tests)
- [Running the AI Agent](#running-the-ai-agent)
- [Reports](#reports)
- [Continuous Integration](#continuous-integration)
- [License](#license)

---

# Overview

This project was created to demonstrate how a maintainable automation framework can be built using Playwright and TypeScript.

Instead of concentrating business logic inside test files, the framework separates responsibilities into dedicated layers, making the code easier to understand, maintain and extend.

The project includes both UI and API automation and follows software engineering practices commonly used in enterprise automation projects.

The framework has also been extended with an AI-powered QA Agent that can use existing automation capabilities as tools to execute and verify application workflows.

---

# Framework Overview

## Architecture



## Playwright HTML Report



## Allure Report



## GitHub Actions



---

# AI-Powered QA Agent

The project includes an AI-powered QA Agent built on top of the existing Playwright and TypeScript automation framework.

The Agent receives a high-level QA objective and can use automation capabilities exposed as tools to interact with the application and verify results.

The AI Agent does not replace the existing automation framework. Instead, it acts as an orchestration layer on top of the existing Services and Page Objects.

## Current Agent Tools

- `search_employee`
- `create_employee`

## Example

The Agent can receive an objective such as:

> Create an employee and verify that the employee was created successfully.

The Agent can then orchestrate the following workflow:

```text
AI QA Agent
     │
     ▼
create_employee
     │
     ▼
Employee created
     │
     ▼
search_employee
     │
     ▼
Employee verified
     │
     ▼
PASS

Example execution:

Tool: creating employee John Agent (999998)

Tool result:
{
  status: 'CREATED',
  employee: {
    firstName: 'John',
    lastName: 'Agent',
    employeeId: '999998'
  }
}

Tool: searching for employee 999998

Tool result:
{
  status: 'PASS',
  employeeId: '999998',
  message: 'Employee 999998 was found.'
}

Agent result:
PASS — Employee John Agent (ID 999998) was created successfully
and then verified as existing.

The Agent can also identify when an employee cannot be found or when the underlying automation encounters an execution error.

This demonstrates AI-driven tool orchestration combined with deterministic Playwright automation.

Technology Stack
Technology	Purpose
TypeScript	Programming Language
Playwright	UI & API Automation
OpenAI Agents SDK	AI Agent & Tool Orchestration
OpenAI API	AI Model Integration
Faker	Dynamic Test Data
Allure	Test Reporting
GitHub Actions	Continuous Integration
Node.js	Runtime Environment
Architecture

The framework follows a layered architecture where each layer has a single responsibility.

Tests
   │
   ▼
Services
   │
   ▼
Page Objects
   │
   ├────────── Components
   ├────────── API Layer
   ├────────── Factories
   └────────── Utilities

The AI Agent is integrated above the existing automation framework:

AI QA Agent
     │
     ▼
Agent Tools
     │
     ▼
Services
     │
     ▼
Page Objects
     │
     ▼
Playwright
     │
     ▼
Application
Tests

Business scenarios only.

AI Agent

Interprets high-level QA objectives and uses the available automation tools to perform application actions and verify results.

Agent Tools

Expose controlled automation capabilities to the AI Agent while reusing the existing Service Layer.

Services

Coordinate complete business workflows while keeping tests concise and readable.

Page Objects

Encapsulate page interactions and isolate UI changes from the test layer.

API Layer

Centralizes API requests and response validation.

Factories

Generate dynamic test data using Faker.

Utilities

Provide reusable helpers such as waits, logging and shared methods.

Project Structure
.
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── agent/
│   ├── agent.ts
│   ├── runtime/
│   │   └── qaRuntime.ts
│   └── tools/
│       └── employeeTools.ts
│
├── docs/
│   └── images/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── factories/
│   ├── fixtures/
│   ├── models/
│   ├── pages/
│   ├── services/
│   └── utils/
│
├── tests/
│   ├── api/
│   └── ui/
│
├── LICENSE
├── README.md
├── package.json
└── playwright.config.ts
Implemented Features
UI Automation
Login
Create Employee
Search Employee
Update Employee
Delete Employee
API Automation
GET
POST
PUT
DELETE
Framework Features
Page Object Model
Service Layer
Factory Pattern
Custom Fixtures
Wait Utilities
Logging
HTML Reporting
Allure Reporting
GitHub Actions
AI Agent Features
AI Agent runtime
Browser initialization
Automated login
Employee search tool
Employee creation tool
Tool orchestration
Independent result verification
PASS / NOT_FOUND / ERROR results
Reuse of existing Playwright automation services
Getting Started
Clone the repository
git clone https://github.com/Sfm29/Employee_Management_Automation.git
Install dependencies
npm install
Install Playwright browsers
npx playwright install
Environment Variables

Create a .env file in the project root.

BASE_URL=https://opensource-demo.orangehrmlive.com
ORANGE_USERNAME=
ORANGE_PASSWORD=
OPENAI_API_KEY=

Do not commit .env or API keys to source control.

Running Tests

Run all tests

npm test

Run UI tests

npm run test:ui

Run API tests

npm run test:api

Run smoke tests

npm run test:smoke

Run regression tests

npm run test:regression
Running the AI Agent

The AI QA Agent can be started with:

npm run agent

The Agent initializes the browser, authenticates against the application and exposes QA automation tools.

Example objective:

Create an employee and verify that the employee was created successfully.

The Agent can orchestrate the available tools and return a QA verdict.

Example workflow:

Create Employee
       │
       ▼
Verify Employee
       │
       ▼
QA Verdict

The Agent reuses the existing Playwright framework rather than implementing a separate browser automation layer.

Reports

Generate the Allure report

npm run allure:generate

Open the Allure report

npm run allure:open

Generate and open automatically

npm run allure

Generate the Playwright HTML report

npm run report
Continuous Integration

The project uses GitHub Actions to automatically validate every push to the repository.

The pipeline performs the following steps:

Install project dependencies
Install Playwright browsers
Execute UI tests
Execute API tests
Generate Allure reports
Upload build artifacts
License

This project is licensed under the MIT License.

See the LICENSE file for details.

Author

Steve Ferreira

GitHub: https://github.com/Sfm29