document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const ammount = document.getElementById('ammount').value;
    const convertedAmmount = parseFloat(ammount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(ammount && pin){
    if(convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmmount;
        document.getElementById("main-balance").innerText = sum;
        
    }
    else{
        alert("Wrong Pin");
    }
}
else{
    alert("enter Ammount");
}

})