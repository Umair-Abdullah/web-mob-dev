function todo(){
    var task = document.getElementById("todo");
    if(task.value !=""){
    var li = document.createElement("li");
    li.setAttribute("class","text-capitalize ")
    // li.childNodes[1].setAttribute()
    
    var liText = document.createTextNode(task.value)
    li.appendChild(liText);
    document.getElementById("list").appendChild(li);

    var d_btn = document.createElement("button");
    var b_text = document.createTextNode("Delete");
    d_btn.setAttribute("onClick","del(this)")
    d_btn.setAttribute("class","btn btn-danger ml-5 mt-2")
    d_btn.appendChild(b_text);

    li.appendChild(d_btn)

    var e_btn = document.createElement("button");
    var b_text = document.createTextNode("Edit");
    e_btn.setAttribute("onClick","edit(this)")
    e_btn.setAttribute("class","btn btn-primary ml-1 mt-2")

    e_btn.appendChild(b_text);
    li.appendChild(e_btn)
    
    
    document.getElementById("todo").value=""
    }
    else{
        alert("Please enter task")
    }
 }
function del(x){
    x.parentNode.remove()
}
function edit(x){
    var val = x.parentNode.firstChild.nodeValue;
    var user = prompt("Enter Edit Value",val)
    x.parentNode.firstChild.nodeValue = user
}
function del_all(){
    document.getElementById("list").innerHTML=""
}