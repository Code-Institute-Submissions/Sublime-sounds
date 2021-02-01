const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})
 
function  buildMap();


var sw = document.body.clientWidth,
    bp = 550,
    $map = $('.map');
var static = "https://maps.google.com/maps/api/staticmap?center=49.815273,6.129583&zoom=13&markers=40.440625,-79.995886&size=640x320&sensor=true";
var embed = <iframe width="950" height="500" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJPST-Ji1PlUcRQ2KGFMyWauw&key=AIzaSyBKWDIYLomHxQPQobGU072YA60s7s3uDS8" allowfullscreen></iframe>

function buildMap() {
  if(sw>bp) { //If Large Screen
      if($('.map-container').length < 1) { //If map doesn't already exist
        buildEmbed();
      }
  } else {
      if($('.static-img').length < 1) { //If static image doesn't exist
        buildStatic();
      }
  }
};

function buildEmbed() { //Build iframe view
    $('<div class="map-container"/>').html(embed).prependTo($map);
};
  
function buildStatic() { //Build static map
   var mapLink = $('.map-link').attr('href'),
       $img = $('<img class="static-img" />').attr('src',static);
   $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
}

$(window).resize(function() {
  sw = document.body.clientWidth;
  buildMap();
  google.maps.event.trigger(map, "resize");
});
   



  


