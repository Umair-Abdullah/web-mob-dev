function task38_1(a,b){
    var result = Math.pow(a,b);
    alert(result)
}
function task38_2(){
    var year=parseInt(prompt("Enter Year "))

    var result= year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
    if(result){
        alert("Its a Leap Year")

    }
    else{
        alert("Its not a Leap year")
    }
}
function task38_3(){
    var a=20;
    var b=30;
    var c=40;
    var s,area;

    function s_cal(){
        s=(a+b+c)/2;
        return s
    }    
    function area_f(){
        s_cal()
        area= s*((s-a)*(s-b)*(s-c));
        return area;
    }
    alert("area of the triangle = "+area_f())
}

function task38_4(){
    var sub1=parseInt(prompt("Enter your No in subject 1 "))
    var sub2=parseInt(prompt("Enter your No in subject 2 "))
    var sub3=parseInt(prompt("Enter your No in subject 3 "))
    var avg,per;

    function avg_f(){
        avg = (sub1+sub2+sub3)/3
        return avg
    }    
    function per_f(){
        avg_f()
        per = ((sub1+sub2+sub3)/300)*100
        return per;
    }
    alert("The avarage in three subject is "+avg_f()+"\nThe persentage is = "+per_f()+"%")
}
function task38_5(val){
    var user = "This is string"
    for(var i=0;i<user.length;i++){
        if(user[i]==val){
            alert("The index no of '"+val+"' is at "+i)
            break
        }
        else{
        }

    }
}
function task38_6(){
    var user= prompt("Enter any string");
    var store=[];
    var a=0;
    for(var i=0;i<user.length;i++){
        if(user[i]=='a'||user[i]=='e'||user[i]=='i'||user[i]=='o'||user[i]=='u'){
            continue
        }
        else{
            store[a]=user.slice(i,i+1);
            a +=1
        }
    }
    var x =store.join('')
    alert(x)
}
function task38_7(){
    var user = "Pleases read this application and give me gratuity";
    var count=0,a=0;
    var temp=[];
    for(var i=0;i<user.length;i++){
        if(user[i]=='a'||user[i]=='e'||user[i]=='i'||user[i]=='o'||user[i]=='u'){
            if(user[i+1]=='a'||user[i+1]=='e'||user[i+1]=='i'||user[i+1]=='o'||user[i+1]=='u'){
                count +=1;
                temp[a] = user.slice(i,i+2);
                a+=1
            
            }  
        }  
      }
      alert(count+" times two consecutive accurrence of vowels in given sentance such as \n"+temp)
      alert(temp)
    }
// function task38_8(){


// }
function meter(){
    var user= document.getElementById('km')
    var meter = user.value * 1000;
    var result = document.getElementById('result');
    result.innerHTML = meter + " m"
}
function feet(){
    var user= document.getElementById('km')
    var feet = user.value * 3280.84;
    var result = document.getElementById('result');
    result.innerHTML = feet + " feet"
}
function inch(){
    var user= document.getElementById('km')
    var inch = user.value * 39370.1
    var result = document.getElementById('result');
    result.innerHTML = inch + " in"}
function cm(){
    var user= document.getElementById('km')
    var cm=user.value * 100000;
    var result = document.getElementById('result');
    result.innerHTML = cm + " cm"}

function task38_9(){
    var user = document.getElementById('time');
    var time = user.value;
    var overtime =document.getElementById('overtime');
    var amount
    if(time>40){
        amount=time-40;
        amount=amount*12
        overtime.innerHTML = "Your overtime pay is "+amount;
    }
    else{
        overtime.innerHTML ="You have to work for more than 40 hours to get over time pay"
    }
}

function task38_10(){
    var hundred = 0;
    var fifty =0;
    var ten=0;
    var user = document.getElementById('amount');
    var amount = user.value;
    while(amount>=10){
        if(amount>=100){
            amount=amount-100;
            hundred +=1;
        }
        else if(amount>=50){
            amount=amount-50;
            fifty +=1
        }
        else if(amount>=10){
            amount=amount-10;
            ten +=1;
        }
    }
    var result = document.getElementById('token');
    result.innerHTML = "You Have "+hundred +" hundred notes "+fifty + " fifty notes and "+ ten+ " ten notes"
}
