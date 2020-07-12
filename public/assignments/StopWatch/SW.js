var min=0;
var sec=0;
var msec=0;
var min_h=document.getElementById("min");
var sec_h=document.getElementById("sec");
var msec_h=document.getElementById("msec");
var start_id = document.getElementById("start");
var pause_id = document.getElementById("pause");
var stop_id = document.getElementById("stop");
var lap_id = document.getElementById("lap");
var interval;

start_id.disabled = false;
pause_id.disabled = true;
stop_id.disabled = true;
lap_id.disabled = true;

function timer(){
    msec++
    msec_h.innerHTML = msec;
    if(msec >=100){
        sec++
        sec_h.innerHTML = sec;
        msec =0;
    }
    else if(sec>=60){
        min++;
        min_h.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer,10);

    start_id.disabled=true;
    pause_id.disabled = false;
    stop_id.disabled = false;
    lap_id.disabled = false;


}

function pause(){
     clearInterval(interval)
     start_id.disabled = false;
     pause_id.disabled = true;
     stop_id.disabled = false;
     lap_id.disabled = false;



}
function stop(){
    min=0;
    sec=0;
    msec=0;
    msec_h.innerHTML =0;
    sec_h.innerHTML = 0;
    min_h.innerHTML = 0;
    
    start_id.disabled = false;
    pause_id.disabled = false;
    stop_id.disabled = true;
    lap_id.disabled = false;

    clearInterval(interval)


}
function lap(){
 li_id.innerHTML = min + " : "+sec+ " : "+msec

}