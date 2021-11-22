function buyManualScam(){
    if ((balance >= manualScamCost) && (manualScams < 20)) {
        balance = balance - manualScamCost
        manualScams += 1
        manualScamCost += manualScamCost / 10
        manualScamProfit += manualScamIncrease
        manualScamCost = parseInt(manualScamCost)
    }}

function buyFalseAd() {
    if (balance >= falseAdCost) {
        balance = balance - falseAdCost
        falseAds += 1
        falseAdCost += falseAdCost / 10
        falseAdProfit += falseAdIncrease
        falseAdCost = parseInt(falseAdCost)
    }}

function buyGasStation() {
    if (balance >= gasStationCost) {
        balance = balance - gasStationCost
        gasStations += 1    
        gasStationCost += gasStationCost / 10
        gasStationProfit += gasStationIncrease
        gasStationCost = parseInt(gasStationCost)
    }}