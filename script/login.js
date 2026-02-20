document.getElementById('login-btn').addEventListener('click', function(){
    const inputNumber =document.getElementById('input-number');
    const contactNumber = inputNumber.value;
    console.log(contactNumber)
    const inputPin = document.getElementById('input-pin')
    const pin = inputPin.value;
    console.log(pin);
    if(contactNumber==01845422114 && pin==1234){
        alert("login success")

        window.location.assign("/home.html");
    }

    else{
        alert('Login Failed');
        return;
    }
})