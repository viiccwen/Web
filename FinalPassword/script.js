var ans = "";
var guess = "";
var A;
var B;
const d = document;

function Initial(){
    d.querySelector("#dif-text").style.display = "none";
    d.querySelector("#input-text").disabled = true;
    d.querySelector(".ok-btn").disabled = true;
    d.querySelector(".ok-btn").style.cursor = "no-drop";
    d.querySelector(".answer-btn").style.cursor = "no-drop";
}

function NewGame(){
    ans = "";
    guess = "";
    d.querySelector("#input-text").value = "";
    d.querySelector("#record-textarea").value = "";
    d.querySelector("#input-text").disabled = false;
    d.querySelector(".ok-btn").disabled = false;
    d.querySelector(".ok-btn").style.cursor = "pointer";
    d.querySelector(".answer-btn").style.cursor = "pointer";

    var len = d.querySelector("#sel-num").value;
    var set = [1,1,1,1,1,1,1,1,1,1];
    while(ans.length < len){
        var tmp = Math.floor(Math.random()*10).toString();
        if(--set[tmp] == 0) ans += tmp;
    }
    console.log(ans);
}

function ReviseText(){
    var i = d.querySelector("#sel-num").value;
    d.querySelector("#input-text-bar").innerHTML = `輸入${i}位數字`;
}

function Result(){
    A = 0;
    B = 0;
    for(var i=0;i<guess.length;i++){
        if(ans[i] == guess[i]) A++;
    }

    for(var i=0;i<guess.length;i++){
        for(var j=0;j<guess.length;j++){
            if(i == j) continue;
            if(ans[i] == guess[j]) B++;
        }
    }
}

function Check(){
    var in_text = d.querySelector("#input-text");
    guess = in_text.value;

    if(guess.length == parseInt(d.querySelector("#sel-num").value)){
        d.querySelector("#dif-text").style.display = "none";
        Result();
        if(A == ans.length){
            window.alert("恭喜答對!");
            NewGame();
            return;
        }
        d.querySelector("#record-textarea").value += `${guess} ==> ${A}A${B}B\n`;
    } else {
        d.querySelector("#dif-text").style.display = "inline";
    }
}

function ShowAns(){
    window.alert(`答案是${ans}`);
    Initial();
}

window.onload = function() {
    Initial();

    d.querySelector("#sel-num").addEventListener("input", ReviseText);

    d.querySelector(".newgame-btn").addEventListener("click", NewGame);

    d.querySelector(".ok-btn").addEventListener("click", Check);

    d.querySelector(".answer-btn").addEventListener("click", ShowAns);
}