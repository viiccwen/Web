const d = document;
var cur_symbol = '';
var player_symbol = 0;
var order = Math.floor(Math.random() * 2);

var arr = ['', '', '', '', '', '', '', '', ''];

function chooseSymbol(e) {
    var et = e.target;
    if (et.classList.contains("d-x")) {
        player_symbol = 1;
    } else if (et.classList.contains("d-o")) {
        player_symbol = 2;
    }

    if (order == 0) cur_symbol = 'X';
    else cur_symbol = 'O';
}

function Check() {
    var status = 0;
    if ((arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O') ||
        (arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O') ||
        (arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O') ||
        (arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O') ||
        (arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O') ||
        (arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O') ||
        (arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O') ||
        (arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O')) status = 1;
    else if ((arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X') ||
        (arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X') ||
        (arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X') ||
        (arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X') ||
        (arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X') ||
        (arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X') ||
        (arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X') ||
        (arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X')) status = 2;
    else {
        var cnt = 0;
        for (var i = 0; i < 9; i++) {
            if (arr[i] != '') cnt++;
        }
        if (cnt == 9) status = 3;
    }

    if (status == 2) {
        if (player_symbol == 1) window.alert("恭喜!你贏了!");
        else if (player_symbol == 2) window.alert("你輸了!下次再努力!");
        location.reload()
    }
    else if (status == 1) {
        if (player_symbol == 1) window.alert("你輸了!下次再努力!");
        else if (player_symbol == 2) window.alert("恭喜!你贏了!");
        location.reload()
    }
    else if (status == 3) {
        window.alert("這局平手!");
        location.reload()
    }
}

function PlaceItem(item_name) {
    var cur_btn = d.getElementsByName("btn-" + item_name)[0];
    console.log(cur_btn.innerHTML);
    if (arr[parseInt(item_name)] == '') {
        arr[parseInt(item_name)] = cur_symbol;
        cur_btn.innerHTML = cur_symbol;

        if (cur_symbol == 'O') cur_symbol = 'X';
        else cur_symbol = 'O'
    }
    Check();
}

window.onload = function () {

}