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
    // const previousExpenseTotalText = expenseTotal.innerText;
    // const previousExpenseTotal = parseFloat(previousExpenseTotalText);
    const currentExpenseTotal = foodExpense + rentExpense + clothExpense;
    expenseTotal.innerText = currentExpenseTotal;


    // get Income Value
    const balanceInput = document.getElementById("balance-input");
    const balanceText = balanceInput.value;
    const balance = parseFloat(balanceText);


    // Update balance Total
    const balanceTotal = document.getElementById("balance-total");
    const currentBalanceTotal = balance - currentExpenseTotal;
    balanceTotal.innerText = currentBalanceTotal;

})



//Save button 
document.getElementById("saving-button").addEventListener("click", function () {
    // console.log("cliced");
    const savingInput = document.getElementById("saving-value");
    const savingInputText = savingInput.value;
    const savingAmount = parseFloat(savingInputText);
    // console.log(savingAmount);

    // update saving amount
    const savingTotal = document.getElementById("saving-amount");
    const newBalanceTotal = document.getElementById("balance-total").innerText;
    const savingPercentage = (savingAmount / 100);
    const saving = savingPercentage * newBalanceTotal;
    savingTotal.innerText = saving;
    // console.log(saving);

    // update remaining Balance
    const remaininBalance = document.getElementById("remaining-amount");
    const newSaving = document.getElementById("saving-amount").innerText;
    const newBalance = document.getElementById("balance-total").innerText;
    const currentRemainingBalance = newBalance - newSaving;
    remaininBalance.innerText = currentRemainingBalance;


});