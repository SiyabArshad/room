///javascript code here
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slidercomp");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";  
}
//ham burger
function myFunction(n) {
    var x = document.getElementsByClassName("navigation")[n];
    var hamb=document.getElementsByClassName("hambg")[n];
    var close=document.getElementsByClassName("close")[n];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    hamb.style.display="none";
    close.style.display="block";
    }
  }
function closeFunction(n)
{
    var hamb=document.getElementsByClassName("hambg")[n];
    var close=document.getElementsByClassName("close")[n];
    var x = document.getElementsByClassName("navigation")[n];
    x.style.display="none";
    close.style.display="none";
    hamb.style.display="block";
}
