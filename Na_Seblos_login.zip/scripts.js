function checkpoint(){
    var uN = document.getElementById("uN").value;
    var pSW = document.getElementById("pSW").value;
if(uN=="" & pSW==""){
    document.getElementById("logErr").innerHTML = "Enter your username and password*";
    }
else if(uN=="" & pSW !=""){
    document.getElementById("logErr").innerHTML = "Enter your username*";
    }
else if(uN!="" & pSW==""){
    document.getElementById("logErr").innerHTML = "Enter your password*";
    }
else{
    document.getElementById("logErr").innerHTML = "You have successfully logged in!";
}
}