const d = document;
window.onload = function () {
    $(".pic-all").show();
    $(".pic-nature").hide();
    $(".pic-city").hide();

    d.querySelector(".btn-all").addEventListener("click", function () {
        d.querySelector(".btn-all").setAttribute("class", "btn btn-primary  btn-all");
        d.querySelector(".btn-nature").setAttribute("class", "btn btn-outline-primary btn-nature");
        d.querySelector(".btn-city").setAttribute("class", "btn btn-outline-primary btn-city");
        $(".pic-all").show();
        $(".pic-nature").hide();
        $(".pic-city").hide();
    });

    d.querySelector(".btn-nature").addEventListener("click", function () {
        d.querySelector(".btn-all").setAttribute("class", "btn btn-outline-primary  btn-all");
        d.querySelector(".btn-nature").setAttribute("class", "btn btn-primary btn-nature");
        d.querySelector(".btn-city").setAttribute("class", "btn btn-outline-primary btn-city");
        $(".pic-all").hide();
        $(".pic-nature").show();
        $(".pic-city").hide();
    });

    d.querySelector(".btn-city").addEventListener("click", function () {
        d.querySelector(".btn-all").setAttribute("class", "btn btn-outline-primary  btn-all");
        d.querySelector(".btn-nature").setAttribute("class", "btn btn-outline-primary btn-nature");
        d.querySelector(".btn-city").setAttribute("class", "btn btn-primary btn-city");
        $(".pic-all").hide();
        $(".pic-nature").hide();
        $(".pic-city").show();
    });
}