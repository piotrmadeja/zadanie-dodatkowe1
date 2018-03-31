let arrowLeft = $('#arrow-left'),
arrowRight = $('#arrow-right'),
carouselList = $("#carousel ul"),
current = 0;




$(function(){

    var carouselList = $("#carousel ul");

    function changeSlides() {
        carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
    }

    setInterval(changeSlides, 5000); 

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
});