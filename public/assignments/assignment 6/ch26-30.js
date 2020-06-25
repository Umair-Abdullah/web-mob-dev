function task26_1(){
    var round,floor,ceil;
    var user=prompt("Enter any number")
    user=parseInt(user);
            round=Math.round(user);
            floor=Math.floor(user);
            ceil=Math.ceil(user);
            document.write("Number : "+user+"</br></br></br>");
            document.write("Round off Value : "+round+"</br></br></br>");
            document.write("Floor Value : "+floor+"</br></br></br>");
            document.write("ceil Value : "+ceil+"</br></br></br>");

}

function task26_2(){
    var round,floor,ceil;
    var user=prompt("Enter any nerative number")
    user=parseInt(user);
            round=Math.round(user);
            floor=Math.floor(user);
            ceil=Math.ceil(user);
            document.write("Number : "+user+"</br></br></br>");
            document.write("Round off Value : "+round+"</br></br></br>");
            document.write("Floor Value : "+floor+"</br></br></br>");
            document.write("ceil Value : "+ceil+"</br></br></br>");
 
}
function task26_3(){
    var a = prompt("Enter Any Number");
    var b=Math.abs(a);
    document.write("The absolute value of Number is  : "+b);
}
function task26_4(){
    var rand_no;   
        rand_no = Math.ceil(Math.random()*10);
        alert("Random dice Value is : "+rand_no)
    
}
function task26_5(){
    var rand_no;   
        rand_no = Math.ceil(Math.random()*2);
        if(rand_no==2){
            alert(rand_no+"\n  Random Coin Value is : Head")
        }
        else{
            alert(rand_no+"\n Random Coin Value is : Tail")

        }
}
function task26_6(){
    var rand_no = Math.ceil(Math.random()*100);
        alert("Random number between 1 and 100 is : "+rand_no)
    
}
function task26_7(){
    var user= prompt("Enter Your Weight In Kg");
    var result=parseFloat(user)

    alert("The weight of user is "+ result+" Kilogram")

}
 function task26_8(){
     var user=prompt("Enter any No from 1 to 10");
     var rand_no = Math.ceil(Math.random()*10);
     if(rand_no==user){
         alert("congratulation")
     }
     else{
         alert("Try again")
     }


 }