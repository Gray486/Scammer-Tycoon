function upgradeManualScam(){
    if ((balance >= manualScamCost) && (manualScams < 20)) {
        balance = balance - manualScamCost
        manualScams += 1
        manualScamCost += manualScamCost / 10
        manualScamProfit += manualScamIncrease
        manualScamCost = parseInt(manualScamCost)
    }}

function upgradeGasStation() {
    if (balance >= gasStationCost) {
        balance = balance - gasStationCost
        gasStations += 1
        gasStationCost += gasStationCost / 10
        gasStationProfit += gasStationIncrease
        gasStationCost = parseInt(gasStationCost)
    }}