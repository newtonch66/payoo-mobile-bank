document.getElementById('cashout-btn').addEventListener('click', function(){
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(balance);
})