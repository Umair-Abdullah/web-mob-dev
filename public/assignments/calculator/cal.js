function no(no){
   var result=document.getElementById("result")
  result.value +=no
  }
function clear_result(){
  var result=document.getElementById("result")
  result.value ="";
}
function result(){
  var result=document.getElementById("result")
  result.value = eval(result.value)
  
}