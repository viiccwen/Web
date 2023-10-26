const d = document;
var canvas;
var ctx;
var ColorSelector;
var SizeSelector;
var FunctionSelector;
var isMouseActive = false;
var Func = 1;
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var EraserWidthHeight = 10;

function ChangeFunction(e) {
    var func = e.target.value;

    if (func === "pen") {
        Func = 1;
    }
    else if (func === "eraser") {
        Func = 2;
    }
}

function ClearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function ChangeColor() {
    ctx.strokeStyle = ColorSelector.value;
}

function ChangeSize() {
    if (Func == 1) ctx.lineWidth = SizeSelector.value;
    else if (Func == 2) {
        EraserWidthHeight = 10 + parseInt(SizeSelector.value);
    }
}

function MouseDown(e) {
    isMouseActive = true;
    x1 = e.offsetX;
    y1 = e.offsetY;
}

function MouseMove(e) {
    if (isMouseActive) {
        if (Func == 1) {
            x2 = e.offsetX;
            y2 = e.offsetY;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            x1 = x2;
            y1 = y2;

        }
        else if (Func == 2) {
            x2 = e.offsetX;
            y2 = e.offsetY;

            ctx.clearRect(x2 - EraserWidthHeight, y2 - EraserWidthHeight, EraserWidthHeight * 2, EraserWidthHeight * 2);
        }
    }
}

function MouseUp() {
    isMouseActive = false;
}

window.onload = function () {
    canvas = d.querySelector(".CanvasItems");
    ctx = canvas.getContext('2d');
    ColorSelector = d.querySelector('#colorSelector');
    SizeSelector = d.querySelector('#sizeSelector');
    FunctionSelector = d.querySelector("#funcSelector");
};