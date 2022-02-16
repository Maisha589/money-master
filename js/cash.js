document.getElementById("Calculate-button").addEventListener("click", function () {
    // Get the food input
    const foodExpenseInput = document.getElementById("food-input");
    const foodExpenseText = foodExpenseInput.value;
    const foodExpense = parseFloat(foodExpenseText);
    // console.log(foodExpense);

    // get the Rent Input
    const rentExpenseInput = document.getElementById("rent-input");
    const rentExpenseText = rentExpenseInput.value;
    const rentExpense = parseFloat(rentExpenseText);
    // console.log(rentExpense);

    // get the clothes Input 
    const clothExpenseInput = document.getElementById("cloth-input");
    const clothExpenseText = clothExpenseInput.value;
    const clothExpense = parseFloat(clothExpenseText);
    // console.log(clothExpense);

    // update total expense
    const expenseTotal = document.getElementById("total-expense");
    // const previousExpenseTotalText = expenseTotal.innerText;
    // const previousExpenseTotal = parseFloat(previousExpenseTotalText);
    const currentExpenseTotal = foodExpense + rentExpense + clothExpense;
    expenseTotal.innerText = currentExpenseTotal;
    // console.log(currentExpenseTotal);

    // get Income Value
    const balanceInput = document.getElementById("balance-total");
    const balanceText = balanceInput.value;
    const balance = parseFloat(balanceText);
    // console.log(balance);

    // Update balance Total
    const balanceTotal = document.getElementById("balence-total");
    const currentBalanceTotal = balance - currentExpenseTotal;
    balanceTotal.innerText = currentBalanceTotal;
    // console.log(currentBalanceTotal);
});