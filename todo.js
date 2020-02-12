window.onload = initAll;

var list = new Array("complete labs", "review material", "drive back home");
var btnStyle = "padding: 5px 5px;margin: 5px 5px;border-radius: 50px;font-weight:900;"
var element;


function initAll(){

    // BUTTONS 
    
    var remove = document.createElement("BUTTON");
    remove.textContent = "REMOVE";
    remove.setAttribute("style", btnStyle);
    remove.addEventListener("click", removeListItem);
    document.body.appendChild(remove);

    var add = document.createElement("BUTTON");
    add.textContent = "ADD";
    add.setAttribute("style", btnStyle);
    add.addEventListener("click", addItem);
    document.body.appendChild(add);

    var reset = document.createElement("BUTTON");
    reset.textContent = "RESET";
    reset.setAttribute("style", btnStyle);
    reset.addEventListener("click", addItemsToList);
    document.body.appendChild(reset);
    ///////////////////////////////////////////

    // INPUT 
    var inpt = document.createElement("input");
    inpt.id = "task";
    document.body.appendChild(inpt);
    ///////////////////////////////////////////

    if(document.getElementById){
        var listElmt  = document.getElementById("list");
        addItemsToList();
    }
     else{
        document.write(list);
     }   
}


function addItemsToList(){
    document.getElementById("list").innerHTML = "";
    for(item in list){
        // Create li tags 
        addItem(list[item]);
    }
}

function changeStyle(){
    element = this;
    resetSyle();
    this.style.background = "lightgrey";
    this.style.fontWeight = "bold";
}

function resetSyle(){
    var listItems = document.getElementsByTagName("LI");
    for(var i = 0; i < listItems.length; i++){
        listItems[i].style.background = "";
        listItems[i].style.fontWeight = "";
        listItems[i].setAttribute("style", "font-size: xx-large; list-style: none");
    }
}

function removeListItem(){
    var l = document.getElementById("list");
    if(element){ // check if element is set 
        l.removeChild(element);
    }
    else{ // otherwise remove first task
        if(l.childElementCount > 0){
            l.removeChild(l.childNodes[0]);
        }
        
    }
    element = null;
}

function addItem(task){
    // console.log(typeof task);
    if(typeof task != typeof ""){
        task = document.getElementById("task").value;
    }
    if (task != ""){
        var node = document.createElement("LI");
        var textNode = document.createTextNode(task);
        node.appendChild(textNode);
        node.setAttribute("style", "font-size: xx-large; list-style: none")
        node.addEventListener("click", changeStyle);
        // add to ul
        document.getElementById("list").appendChild(node);
    }
}