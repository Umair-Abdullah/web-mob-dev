function task43_1(){
    alert("Thanx");
    console.log('aaaa')
}
function msg(){
    alert("Thanks for purchasing a phone from us")
}

function del(){
      document.getElementById('table').deleteRow("1");
}
var clicks=0;

function inc(){

    clicks=clicks += 1;
    var result =document.getElementById("ans")
    result.innerHTML = clicks;
    console.log(clicks)
    return clicks
}
function dec(){

    clicks=clicks -= 1;
    var result =document.getElementById("ans")
    result.innerHTML = clicks;
    console.log(clicks)
}