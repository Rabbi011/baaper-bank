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

})