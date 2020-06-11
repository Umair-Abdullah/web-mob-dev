function task3_1(){
    var age = "I am 25 years old";
    alert(age);
}
var visit=1;
function task3_2(){
    alert("You have Visited this site at "+visit+" Times");
    visit=visit+1;
}
function task3_3(){
    var byear=1994;
    document.write("My Birth year is "+byear);
    document.write("\n Datatype of my decleard variable is "+typeof byear);
}
function task3_4(){
    var vname=prompt("Enter Your Name :");
    var ptitle=prompt("enter product title :");
    var quantity =prompt("Enter Quantity :")

    document.write("<b>"+vname+" "+"</b>"+"ordered"+"<b>"+" "+quantity+" "+ ptitle+"</b>")
}