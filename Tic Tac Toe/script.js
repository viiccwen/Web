const d = document;
var board = [['', '', ''], ['', '', ''], ['', '', '']];
var turn = 'X';
var player;
var winner;

function select(e) {
    var et = e.target;
    player = et.value;

    var seed = Math.floor(Math.random() * 2);

    if (seed == 0) turn = 'X';
    else turn = 'O';

    var dialog = d.getElementById('dialog');
    dialog.close();
}

function check() {
    var flag = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                flag = 1;
                break;
            }
        }
    }

    var status = 0;

    for (var i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != '') {
            status = 1;
            winner = board[i][0];
        }
    }

    for (var i = 0; i < 3; i++) {
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != '') {
            status = 1;
            winner = board[0][i];
        }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
        status = 1;
        winner = board[0][0];
    }

    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '') {
        status = 1;
        winner = board[0][2];
    }

    if (!flag) status = 2;

    if (status == 1) {
        if (winner == player) {
            alert("You Win");
            location.reload();
        } else {
            alert("You Lose");
            location.reload();
        }
    }
    else if (status == 2) {
        alert("Draw");
        location.reload();
    }

}

function add(e) {
    var et = e.target;
    var btn_id = parseInt(et.getAttribute("data-id"));
    var r = Math.floor(btn_id / 3);
    var c = btn_id % 3;

    if (board[r][c] == '') {
        console.log(btn_id);
        board[r][c] = turn;
        et.setAttribute("value", turn);
        turn = (turn == 'X') ? 'O' : 'X';
    }
    check();
}

window.onload = function () {
}