document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('clicked');
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previesDepositAmount  = depositTotal.innerText;
    const currentDepositAmount =  parseFloat(previesDepositAmount)  +  parseFloat(newdepositAmount);
    depositTotal.innerText = currentDepositAmount;

    const balanceTotal = document.getElementById('balance-total');
    const previesBalance = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previesBalance) + currentDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '' ;

});

document.getElementById('withdraw-button').addEventListener('click',function(){
    //  console.log('something');
    const withdrawInput = document.getElementById('withdraw-input');
    // console.log(withdrawInput)
    const newWithdrowAmount = withdrawInput.value;
     console.log(newWithdrowAmount);
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotal.innerText;
// console.log(previousWithdrawTotal)
    const currentWithdrawAmount = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrowAmount);
    withdrawTotal.innerText = currentWithdrawAmount;
    // update balance
    const updateBalanceTotal = document.getElementById('balance-total');
   const newUpdateBalanceTotal = updateBalanceTotal.innerText;
   const newB = parseFloat(newUpdateBalanceTotal) - parseFloat(currentWithdrawAmount);
   updateBalanceTotal.innerText = newB;
    withdrawInput.value = '';
})