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
setTimeout(carousel, 2000); // Change image every 2 seconds
    }

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