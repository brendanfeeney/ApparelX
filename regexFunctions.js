// JavaScript Document
//regexFunctions.js

function fnameValidator(){
    var inputFname = document.getElementById('fname').value;
    //any Uppercase/Lowercase letters & numbers, between 6-10 characters
    var fnameRegex = /^[a-zA-Z']{0,100}$/;

    if(inputFname !== "" && fnameRegex.test(inputFname)){
       //valid password
       window.alert("First Name is valid");
       document.getElementById('fname').focus();
    }
    else if(inputFname ===""){
       // empty password
       window.alert("You did not enter a valid first name!");
       document.getElementById('fname').focus();
	}
    else{
        //password was invalid
        window.alert("You did not enter a valid first name!");
        document.getElementById('fname').focus();
    }
}

function lnameValidator(){
    var inputLname = document.getElementById('lname').value;
    //any Uppercase/Lowercase letters & numbers, between 6-10 characters
    var lnameRegex = /^[a-zA-Z']{0,100}$/;

    if(inputLname !== "" && lnameRegex.test(inputLname)){
       //valid password
       window.alert("Last Name is valid");
       document.getElementById('lname').focus();
    }
    else if(inputLname ===""){
       // empty password
       window.alert("You did not enter a valid Last name!");
       document.getElementById('lname').focus();
	}
    else{
        //password was invalid
        window.alert("You did not enter a valid Last name!");
        document.getElementById('lname').focus();
    }
}

function emailValidator(){
	//get the email address tag from the DOM
	var userEmail = document.getElementById('email').value;
	// Define Email Regex based on RFC 5322 Standard 
	var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/; 

	//Check Email not empty AND address is valid based on Email Regex 
	if(userEmail !== "" && emailRegex.test(userEmail)){ 
            //outputInfoTag.innerHTML = "Email Address is valid";
            window.alert("Email Address is valid");
	} 
	else if(userEmail ===""){ 
            //outputInfoTag.innerHTML = "You did not enter an Email Address!"; 
            window.alert("You did not enter an Email Address!");
            document.getElementById('email').focus();
	}
	else{ 
            //outputInfoTag.innerHTML = "Email Address is not valid"; 
            window.alert("Email Address is not valid");
            document.getElementById('email').focus();

	}
}

function phNumberValidator(){
    var inputPhNumber = document.getElementById('phNumber').value;
    //any Uppercase/Lowercase letters & numbers, between 6-10 characters
    var phNumberRegex = /^[0-9,()]{7,100}$/;

    if(inputPhNumber !== "" && phNumberRegex.test(inputPhNumber)){
       //valid password
       window.alert("Phone Number is valid");
       document.getElementById('phNumber').focus();
    }
    else if(inputPhNumber ===""){
       // empty password
       window.alert("You did not enter a valid phone number!");
       document.getElementById('phNumber').focus();
	}
    else{
        //password was invalid
        window.alert("You did not enter a valid phone number!");
        document.getElementById('phNumber').focus();
    }
}
