# SpendWise - JavaScript Foundation Project

SpendWise is a web application designed to help users track their income, budget metrics, and daily spending categories. This version introduces core **JavaScript functionality** to process data, manage states, capture user inputs, and run balance calculations.

---

## 🚀 What the Project Does
SpendWise serves as an interactive financial dashboard shell. With the newly integrated JavaScript layer, it transitions from a static layout into a dynamic application that calculates remaining balances, processes user prompts, records expense inputs, and outputs clear financial summaries directly to the developer console.

---

## 🧠 JavaScript Concepts Implemented

### 1. Variables and Data Types
Variables are used throughout `script.js` to store fundamental application states using `let`:
* `totalMonthlyBudget` (Number): Stores the overall monetary limit.
* `initialExpenses` (Number): Stores accumulated spending values.
* `expenseRecords` (Array of Objects): Stores structured listings of past transaction entries.

### 2. Collecting User Input
User input is gathered dynamically using the browser's built-in `prompt()` window method when the page loads, allowing users to input and update their monthly financial budgets on the fly. Additionally, event listeners (`addEventListener`) capture form values (`#expense-name`, `#expense-amount`, `#expense-category`) when the user interacts with the UI dashboard controls.

### 3. Performing Calculations
Calculations are executed programmatically using arithmetic operators:
* Subtraction is used to calculate the remaining balance (`budget - expenses`).
* Division and multiplication are combined to evaluate overall budget utilization percentages (`(expenses / budget) * 100`).

### 4. Reusable Functions
To keep code organized, modular, and maintainable, application logic is wrapped inside dedicated, reusable functions:
* `calculateRemainingBalance(budget, expenses)`: Computes and returns the net left-over funds.
* `calculateSpendingPercentage(expenses, budget)`: Computes and formats the percentage ratio of funds spent.
* `promptUserForBudgetUpdate()`: Manages the execution flow of capturing and validating user prompts.

### 5. Displaying Results
All processed application results, system logs, and data calculations are explicitly logged, clearly structured, and labeled within the **browser developer console** (`F12` -> Console tab) for seamless debugging and verification.
