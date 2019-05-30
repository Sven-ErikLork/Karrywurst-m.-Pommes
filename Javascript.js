var myIndex = 0;
carousel();
            
function carousel() {
var i;
var x = document.getElementsByClassName("slider");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
setTimeout(carousel, 5000); // Change image every 5 seconds
    }


//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll//

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function validation(){
  var navn = document.login.navn.value;
  var email = document.login.email.value;
  //check empty field
  if(navn=="" || email==""){
      alert("Du mangler Navn og/eller Email");
      return;
  }
}

//https://www.w3schools.com/howto/howto_js_slideshow.asp//

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("billeder");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}