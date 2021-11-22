var version = "0.1.0"
var balance = 0;
var manualScams = 1;
var manualScamCost = 60;
var manualScamProfit = 1;
var manualScamIncrease = 1;
var falseAds = 0;
var falseAdCost = 100;
var falseAdProfit = 0;
var falseAdIncrease = 5;
var falseAdInterval = 2000;
var gasStations = 0;
var gasStationCost = 250;
var gasStationProfit = 0;
var gasStationIncrease = 15;
var gasStationInterval = 2000;

//happens when you click the phone
function manualScam() {
    balance += manualScamProfit
}

//adds false ad profit to ballance every set ammount of milliseconds
function falseAd() {
    balance += falseAdProfit
    setTimeout(falseAd, falseAdInterval)
}

//adds gas station profit to ballance every set ammount of milliseconds
function gasStation() {
    balance += gasStationProfit
    setTimeout(gasStation, gasStationInterval)
}

//repeating functions
gasStation();
falseAd();