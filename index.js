/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction(){
  var  navbarLinks = document.querySelector('.navbar-links');
      navbarLinks.classList.toggle('active');

}



 // Set the date we're counting down to
var countDownDate = new Date("mar 2, 2021 15:37:25 ").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 *30 * 24)) / (1000 * 60 * 60 ));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days
    document.getElementById("time").innerHTML= hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "0";
  }
}, 1000);


