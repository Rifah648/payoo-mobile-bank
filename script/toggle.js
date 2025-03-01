document.getElementById("Cashout").style.display="none"
document.getElementById("addMoney").style.display="block"

document.getElementById("add-money-box").addEventListener("click", function(){
    document.getElementById("Cashout").style.display="none"
    document.getElementById("addMoney").style.display="block"
})
document.getElementById("cash-out-box").addEventListener("click", function(){
    document.getElementById("addMoney").style.display="none"
    document.getElementById("Cashout").style.display="block"
})