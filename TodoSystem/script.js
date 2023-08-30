const d = document;
var cnt = 0;

function Add(task_text, checkStatus) {
    var newtbody = d.createElement("tbody");
    
    var newtd = d.createElement("td");
    var newcheckbox = d.createElement("input");
    newcheckbox.type = "checkbox";
    newcheckbox.classList.add("ckbox");
    newcheckbox.value = cnt++;
    newcheckbox.checked = checkStatus;
    newtd.appendChild(newcheckbox);
    
    var newtd2 = d.createElement("td");
    var textNode = d.createTextNode(task_text);
    newtd2.classList.add("record-name");
    newtd2.appendChild(textNode);
    
    var newtd3 = d.createElement("td");
    var newbtn = d.createElement("input");
    newbtn.type = "button";
    newbtn.value = "刪除";
    newbtn.classList.add("btn");
    newbtn.classList.add("del-btn");
    newtd3.appendChild(newbtn);
    
    newtbody.appendChild(newtd);
    newtbody.appendChild(newtd2);
    newtbody.appendChild(newtd3);
    
    var tableNode = d.querySelector("table");
    tableNode.appendChild(newtbody);

    d.querySelector("#add-text").value = "";
}

function Delete(clickedTbody, task_text) {
    var tableNode = d.querySelector("table");
    tableNode.removeChild(clickedTbody);

    localStorage.removeItem(task_text);
}

function Revise(task_text, checked){
    localStorage.setItem(task_text, checked);
}

function initial(){
    var lc_len = localStorage.length;
    for(var i=0;i<lc_len;i++) {
        var key = localStorage.key(i); 
        var value = localStorage.getItem(key);
        var bool = (value == "true");
        Add(key, bool);
    }
}
function ClearStorage(){
    localStorage.clear();
}

window.onload = function() {
    initial();
    // ClearStorage();

    var taskList = d.querySelector("main");

    taskList.addEventListener("click", function(e) {
        var et = e.target;
        if(et.classList.contains("add-btn")) {
            var task_text = d.querySelector("#add-text").value;
            Add(task_text, false);
            localStorage.setItem(task_text, "0");
        }
        else if(et.classList.contains("del-btn")) {
            var curTbody = et.parentNode.parentNode;
            var curText = curTbody.querySelector(".record-name").innerHTML;
            Delete(curTbody,curText);
        }
        else if(et.classList.contains("ckbox")) {
            var curTbody = et.parentNode.parentNode;
            var curText = curTbody.querySelector(".record-name").innerHTML;
            Revise(curText, et.checked);
        }
    });
}