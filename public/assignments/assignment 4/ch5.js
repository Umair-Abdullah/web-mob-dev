function task5_1(){
    var a=prompt("Enter Any number : ");
    var b=prompt("Enter Any number : ");
    var c=(+a)+(+b);
    document.write("Sum of "+a+" and "+b+" is "+c);

}

function task5_2(){
    var a=prompt("Enter Any number : ");
    var b=prompt("Enter Any number : ");
    var add=(+a)+(+b);
    var mul=a*b;
    var div=a/b;
    var mod=a%b;
    document.write("Sum of "+a+" and "+b+" is "+add+"</br>");
    document.write("Multiplication of "+a+" and "+b+" is "+mul+"</br>");
    document.write("Division of "+a+" and "+b+" is "+div+"</br>");
    document.write("modulus of "+a+" and "+b+" is "+mod);

}
function task5_3(){
    var a;
    document.write("Value after variable declaration is : "+a+"</br>");
    var b=8;
    document.write("Initial value is : "+b+"</br>");
    b=b+1;
    document.write("Value after increment is : "+b+"</br>");
    b=b+7;
    document.write("Value after addition is : "+b+"</br>");
    b=b-1;
    document.write("Value after decrement is : "+b+"</br>");
    b=b%3;
    document.write("The remainder is : "+b);
}

function task5_4(){
    var tprice=600;
    var ticket=tprice*5;
    document.write("Total cost to Buy 5 tickets to a movie is "+ticket+" PKR");

}

function task5_5(){
    var i,result;
    var tno=prompt("Enter Table No : ");
    document.write("Table of "+tno+"</br>")
    for (i=1; i<=10;i++){
        result=i*tno;
        document.write(tno+" X "+i+" = "+result+"</br>");

    }

}
function task5_6(){
    var ctemp=prompt("Enter Celsius temperature : ");
    var ftemp=(ctemp*(9/5))+32
    document.write(ctemp+" <sup>o</sup>C "+" is "+ftemp+" <sup>o</sup>F "+"<br>");

    var f=prompt("Enter Celsius temperature : ");
    var c=(f-32)*5/9;
    document.write(f+" <sup>o</sup>F "+" is "+c+" <sup>o</sup>C ");

}
function task5_7(){
    document.write("<h1>Shopping Cart</h1>"+"</br>"+"</br>"+"</br>")
    var pi1=prompt("Enter Price Item 1 : ");
    var qi1=prompt("Enter Quntity of item 1 : ");
    var pi2=prompt("Enter Price Item 2 : ");
    var qi2=prompt("Enter Quntity of item 2 : ");
    var shipping=100;

    var i1=pi1*qi1;
    var i2=pi2*qi2;
    var total=i1+i2+shipping;

    document.write("Price of item 1 is : "+pi1+"</br>");
    document.write("Quantity of item 1 is : "+qi1+"</br>");
    document.write("Price of item 2 is : "+pi2+"</br>");
    document.write("Quantity of item 2 is : "+qi2+"</br>");
    document.write("Shipping charges is "+shipping+"</br>"+"</br>"+"</br>");
    document.write("Total cost of your order is "+total);
}
function task5_8(){

    document.write("<h1>Marks Sheet</h1>"+"</br>"+"</br>"+"</br>");
    var tmarks=prompt("Enter Total Marks : ");
    var omarks=prompt("Enter Obtain Marks : ");
    var percentage=omarks/tmarks*100;
    document.write("Total Marks : "+tmarks+"</br>");
    document.write("Obtain Marks : "+omarks+"</br>");
    document.write("Percentage : "+percentage+"%");
}
function task5_9(){
    var usd=104.80;
    var sr=28;
    var total= (10*usd)+(25*sr);
    document.write("<h1>Currency in PKR</h1>"+"</br>"+"</br>"+"</br>");
    document.write("Total Currency in PKR is "+total);

}
function task5_10(){
    var a=5;
    b=(((a+5)*10)/2);
    document.write("The answer is : "+b);

}
function task5_11(){
    document.write("<h1>Age Calculator</h1>"+"</br>"+"</br>"+"</br>");
    var cyear=2020;
    var byear=prompt("Enter your Birthday Year : ");
    var age =cyear-byear;
    document.write("Current Year : "+cyear+"</br>");
    document.write("Birth Year : "+byear+"</br>");
    document.write("Your age is "+age);
}
function task5_12(){
    document.write("<h1>The Geometrizer:</h1>"+"</br>"+"</br>"+"</br>");
    var r=prompt("Enter Radius : ");
    var pi=3.142;
    var c=2*pi*r;
    var a=pi*r*r;
    document.write("Radius of the Circle is : "+r+"</br>");
    document.write("The Circumference : "+c+"</br>");
    document.write("Area of the Circle : "+a+"</br>");
}
function task5_13(){
    document.write("<h1>The Lifetime Supply Calculator</h1>"+"</br>"+"</br>"+"</br>");
    var fs=prompt('Enter Your favorite Snake : ');
    var age=prompt("Enter Your Current age : ");
    var mage=prompt("Enter maximum age : ");
    var amont=prompt("estimated amount of snake per day : ");
    var result=(mage-age)*amont;

    document.write("Your favorite Snake is "+fs+"</br>");
    document.write("Your current age"+age+"</br>");
    document.write("Your estimated maximum age "+mage+"</br>");
    document.write("amount of snake per day "+amont+"</br>");
    document.write("You will need "+result+" to last you until the ripe old age of "+age);
    





}
