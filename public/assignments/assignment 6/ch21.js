function task21_1(){
    var firstname  = prompt("enter your first name");
var lastname  = prompt("enter your last name");

var fullname = firstname +" "+ lastname;

document.write("Assalam.o.alikum " + fullname);
}

function task21_2(){
    var phone  = prompt("enter your favourite mobile phone name");
    var count = phone.length;
    document.write("My favorite phone is : " + phone);

    document.write("</br>length of string : " + count);
}
function task21_3(){
    var string = "paksitani";
    document.write(string + "<br>");
    var a = string.indexOf("n");
    document.write(" index of n : " + a);
}
function task21_4(){
    var string = "HELLO WORLD";
    document.write(string + "<br>");
    var a = string.lastIndexOf("L");
    document.write(" index of L : " + a);
}
function task21_5(){
    var string = "pakistani";
    document.write(string + "<br>");
    var a = string.charAt(3);
    document.write(" character at index 3  : " + a);
}
function task21_6(){
    var firstname = prompt("enter your first name");
    var lastname  = prompt("enter your last name ");
    var fullname = firstname.concat(lastname);
    document.write(fullname);
}
function task21_7(){
    var city = "Hydrabad";
    var rep = city.replace("Hydra","Islama");
    document.write(rep);
}
function task21_8(){
    var message = ' "Ali and Sami are best friends. They play cricket and football together."' ;
    var rep = message.replace(/and/g , "&");
    document.write(rep);
}
function task21_9(){
    var a = "472";
    var b = parseInt(a);
    document.write("value : "+a + "<br>");
    document.write("type : " +typeof(a)+ "<br>");

    document.write("value : "+b + "<br>");
    document.write("type : " +typeof(b)+ "<br>");
}
function task21_10(){
    var str = prompt("enter leter");
    var res = str.toUpperCase();
    document.write(res);
}
function task21_11(){
    var str = prompt("enter leter");
    var check=str[0]
    str = str.replace(str[0],check.toUpperCase())
    document.write(str);
}
function task21_12(){
    var num = 35.36;
    var check = num.toString();
    var a=check.indexOf(".");
    check= check.slice(0,a)+check.slice(a+1)
    alert(check)   
    
}
function task21_13(){
    var a = prompt("please input your name");
    for (let i = 0; i < a.length; i++) {
        if (a[i] == String.fromCharCode(33) || a[i] == String.fromCharCode(44) || a[0] == String.fromCharCode(44) || a[i] == String.fromCharCode(46) || a[i] == String.fromCharCode(64)) {
            alert("please enter a valid username")
            break
        }
        if(i === a.length -1){
            alert(a)
        }
    }
}
function task21_14(){
    var arr=["cake", "apple pie", "cookie", "chips", "patties"];
    var user=prompt("Welcome to ABC bakery.What do you want toorder sir/ma'am");
    user=user.toLocaleLowerCase();
    for (var i=0;i<arr.length;i++){
        if(user===arr[i]){
            alert(user+" is available at index " +(i+1)+" in our Bakery")
            var check=true;
            break;
        }
        else{}
    }
    if(!check){
        alert("We are sorry "+user+ " is not available in our Bakery");
    }
    else{}
    
}

function task21_15(){
    var user=prompt("Enter Password :");
    var check,i,letter,no;
    if(user.length>=6){
        check=user.charAt(0)
           if(!(check>=0 && check<=9)){

               for(i=0;i<user.length;i++){
                   check=user.charCodeAt(i);
                    if((check>=65 && check<=90) || (check>=97 && check<=122)  ){
                        letter=true
                        
                    }
                    else if((check>=48 && check<=57)){
                        no=true;
                    }
                    else{
                        
                    }

               }
               if(letter && no){
                   alert("Password set")

                }
                else{
                    alert("Password does not meet our requirements")
                    alert("Please enter a valid password")
                }
            
        }
            else{
            alert("Password not start with a number")
        }

   

    }
    else{
        alert("Password must at least 6 characters long ")
    }
}
function task21_16(){
    var university = 'University of Karachi';
    var res = university.split("");
        for(i=0; i<res.length; i++){
            document.write("<br>" + res[i]);
            }
}

function task21_17(){
    var a = prompt("Enter any string");
    var b = a.charAt(a.length-1);
    alert("your last character is : "+b)
}
function task21_18(){
    var str="the quick brown fox jumps over the lazy dog"
    var i,check,counter=0;
    for(i=0;i<str.length;i++){
        check =str.slice(i,i+3)
        if(check=="the"){
            counter+=1
        }
        else{}
    }
    alert(counter)
}