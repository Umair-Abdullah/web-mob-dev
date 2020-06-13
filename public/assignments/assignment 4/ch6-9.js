function task6_1(){
    var a=prompt("Enter any number : ");
    document.write("<h1>Result</h1>"+"</br>"+"</br>"+"</br>");
    document.write("The value of a is : "+a+"</br>"+"................................"+"</br>"+"</br>"+"</br>");

    a=++a;
    document.write("The value of ++a is : "+a+"</br>");
    document.write("Now the value of a is : "+a+"</br>"+"</br>"+"</br>");

    a=a++;
    document.write("The value of a++ is : "+a+"</br>");
    document.write("Now the value of a is : "+a+"</br>"+"</br>"+"</br>");

    a=--a;
    document.write("The value of --a is : "+a+"</br>");
    document.write("Now the value of a is : "+a+"</br>"+"</br>"+"</br>");

    a=a--;
    document.write("The value of a-- is : "+a+"</br>");
    document.write("Now the value of a is : "+a+"</br>"+"</br>"+"</br>");

}
function task6_2(){
    var a = 2, b = 1;
    a = 2, b = 1;
    var result= --a;
    document.write("a is "+a+"</br>");
    document.write("b is "+b+"</br>");
    document.write("Result is "+result+"</br>"+"</br>"+"</br>");

    result-= --b;
    document.write("a is "+a+"</br>");
    document.write("b is "+b+"</br>");
    document.write("Result is "+result+"</br>"+"</br>"+"</br>");

    result+= ++b;
    document.write("a is "+a+"</br>");
    document.write("b is "+b+"</br>");
    document.write("Result is "+result+"</br>"+"</br>"+"</br>");

    result+= b--;
    document.write("a is "+a+"</br>");
    document.write("b is "+b+"</br>");
    document.write("Result is "+result+"</br>"+"</br>"+"</br>");
}
function task6_3(){
    var user=prompt("Enter Your Name : ");
    document.write("Assalam O Alaikum "+user);
}
function task6_4(){
    var i,result;
    var tno=prompt("Enter Table No : ");

    if (tno != ""){
            document.write("Table of "+tno+"</br>")
        for (i=1; i<=10;i++){
            result=i*tno;
            document.write(tno+" X "+i+" = "+result+"</br>");
    
                }
            }

    else{
        for (i=1; i<=10;i++){
            tno=5
            result=i*tno;
            document.write(tno+" X "+i+" = "+result+"</br>");
            }
        } 
}
function task6_5(){
    var sub1=prompt("Enter your First subject :");
    var sub2=prompt("Entet your Second Subject : ");
    var sub3=prompt("Enter your Third Subject : ");
    var total=100;
    var ftotal=total*3;
    var obt1=prompt("Enter your Obtain Marks of First subject :");
    var obt2=prompt("Enter your Obtain Marks of Second subject :");
    var obt3=prompt("Enter your Obtain Marks of Third subject :");
    var obt=(+obt1)+(+obt2)+(+obt3);
    var result1=(obt1/total)*100;
    var result2=(obt2/total)*100;
    var result3=(obt3/total)*100;
    var result=(result1+result2+result3)/3;
    document.write("<table><thead> <tr> <th>Subjuct</th> <th>Total Marks</th><th>Obtain Marks</th> <th>Percentage</th></tr></thead> <tbody><tr><td>"+sub1+ "</td><td>"+total+"</td><td>"+obt1+"</td><td>"+result1+"%</td></tr><tr><td>"+sub2+ "</td><td>"+total+"</td><td>"+obt2+"</td><td>"+result2+"%</td></tr><tr><td>"+sub3+ "</td><td>"+total+"</td><td>"+obt3+"</td><td>"+result3+"%</td></tr></tbody><tfoot><tr><td></td><td>"+ftotal+"</td><td>"+obt+"</td><td>"+result+"%<td></tr></tfoot> </table>");

}