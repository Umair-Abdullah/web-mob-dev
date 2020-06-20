function task12_1(){
    var check,verify;
    var user=prompt("Enter any character ");
    for (var i=0;i<user.length;i++){
        check=user.charCodeAt(i);
        verify=user.charAt(i) 
        if(check>64 && check<91){
            document.write(verify+ " = UPPER CASE LETTER </br>");
        }
        else if(check>96 && check<123){
            document.write( verify+ " = lower case letter</br>");
        }
        else if(check>47 && check<58){
            document.write( verify+" = number </br>");
        }
        else{
            document.write(verify+ " = neither character nor number</br>");

        }
    }
}

function task12_2(){
    var val1=prompt("Enete first number");
    var val2=prompt("Enete second number");
    if(val1>val2){
        alert(val1+" is greater");
    }
    else if(val1<val2){
        alert(val2+" is grater");
    }
    else if(val1=val2){
        alert(val1 +" is equal to" +val2)
    }
    else{
        alert("Please enter valid number")
    }
}
function task12_3(){
    var user = prompt("please Enter any number");
    var check=user.charAt(0);
    if(check=="-"){
        alert(user+" is negative number");
    }
    else if(check!="-"){
        alert(user+" is positive number");
    }
    else{
        alert("Please Enter valid Number")
    }

}
function task12_4(){
    var user=prompt("Please Enter only one character ");
    var check=user.charCodeAt(0);
    var len=user.length;
     if(len==1){
        if(check==65 || check==69 || check==73 || check==79|| check==85 || check==97 || check==101 || check==105 || check==111 || check==117){
            alert("Its a vowel")
        }
        else{
            alert("its not a vowel")
        }
    }
    else{
        alert("Pease Enter only one character")
    }
}
function task12_5(){
    var m_pass="umair";
    var u_pass=prompt("Enter Password")
    if(!(u_pass==="")){
        if(m_pass===u_pass){
            alert("Correct! The password you entered matches the original password");
        }
        else{
            alert("Incorrect password")
        }

    }
    else{
        alert("Please enter your password")
    }
}

function task12_6(){
    var greeting; 
    var hour = 13; 
    if (hour < 18) { 
        greeting = "Good day";
    }
    else {
        greeting = "Good evening"; 
    }
    alert(greeting);
}
function task12_7(){
    var user=prompt("Please Enter Time in 24 hours clock format");
    var conv=parseInt(user);
    var pm=conv-12;
    if(conv==0){
        alert("The time is 12 am" )
    }
    else if(conv==12){
        alert("The time is 12 pm" )
    }
    else if (conv>=0 && conv<12){
        alert("The time is "+ conv+" am");
    }
    else if(conv>=12 && conv<24){
        alert("The time is "+ pm+" pm");
    }
    else{
        alert("Please Enter valid Time in 24 hours clock format ")
    }
}