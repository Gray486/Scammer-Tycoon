if (autoSave == "On") {
    document.getElementById("autoSaveToggle").style.backgroundColor = "green";
}
if (autoSave == "Off") {
    document.getElementById("autoSaveToggle").style.backgroundColor = "red";
}

//this is code I stole to set cookies 
function setCookie(cName, cValue) {
    let date = new Date();
    date.setTime(date.getTime() + (1000000000000 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

//this is code I stole but this time to get cookies
function getCookie(cName, noParse) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    if (noParse){
      return res;
    }
    return parseInt(res)
  }
  
  

//this runs when you push the load button and loads all the cookies into variables
function load() {
    balance = getCookie ("balance");
    autoSave = getCookie("autoSave", true);
    }
    
    //this saves all the variables into cookies
    function save() {
    setCookie("balance", balance);
    setCookie("autoSave", autoSave);
    }

//this saves all the variables into cookies
function save() {
setCookie("balance", balance);
setCookie("autoSave", autoSave);

}
//auto loads
if (document.cookie == ""){
    save()
  }else{
    load()
  }

//auto save toggle
function autoSaveToggle (){
    if (autoSave == "On"){
      autoSave = "Off"
      document.getElementById("autoSaveToggle").style.backgroundColor = "red";
      save()
    }else{
      autoSave == "On"
      document.getElementById("autoSaveToggle").style.backgroundColor = "green";
    }
    
  }

//auto save loop
function autoSaveLoop (){
    if (autoSave == "On"){
      save()
    } 
    setTimeout(autoSaveLoop, 10000)
    }  

autoSaveLoop();