var version = "0.1.0";
var autoSave = "Off";
var balance = 0;
var manualScams = 1;
var manualScamCost = 60;
var manualScamProfit = 1;
var manualScamIncrease = 1;
var falseAds = 0;
var falseAdCost = 75;
var falseAdProfit = 0;
var falseAdIncrease = 5;
var falseAdInterval = 2000;
var gasStations = 0;
var gasStationCost = 250;
var gasStationProfit = 0;
var gasStationIncrease = 15;
var gasStationInterval = 2000;
var clickbaits = 0;
var clickbaitCost = 500;
var clickbaitProfit = 0;
var clickbaitIncrease = 35;
var clickbaitInterval = 2000;
var stores = 0;
var storeCost = 1000;
var storeProfit = 0;
var storeIncrease = 75;
var storeInterval = 2000;

//happens when you click the phone
function manualScam() {
    balance += manualScamProfit
}

//adds false ad profit to balance every set ammount of milliseconds
function falseAd() {
    balance += falseAdProfit
    setTimeout(falseAd, falseAdInterval)
}

//adds gas station profit to balance every set ammount of milliseconds
function gasStation() {
    balance += gasStationProfit
    setTimeout(gasStation, gasStationInterval)
}

//adds clickbait profit to balance every set ammount of milliseconds
function clickbait() {
    balance += clickbaitProfit
    setTimeout(clickbait, clickbaitInterval)
}

//adds store profit to balance every set ammount of milliseconds
function store() {
    balance += storeProfit
    setTimeout(store, storeInterval)
}

//repeating functions
gasStation();
falseAd();
gasStation();
clickbait();
store();