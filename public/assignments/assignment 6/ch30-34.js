function task30_1(){
    var date=new Date();
    alert(date)
}
function task30_2(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

    const date = new Date();
    alert("The current month is " + monthNames[date.getMonth()])
}
function task30_3(){
    const weekNames = ["Mon","Tus","Wed","Thu","Fri","sat","sun"];

    const date = new Date();
    alert("Today is " + weekNames[date.getMonth()]);
}
function task30_4(){
    const date = new Date();
    var day=date.getDay();
    if(day==6 || day==0){
        alert("Its Fun Day");

    }
    else{
        alert("Its working Day");
    }
}
function task30_5(){
    const date = new Date();
    var d=date.getDate();
    if(d<=15 ){
        alert("First fifteen days of the month");

    }
    else{
        alert("Last days of the month");
    }
}
function task30_6(){
    const time = new Date();
    var ms=time.getTime();
    var min=ms*Math.pow(1.6666666666667,-5);
        alert("Current Date : "+time+"\nElapsed Millisecond since midnight, Jan. 1, 1970 : "+ms+"\nElapsed Minutes since midnight, Jan. 1, 1970 : "+min);
}
function task30_7(){
    const date = new Date();
    var time=date.getHours();
    if(time<12){
        alert("It's AM")
    }
    else{
        alert("It's PM")
    }
}
function task30_8(){
    const date=new Date();
    var lastDay = new Date("December 31, 2020");
    alert(lastDay)
}
function task30_9(){
    const today=new Date();
    var ramdanDay = new Date("Apral 24, 2020");
    var td_ms=today.getTime();
    var rm_ms=ramdanDay.getTime();
    var cal=td_ms-rm_ms;
    var days=cal / (1000 * 60 * 60 * 24);
    alert(days+" of have days past since 1st Ramadan")
}
function task30_10(){
    const date=new Date("Jan 1, 2015");
    var ref_Day = new Date("December 05, 2015 22:50:16");
    var d_ms=date.getTime();
    var rd_ms=ref_Day.getTime();
    var cal=rd_ms-d_ms;
    cal=cal / (1000 * 60 );
    alert("On reference date "+ref_Day+"\n"+cal+" second had passed since beginning of 2015")
}
function task30_11(){
    const date=new Date();
    var h1=date.getTime();
    var cal= h1-(1000 * 60* 60);
    var  date1= new Date(cal)
    alert(date+"\n"+date1);
}
function task30_12(){
    const date=new Date();
    var h1=date.getTime();
    var cal=h1- (1000 * 60* 60 * 24 *365.25 * 100 );
    var  date1= new Date(cal);
    alert("Current Date : "+date+"\n100 years ago it was : "+date1);
    alert(date+"\n"+date1);
}
function task30_13(){
    const date=new Date();
    var age=prompt("Enter your Age ");
    var h1=date.getTime();
    var cal=h1- (1000 * 60* 60 * 24 *365.25 )*age;
    var b_year=new Date(cal);
    b_year=b_year.getFullYear();
    alert("Your age is : " + age +"\nYour birth Year is "+b_year)
}
function task30_14(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const date=new Date();
    var c_name=prompt("Enter Customer Name ")
    var units=prompt("Enter Number of units")
    var charges=16;
    var net=charges*units;
    var s_charge=350;
    var g_pay=net+s_charge;
    document.write("<b><h1>K-Electric Bill</h1></b></br></br></br></br>")
    document.write("Customer Name : <b>"+c_name+"</b></br> Month <b>"+monthNames[date.getMonth()]+"</b></br>Number of units : <b>"+units+"</b</br>Charges per unit : <b>"+charges);

    document.write("</br></br>Net Amount Payable (within Due Date) : <b>"+ net+ " </b></br>Late Payment Surcharge : <b>"+s_charge+"</b></br>Gross Amount Payable (after Due Date) : <b>"+g_pay+"</b>");
}