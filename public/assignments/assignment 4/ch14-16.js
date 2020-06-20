function task14_1(){
    var stu_a=[];
    var stu_o={};
    var stringArray = ["one", "two", "three"];
    var numericArray = [1, 2, 3, 4];
    var decimalArray = [1.1, 1.2, 1.3];
    var booleanArray = [true, false, false, true];
    var check;
    var qualifications = ["SSC"," HSC", "BCS","BS", "BCOM", "MS", "M.Phil.", "PhD"]
    document.write("<h1>Qualification</h1></br></br></br></br>")
    for(var i=0;i<qualifications.length;i++){
        check=qualifications[i];
        document.write((i+1)+")"+check+"</br>");
    }
}

function task14_2(){
    var stu=["Umair","Abdullah","Choudhary"];
    var score= [400,380,350];
    var s_name,s_no,result ;
    for(var i=0;i<stu.length;i++){
        s_name=stu[i];
        s_no =score[i];
        result = s_no/500*100; 
        document.write("Score of "+s_name+" is "+s_no+"Percentage. " +result+"%</br>")
    
    }
}
function task14_3(){
    var user;
    var color=["Red","Green","Blue","Black","white"];
    // for(var i=0;i<color.length;i++){
    //     document.write((i+1)+")"+color[i]+"</br>")
    // }
    
    alert((i+1)+")"+color+"\n");
//Add color at begining
    user=prompt("Which color You wants to add to the beginning");
    color.unshift(user);
    alert(color);

//Add color at end
    user=prompt("Which color You wants to add to the end");
    color.push(user);
    alert(color);

//Add 2 colors at begining
    user=prompt("Enter first color You wants to add to the beginning");
    color.unshift(user);
    user=prompt("Enter Second color You wants to add to the beginning");
    color.unshift(user);
    alert(color);

 //Delete color at begining
    alert("Click Ok to Delete First Color");
    color.shift()
    alert(color)

  //Delete color at end
  alert("Click Ok to Delete last Color");
    color.pop()
    alert(color)

 //add color at user define position

    user=prompt("At Which no You wants to add Color");
    var c_name=prompt("Enter color Name ")
    user=parseInt(user)
    color[user-1]=c_name;
    alert(color)

 //Delete color from user define position

    user=prompt("At Which no You wants to Delete Color");
    user=parseInt(user)
    color.splice(user-1,1)
    alert(color)

}

function task14_4(){
    var s_score=[320,230,480,120]
    s_score.sort();
    alert(s_score)
}
function task14_5(){
    var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
    var s_cities;
    // cities= cities.sort()
    // alert(cities)
    s_cities=cities.slice(0,3);
    alert(s_cities)
}

function task14_6(){
    var arr = ["This", "is", "my", "cat"];
    alert("Array\n"+arr);
    arr = arr.join(" ");
    alert("String\n"+arr);
}

function task14_7(){
    var devices=["Keyboard","Mouse","Printer","Monitor"];
    var check,i;
    alert("Devices : \n"+devices);
    for(i=0;i<devices.length;i+1){
        check=devices[i];
        devices.shift();
        alert("OUT :\n"+check);
        alert("Remaining List :\n"+devices)
    }
}
function task14_8(){
    var devices=["Keyboard","Mouse","Printer","Monitor"];
    var check,i,len;
    alert("Devices : \n"+devices);
    for(i=0;i<devices.length;i+1){
        len=devices.length;
        check=devices[len-1-i];
        devices.pop();
        alert("OUT :\n"+check);
        alert("Remaining List :\n"+devices)
    }
}
function task14_9(){
    var mob=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
    document.write('<center><select> <option >'+mob[0]+'</option><option value="saab">'+mob[1]+'</option><option >'+mob[2]+'</option><option >'+mob[3]+'</option><option >'+mob[4]+'</option><option >'+mob[5]+'</option></select></center>')
}