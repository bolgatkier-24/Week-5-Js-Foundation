// ==========================================
// 1. STORE APPLICATION DATA (Variables)
// ==========================================
let totalMonthlyBudget = 50000; // Starting total budget
let initialExpenses = 15000;    // Pre-recorded expenses total

// Storing sample expense records array
let expenseRecords = [
    { name: "Groceries", amount: 55.00, category: "Food", date: "2026-06-20" },
    { name: "Bus Fare", amount: 6.10, category: "Transport", date: "2026-06-21" },
    { name: "Netflix", amount: 13.00, category: "Entertainment", date: "2026-06-22" },
    { name: "Rent", amount: 250.00, category: "Rent", date: "2026-06-01" },
    { name: "Coffee", amount: 2.50, category: "Food", date: "2026-06-23" }
];

// ==========================================
// 2. REUSABLE FUNCTIONS (Calculation Logic)
// ==========================================
/**
 * Calculates the remaining balance by subtracting total expenses from the budget.
 * @param {number} budget - The total available budget
 * @param {number} expenses - The total expenses incurred
 * @returns {number} The remaining balance
 */
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

/**
 * Calculates a percentage of the budget spent.
 * @param {number} expenses - Total expenses
 * @param {number} budget - Total budget
 * @returns {string} Formatted percentage string
 */
function calculateSpendingPercentage(expenses, budget) {
    if (budget === 0) return "0%";
    let percentage = (expenses / budget) * 100;
    return percentage.toFixed(2) + "%";
}

// ==========================================
// 3. COLLECT USER INPUT & PROCESS DATA
// ==========================================
// Trigger a prompt window to collect new income/budget or expense updates from the user
function promptUserForBudgetUpdate() {
    let userInputBudget = prompt("Enter your updated total monthly budget (e.g., 50000):", totalMonthlyBudget);
    
    // Check if user entered a valid number
    if (userInputBudget !== null && userInputBudget.trim() !== "") {
        let parsedBudget = parseFloat(userInputBudget);
        
        if (!isNaN(parsedBudget)) {
            totalMonthlyBudget = parsedBudget;
            console.log(`[Input Updated] New Total Budget set to: $${totalMonthlyBudget}`);
        } else {
            console.log("[Error] Invalid input entered. Keeping previous budget.");
        }
    }
}

// Execute user prompt sequence
promptUserForBudgetUpdate();

// ==========================================
// 4. DISPLAY RESULTS IN THE BROWSER CONSOLE
// ==========================================
// Calculate current remaining balance using our custom function
let finalRemainingBalance = calculateRemainingBalance(totalMonthlyBudget, initialExpenses);
let spentPercentage = calculateSpendingPercentage(initialExpenses, totalMonthlyBudget);

console.log("==========================================");
console.log("         SPENDWISE FINANCIAL REPORT       ");
console.log("==========================================");
console.log(`- Total Monthly Budget : $${totalMonthlyBudget.toFixed(2)}`);
console.log(`- Total Expenses       : $${initialExpenses.toFixed(2)}`);
console.log(`- Remaining Balance    : $${finalRemainingBalance.toFixed(2)}`);
console.log(`- Budget Utilization   : ${spentPercentage}`);
console.log("==========================================");

// Hook up interactive form button from HTML to log inputs dynamically when clicked
document.getElementById("add-expense-btn").addEventListener("click", function() {
    let nameInput = document.getElementById("expense-name").value;
    let amountInput = parseFloat(document.getElementById("expense-amount").value);
    let categoryInput = document.getElementById("expense-category").value;

    if (nameInput && !isNaN(amountInput)) {
        console.log(`[New Expense Submitted via Form] Name: ${nameInput}, Amount: $${amountInput}, Category: ${categoryInput}`);
    } else {
        console.log("[Warning] Please fill in valid expense details in the form.");
    }
});
