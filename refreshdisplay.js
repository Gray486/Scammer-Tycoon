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

    document.getElementById("clickbaits").innerHTML = clickbaits

    document.getElementById("clickbaitCost").innerHTML = clickbaitCost

    document.getElementById("clickbaitProfit").innerHTML = clickbaitProfit

    //document.getElementById("clickbaitPerSecond").innerHTML = clickbaitInterval/1000

    document.getElementById("stores").innerHTML = stores

    document.getElementById("storeCost").innerHTML = storeCost

    document.getElementById("storeProfit").innerHTML = storeProfit

    //document.getElementById("storePerSecond).innerHTML = storeInterval/1000

    setTimeout(refreshDisplay, 10);
}
