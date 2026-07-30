# Employee Management Automation

A professional end-to-end automation framework built with Playwright and TypeScript for UI and API testing.

The project demonstrates modern test automation practices, including Page Object Model, Service Layer, reusable fixtures, dynamic test data generation, reporting, and continuous integration using GitHub Actions.

---

## Features

- UI automation using Playwright
- API automation using Playwright APIRequestContext
- Page Object Model (POM)
- Service Layer abstraction
- Factory Pattern for dynamic test data
- Reusable Fixtures
- Centralized Wait Utilities
- Logging support
- Allure Reporting
- HTML Reporting
- GitHub Actions CI
- Environment-based configuration
- Smoke and Regression test execution

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| TypeScript | Programming language |
| Playwright | UI and API automation |
| Faker | Test data generation |
| Allure | Test reporting |
| GitHub Actions | Continuous Integration |
| Node.js | Runtime environment |

---

## Project Structure

```
.
├── .github
│   └── workflows
│       └── playwright.yml
│
├── src
│   ├── api
│   ├── components
│   ├── constants
│   ├── factories
│   ├── fixtures
│   ├── models
│   ├── pages
│   ├── services
│   └── utils
│
├── tests
│   ├── api
│   └── ui
│
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

---

## Architecture

The framework follows a layered architecture designed to improve readability, maintainability and scalability.

### Page Objects

UI interactions are encapsulated inside dedicated Page Objects, keeping tests focused on business scenarios rather than implementation details.

### Services

Business operations are grouped into reusable services to reduce duplication and simplify test implementation.

### Fixtures

Custom Playwright fixtures centralize common setup logic and dependency injection.

### Factory Pattern

Test data is generated dynamically using Faker, avoiding hardcoded values and improving test independence.

### Utilities

Shared utilities provide centralized waiting strategies, logging and helper methods used across the framework.

---

## Test Coverage

### UI Tests

- Login
- Create Employee
- Search Employee
- Update Employee
- Delete Employee

### API Tests

- GET User
- POST User
- PUT User
- DELETE User

---

## Installation

Clone the repository

```bash
git clone https://github.com/Sfm29/Employee_Management_Automation.git
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
BASE_URL=https://opensource-demo.orangehrmlive.com

ORANGE_USERNAME=Admin

ORANGE_PASSWORD=admin123
```

---

## Running Tests

Run all tests

```bash
npm test
```

Run UI tests

```bash
npm run test:ui
```

Run API tests

```bash
npm run test:api
```

Run Smoke tests

```bash
npm run test:smoke
```

Run Regression tests

```bash
npm run test:regression
```

---

## Reports

Generate Allure report

```bash
npm run allure:generate
```

Open Allure report

```bash
npm run allure:open
```

Generate and open report

```bash
npm run allure
```

Playwright HTML Report

```bash
npm run report
```

---

## Continuous Integration

The project uses GitHub Actions to automatically execute the test suite whenever changes are pushed to the repository.

The workflow performs the following tasks:

- Installs project dependencies
- Installs Playwright browsers
- Executes UI and API tests
- Generates Allure reports
- Publishes test artifacts

---

## Design Principles

- Separation of concerns
- Reusable components
- Low coupling
- High maintainability
- Readable test scenarios
- Scalable architecture

---

## Future Improvements

Possible future enhancements include:

- Cross-browser execution matrix
- Parallel execution optimization
- Docker support
- Performance testing
- Visual regression testing
- API contract validation

---

## Author

Steve Ferreira

GitHub

https://github.com/Sfm29