
var qs = document.querySelector.bind(document);
var qsA = document.querySelectorAll.bind(document);

// console.log(qs(".left_arr").src);

//  console.log( qs("#prev").children.length);
// console.log(qsA(".smallSlide-wrap img").length);

var image = qs(".smallSlideImg");

// console.log(image.getAttribute("value"));
var imgSrc = [];
var imgVal = [];

var images = function () {
    for (var i = 0; i < qsA(".smallSlideImg").length; i++) {
        imgSrc.push(qsA(".smallSlideImg")[i].getAttribute("src"));
        imgVal.push(qsA(".smallSlideImg")[i].getAttribute("value"));
    }
};

images();



let slide = qsA(".slideItSelf a").length;
// console.log(slide);
// console.log(imgSrc);
// console.log(imgVal);

var imgClicks = qsA(".smallSlideImg");


 

     














