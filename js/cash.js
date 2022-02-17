document.getElementById("Calculate-button").addEventListener("click", function () {
    // Get the food input
    const foodExpenseInput = document.getElementById("food-input");
    const foodExpenseText = foodExpenseInput.value;
    const foodExpense = parseFloat(foodExpenseText);


    // get the Rent Input
    const rentExpenseInput = document.getElementById("rent-input");
    const rentExpenseText = rentExpenseInput.value;
    const rentExpense = parseFloat(rentExpenseText);


    // get the clothes Input 
    const clothExpenseInput = document.getElementById("cloth-input");
    const clothExpenseText = clothExpenseInput.value;
    const clothExpense = parseFloat(clothExpenseText);


    // update total expense
    const expenseTotal = document.getElementById("total-expense");

    const currentExpenseTotal = foodExpense + rentExpense + clothExpense;
    if (foodExpense < 0 || rentExpense < 0 || clothExpense < 0) {
        expenseTotal.innerText = "Please enter a positive number";
        // balanceTotal.innerText = "";
    }
    else {
        expenseTotal.innerText = currentExpenseTotal;
    }


    // get Income Value
    const balanceInput = document.getElementById("balance-input");
    const balanceText = balanceInput.value;
    const balance = parseFloat(balanceText);


    // Update balance Total
    const balanceTotal = document.getElementById("balance-total");
    const currentBalanceTotal = balance - currentExpenseTotal;
    if (currentExpenseTotal > balance) {
        balanceTotal.innerText = "Total expense cannot be bigger than balance";
    }
    else {
        balanceTotal.innerText = currentBalanceTotal;
    }

});



//Save button 
document.getElementById("saving-button").addEventListener("click", function () {

    const savingInput = document.getElementById("saving-value");
    const savingInputText = savingInput.value;
    const savingAmount = parseFloat(savingInputText);


    // update saving amount
    const savingTotal = document.getElementById("saving-amount");
    const newBalanceTotal = document.getElementById("balance-total").innerText;
    const savingPercentage = (savingAmount / 100);
    const saving = savingPercentage * newBalanceTotal;
    savingTotal.innerText = saving;


    // update remaining Balance
    const remaininBalance = document.getElementById("remaining-amount");
    const newSaving = document.getElementById("saving-amount").innerText;
    const newBalance = document.getElementById("balance-total").innerText;
    const currentRemainingBalance = newBalance - newSaving;
    if (currentRemainingBalance < 0) {
        remaininBalance.innerText = "Can't biggere than balance";
    }
    else {
        remaininBalance.innerText = currentRemainingBalance;
    }

});