function upgradeManualScam(){
    if ((balance >= manualScamCost) && (manualScams < 30)) {
        balance = balance - manualScamCost
        manualScams += 1
        manualScamCost += manualScamCost / 10
        manualScamProfit += manualScamIncrease
        manualScamCost = parseInt(manualScamCost)
    }}