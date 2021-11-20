function upgradeManualScam(){
if (balance >= manualScamCost) {
    balance = balance - manualScamCost
    manualScams += 1
    manualScamCost += manualScamCost / 10
    manualScamProfit += manualScamIncrease
}}