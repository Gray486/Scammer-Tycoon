var balance = 0;
var manualScams = 1;
var manualScamCost = 60;
var manualScamProfit = 1;
var manualScamIncrease = 1;
var gasStations = 0;
var gasStationCost = 100;
var gasStationProfit = 0;
var gasStationIncrease = 5;
var gasStationInterval = 2000;

//happens when you click the phone
function manualScam() {
    balance += manualScamProfit
}

//adds gas station profit to ballance every set ammount of milliseconds
function gasStation() {
    balance = balance + gasStationProfit
    setTimeout(gasStation, gasStationInterval)
}

//repeating functions
gasStation();