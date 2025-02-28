// alert()
// step-1: id k dhorci getElementById diye

document.getElementById('btn-login').addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const accountPin = document.getElementById("account-pin").value;
    // console.log(accountNumber, accountPin);
    if(accountNumber.length===11){
        console.log("Yes");
        if((parseInt)(accountPin)===1234){
            window.location.href = "./main.html"
        }
        else{
            alert("Not Okay");
        }
    }
    else{
        alert("No");
    }
    
})