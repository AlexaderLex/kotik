

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 7000);    
// }

function clear(){
  for (i = 0; i < document.querySelectorAll(".point").length; i++){
    document.querySelectorAll(".point")[i].style.backgroundColor="white";
  }
};
clear();

  document.querySelector(".one").addEventListener("click", function(){
  document.querySelector(".slidPix").style.backgroundImage="url('../slider/slider1.png')";
  clear();
  document.querySelector(".one").style.backgroundColor="blue";
  
});
document.querySelector(".two").addEventListener("click", function(){
  document.querySelector(".slidPix").style.backgroundImage="url('../slider/slider2.png')";
  clear();
  document.querySelector(".two").style.backgroundColor="blue";
});
document.querySelector(".three").addEventListener("click", function(){
  document.querySelector(".slidPix").style.backgroundImage="url('../slider/slider3.png')";
  clear();
  document.querySelector(".three").style.backgroundColor="blue";
});
document.querySelector(".four").addEventListener("click", function(){
  document.querySelector(".slidPix").style.backgroundImage="url('../slider/slider4.png')";
  clear();
  document.querySelector(".four").style.backgroundColor="blue";
});
document.querySelector(".five").addEventListener("click", function(){
  document.querySelector(".slidPix").style.backgroundImage="url('../slider/slider5.png')";
  clear();
  document.querySelector(".five").style.backgroundColor="blue";
});
