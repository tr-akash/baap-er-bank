// ---------handle deposit button event------------
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousAmoutText = depositTotal.innerText;
    const previousAmout = parseFloat(previousAmoutText);
    const newDepositTotal = previousAmout + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalance + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input field
    depositInput.value = '';
});

// ---------handle withdraw button event---------
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdraw + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalance - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw inlput
    withdrawInput.value = '';


})