refreshDisplay()

function refreshDisplay() {

    document.getElementById("balance").innerHTML = balance

    document.getElementById("manualScams").innerHTML = manualScams

    document.getElementById("manualScamCost").innerHTML = manualScamCost

    document.getElementById("manualScamProfit").innerHTML = manualScamProfit

    setTimeout(refreshDisplay, 10)
}

//template to copy and paste
//    document.getElementById("").innerHTML = 