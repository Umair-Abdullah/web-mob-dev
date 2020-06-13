function task9_1(){
    var city=prompt("Enter City Name ");
    city=city.toLowerCase();
    if (city === "karachi"){
        document.write("<b>Welcome to city of lights</b>");
    }
    else{
        document.write("<b>Welcome to "+city+" city</b>");


    }
}
function task9_2(){
    var gender=prompt("Enter your Gender ");
    gender=gender.toLowerCase();
    if (gender=="male"){
    alert("Good Morning Sir");
    }
    else if(gender=="female"){
        alert("Good Morning Ma'am");
    }
    else{
        alert("Please enter male or female");
    }
}

function task9_3(){
    var user=prompt("Enter Signal Color ");
    user=user.toLowerCase();
    if(user=="red"){
        alert("Must Stop");
    }
    else if(user=="yellow"){
        alert("Ready to move");
    }
    else if(user=="green"){
        alert("Move now");
    }
    else{
        alert("Please Enter valid Color")
    }
}
function task9_4(){
    var fule=prompt("Please Enter Fule value in liter")
    fule=parseFloat(fule);
    if (fule<0.25){
        alert("Please refill the fuel in your car");
    }
    else if(fule>=0.25){
        alert("You have enough fule in your car")
    }
    else {
        alert("Please Enter valid input")
    }
}
function task9_5(){
    var a = 4;
    if (++a === 5){
         alert("given condition for variable a is true");
         }
    var b = 82;
    if (b++ === 83){ 
        alert("given condition for variable b is true");
     }
     var c = 12; 
     if (c++ === 13){ 
         alert("condition 1 is true"); 
        }
         if (c === 13){ 
            alert("condition 2 is true"); 
        } 
        if (++c < 14){ 
            alert("condition 3 is true"); 
        }
         if(c === 14){ 
             alert("condition 4 is true"); 
            }
    var materialCost = 20000;
    var laborCost = 2000; 
    var totalCost = materialCost + laborCost; 
        if (totalCost === laborCost + materialCost){ 
                alert("The cost equals");         
            }
    if (true){ 
        alert("True"); 
    } 
    if (false){
         alert("False"); 
        }
    if("car" < "cat"){ 
        alert("car is smaller than cat"); 
    }
}
function task9_6(){
    document.write("<b><h1>Marks Sheet</h1></b>"+"</br>"+"</br>"+"</br>");

    var obt=prompt("Enter Your Obtain Marks in 3 subjects");
    obt=parseFloat(obt);
    var result=obt/3;
    if (result>=80){
        document.write("Total Marks : 300"+"</br>");
        document.write("Marks Obtained : "+obt+"</br>");
        document.write("Percentage : "+result+"% </br>");
        document.write("Grade : A-One"+"</br>");
        document.write("Remarks : Excellent")
    }
    else if (result>=70){
        document.write("Total Marks : 300"+"</br>");
        document.write("Marks Obtained : "+obt+"</br>");
        document.write("Percentage : "+result+"% </br>");
        document.write("Grade : A"+"</br>");
        document.write("Remarks : Good");
    }
    else if (result>=60){
        document.write("Total Marks : 300"+"</br>");
        document.write("Marks Obtained : "+obt+"</br>");
        document.write("Percentage : "+result+"% </br>");
        document.write("Grade : B"+"</br>");
        document.write("Remarks : You Need to improve");
    }
    else if (result<60){
        document.write("Total Marks : 300"+"</br>");
        document.write("Marks Obtained : "+obt+"</br>");
        document.write("Percentage : "+result+"% </br>");
        document.write("Grade : Fail"+"</br>");
        document.write("Remarks : Sorry")
    }

}
function task9_7(){
    var user=prompt("Enter any Number between 1 till 10");
    user=parseInt(user)
    var no=parseInt((Math.random()*10)+1);
    var cno=no+1;
    if(user==no){
        alert("Bingo! Correct answer");
    }
    else if(cno==user){
        alert("Close enough to the correct answer");
    }
    else{
        alert("Try again")
    }
}
function task9_8(){
    var user=prompt("Enter any Number");
    user=parseInt(user);
    if(user%3==0){
        alert(user+" is Divisible By 3");
    }
    else{
        alert(user+" is not Divisible By 3");

    }
}
function task9_9(){
    var user=prompt("Enter any Number");
    user=parseInt(user);
    if(user%2==0){
        alert(user+" is Even Number");
    }
    else{
        alert(user+" is odd Number");

    }
}
function task9_10(){
    var tem=prompt("Enter Temperature");
    tem=parseInt(tem);
    if(tem>40){
        alert("It is too hot outside.");
    }
    else if(tem>30){
        alert("The Weather today is Normal");
    }
    else if(tem>20){
        alert("Today’s Weather is cool.")
    }
    else if(tem>10){
        alert("OMG! Today’s weather is so Cool.")
    }
    else{
        alert("You Enter Wrong Input")
    }
}
function task9_11(){
    var no1=parseInt(prompt("Enter First number"));
    var no2=parseInt(prompt("Enter Second number"));
    var op=prompt("Enter operator (+, -, *, /, %)");
    var result;
    if (op=="+"){
        result=no1+no2;
    }
    else if (op=="-"){
        result=no1-no2;
    }
    else if (op=="*"){
        result=no1*no2;
    }
    else if (op=="/"){
        result=no1/no2;
    }
    else if (op=="%"){
        result=no1%no2;
    }
    else{
        result="wrong operator or wrong input";
    }
    alert(result)

}
