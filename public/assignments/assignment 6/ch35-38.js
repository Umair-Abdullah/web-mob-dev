function task35_1(){
    var date=new Date();
    alert(date)
}
function task35_2(){
    var firstname  = prompt("enter your first name");
var lastname  = prompt("enter your last name");

var fullname = firstname +" "+ lastname;

document.write("Assalam.o.alikum " + fullname);
}
function task35_3(){
    var user1=prompt("Enter any number");
    var user2=prompt("Enter any number");
    var result = (+user1) + (+user2)
    alert(result)
}
function task35_4(){
    var user1=prompt("Enter any number");
    var user2=prompt("Enter any number");
    var op=prompt("Enter Any Operator (+ , - , * , / ");
    var result;
    if(op=="+"){
        result = (+user1) + (+user2)
    }
    else if(op=="-"){
        result=user1-user2;
    }
    else if(op=="*"){
        result=user1-user2;
    }
    else if(op=="/"){
        result=user1-user2;
    }
    else{
        result="You enter wrong Operator"
    }
    alert(result)
}
function task35_5(a=10){
    var result=Math.pow(a,2)
    alert(result)
}
function task35_6(){
    var user1=prompt("Enter any number");
    var ans=1; 
              
    for (var i = 2; i <= user1; i++) {
        ans = ans * i; 
    }
    alert(ans);
}
function task35_7(){
    var user1=prompt("Enter start number");
    var user2=prompt("Enter end number");
    var a=1;
    for (var i = user1; i <= user2; i++) {
        document.write(a+") "+i+"</br>");
        a+=1
    }
}
function task35_8(){
    var base=prompt("Enter base of rightangle triange");
    var per=prompt("Enter Perpendicular of rightangle triange");
    var hyp=(Math.pow(base,2))+(Math.pow(per,2));
    alert(hyp)
}
function task35_9(w=12,h){
    h=12;
    var a= w*h;
    alert(a)
}
function task35_10(){
    var user=prompt("Enter any string")
    var arry ,i,check,len;
    len=user.length
    check=len%2;
    if(check){
        len=(len-1)/2;
        for(i=0;i<len;i++){
            check=check.push(user[i])
        }
    }
    




    // for (i=0;i<user.length;i++){
    //     arry[i]=user[i]
    // }
    // var result=user.reverse()
    // alert(result)
    // alert(arry)
    alert(check)
}
function task35_11(str){
    str=document.getElementById(str).value;
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    splitStr= splitStr.join(' '); 
    alert(splitStr);
 }
 function task35_12(str){
    str=document.getElementById(str).value;
    var str = str.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
        else{
            alert("else")
        }
    }
    alert(word)
    // return word;
}
function task35_13(field1,field2){
    field1=document.getElementById(field1).value;
    field2=document.getElementById(field2).value;
    var count=0;
    for(i=0;i<field1.length;i++){
        if(field1[i]==field2){
            count+=1;
        }
        else{

        }
    }
    alert(count);
}
function task35_14(){
    const pi=3.142
    var r=prompt("Enter Radius")
    function calcCircumference(){
        var result=2*pi*r
        alert("Circumference of circle : "+result);
    }
    function calcArea(){
        var result=pi*(Math.pow(r,2));
        alert("Area of circle : "+result);
    }
    calcCircumference();
    calcArea();
}