# Architecture

## Overview

The framework is designed following a modular architecture to keep the code maintainable, scalable and easy to understand.

Each folder has a single responsibility.

---

# Project Structure

Employee_Management_Automation

├── api

├── constants

├── data

├── docs

├── fixtures

├── models

├── pages

├── tests
│   ├── api
│   └── ui

├── utils

├── playwright.config.ts

└── README.md

---

# Folder Responsibilities

## pages

Contains all Page Objects.

Each page exposes reusable methods representing user actions.

Example:

- LoginPage
- DashboardPage
- EmployeePage

---

## tests

Contains all automated tests.

Tests describe business scenarios only.

Business logic should never be implemented here.

---

## data

Stores reusable test data.

Example:

- Users
- Employees

---

## api

Contains API clients and API requests.

UI and API tests remain independent.

---

## fixtures

Contains Playwright fixtures used to prepare the test environment.

---

## constants

Stores URLs, messages and fixed values.

Avoids hardcoded values throughout the framework.

---

## utils

Contains reusable helper functions.

Examples:

- Date formatting
- Random data generation
- File helpers

---

## models

Represents application data structures.

Used to improve readability and maintainability.

---

# Design Principles

- Single Responsibility Principle
- Reusability
- Readability
- Scalability
- Maintainability

---

# Design Pattern

The framework follows the Page Object Model (POM).

Future improvements may include additional abstraction layers when required.

---

# Goals

The objective is to simulate the structure of an enterprise QA Automation framework.