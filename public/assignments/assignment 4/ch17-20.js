function task17_1(){
    var md_arr=[[],[],[]];
    var md_arr2=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
    alert(md_arr2)
}

function task17_2(){
    for(var i=1;i<=10;i++){
        document.write(i+"</br>")
    }
}

function task17_3(){
    var i,result;
    var tno=prompt("Enter Table No : ");
    var end=prompt("Enter end value")
    end =parseInt(end);
    document.write("Table of "+tno+"</br>")
    document.write("Length of table "+end+"</br></br></br>")
    for (i=1; i<=end;i++){
        result=i*tno;
        document.write(tno+" X "+i+" = "+result+"</br>");

    }

}
function task17_4(){
    var fruit=["apple", "banana", "mango", "orange", "strawberry"];
    var check;
    for(var i=0;i<fruit.length;i++){
        check=fruit[i]
        document.write(check+"</br>")
    }
document.write("</br></br></br></br>")
    for(var i=0;i<fruit.length;i++){
        check=fruit[i]
        document.write("Element at index "+i+ " is "+ check+"</br>")
        
    }
}
function task17_5(){
    var count,i;
    document.write("<h3><b>counting </b></h3>: ");
    for (i=1;i<=15;i++){
        document.write(i+", ");

    }
    document.write("</br></br></br><h3><b>Reverse counting</b></h3> : ");
    for (i=10;i>=1;i--){
        document.write(i+", ");

    }
    document.write("</br></br></br><h3><b>Even</b></h3> : ");
    for (i=0;i<=20;i++){
        document.write(i+", ");
        i+=1
    }
    document.write("</br></br></br><h3><b>Odd </b></h3>: ");
    for (i=1;i<=20;i++){
        document.write(i+", ");
        i+=1
    }
    document.write("</br></br></br><h3><b>Series</b></h3> : ");
    for (i=2;i<=20;i++){
        document.write(i+"k, ");
        i+=1
    }
}

function task17_6(){
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
function task17_7(){
   var A = [24, 53, 78, 91, 12];
   alert("Array Items : "+A)
   var B=A;
   B=B.sort();
   alert("The largest number is : "+B[B.length-1])
}
function task17_8(){
    var A = [24, 53, 78, 91, 12];
    alert("Array Items : "+A)
    var B=A;
    B=B.sort();
    alert("The smallest number is : "+B[0])
 }
 function task17_9(){
    var count,i;
    for (i=5;i<=100;i++){
        document.write(i+", ");
        i+=4
    }
}