var ans = ['1', '2', '3'];
var gus = ['', '', ''];
const d = document;

function NextPage(){
    var targetVal = parseInt(this.getAttribute("data-target"));
    var CurOption = d.querySelector(`input[name="q${targetVal}"]:checked`);
    if(CurOption && CurOption.value){
        gus[targetVal - 1] =  CurOption.value;
        d.querySelector(`#question${targetVal}`).style.display = 'none';
        d.querySelector(`#question${targetVal+1}`).style.display = 'flex';
    }
    console.log(gus[targetVal - 1]);
}

function PrevPage(){
    var targetVal = parseInt(this.getAttribute("data-target"));
    d.querySelector(`#question${targetVal}`).style.display = 'none';
    d.querySelector(`#question${targetVal-1}`).style.display = 'flex';
}

function Submit(){
    var targetVal = parseInt(this.getAttribute("data-target"));
    var CurOption = d.querySelector(`input[name="q${targetVal}"]:checked`);
    var cnt = 0;
    if(CurOption && CurOption.value){
        gus[targetVal - 1] =  CurOption.value;

        for(var i=1;i<=3;i++) {
            if(ans[i-1] == gus[i-1]){
                cnt++;
                d.querySelector(`#question${i}`).style.color = 'green';
            } else {
                d.querySelector(`#question${i}`).style.color = 'red';
            }
        }
        $("#bottom").html(`<div>答對題數：${cnt}<br>總題數：3</div>`);
        cnt = 0;
    }
}

window.onload = function(){
    d.querySelector("#question1").style.display = "flex";
    d.querySelector("#question2").style.display = "none";
    d.querySelector("#question3").style.display = "none";

    var e_next = d.querySelectorAll(".btn-next");
    e_next.forEach(cur => {
        cur.addEventListener("click", NextPage);
    });

    var e_back = d.querySelectorAll(".btn-back");
    e_back.forEach(cur => {
        cur.addEventListener("click", PrevPage);
    });

    var e_submit = d.querySelectorAll(".btn-submit");
    e_submit.forEach(submit => {
        submit.addEventListener("click", Submit);
    });
}
