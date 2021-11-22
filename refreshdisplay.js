refreshDisplay();

function refreshDisplay() {

    document.getElementById("version").innerHTML = version

    document.getElementById("balanceTitle").innerHTML = balance

    document.getElementById("balanceDisplay").innerHTML = balance

    document.getElementById("manualScams").innerHTML = manualScams

    document.getElementById("manualScamCost").innerHTML = manualScamCost

    document.getElementById("manualScamProfit").innerHTML = manualScamProfit
    
    document.getElementById("falseAds").innerHTML = falseAds

    document.getElementById("falseAdCost").innerHTML = falseAdCost

    document.getElementById("falseAdProfit").innerHTML = falseAdProfit

    //document.getElementById("falseAdPerSecond").innerHTML = falseAdInterval/1000

    document.getElementById("gasStations").innerHTML = gasStations

    document.getElementById("gasStationCost").innerHTML = gasStationCost

    document.getElementById("gasStationProfit").innerHTML = gasStationProfit

    //document.getElementById("gasStationPerSecond").innerHTML = gasStationInterval/1000

    setTimeout(refreshDisplay, 10);
}

//template to copy and paste
//    document.getElementById("").innerHTML = 