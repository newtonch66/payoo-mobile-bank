document.getElementById("cashout-btn").addEventListener("click", function(){
    const cashoutNumber=getValueFromInput("cashout-number");
    if(cashoutNumber.length !=11){
        alert("Invalid Number")
        return;
    }

    const cashoutAmount = getValueFromInput("cashout-amount")

  const currentBalance = getBalance();

    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    const pin = getValueFromInput("cashout-pin")
    if( pin === "1234"){
        alert("CashOut Successfull");
       setBalance(newBalance);
        }
        else{
            alert("Invalid Pin");
            return;
        }
})








// document.getElementById('cashout-btn').addEventListener('click', function(){
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !=11){
//         alert("Invalid Agent Number");
//         return;
//     }
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     const newBalance= Number(balance) - Number(cashoutAmount);
//     if( newBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }
//     console.log(newBalance)
//     const cashoutPinInput = document.getElementById('cashout-pin')
//     const pin = cashoutPinInput.value;
//     if( pin==="1234"){
//         alert("CashOut successfull");
//         console.log(newBalance);
//         balanceElement.innerText=newBalance

//     }
//     else{
//         alert("Invalid Pin");
//         return;
//     }
// })