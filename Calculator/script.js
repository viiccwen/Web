const d = document;
var display;
var string = "";

function Calculate() {
    if (string == "" || string[string.length - 1] == "+" || string[string.length - 1] == "-" || string[string.length - 1] == "*" || string[string.length - 1] == "/") return;
    var result = eval(string);
    display.value = result;
    string = result;
}

function AppendSymbol(e) {
    var et = e.target;
    var sym = et.getAttribute("data-target");
    if (string == "" && sym != "-") return;
    if (string[string.length - 1] == "+" || string[string.length - 1] == "-" || string[string.length - 1] == "*" || string[string.length - 1] == "/") return;
    string += sym;
    display.value = string;
}

function AppendNumber(e) {
    var et = e.target;
    var num = et.getAttribute("data-target");
    string += num;
    display.value = string;
}

function Clear() {
    string = "";
    display.value = string;
}

window.onload = function () {
    display = d.querySelector("#screen");
}