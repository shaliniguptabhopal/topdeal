// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4, 
//   // items change number for slider display on desktop
  
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// });

// const myfunc=()=>{
//     let x = document.getElementById("moreless");
//     if(x.innerHTML.match("showmore")){
//         x.innerHTML="showless"
//     }
//     else{
//         x.innerHTML="showmore"
//     }


// }
// const myfunc1=()=>{
// let a = document.getElementsByClassName("listhide");
// if(a.style.display.match("block")){
//     a.style.display="none"
// }else{
//     a.style.display="block"
// }
// let a= document.getElementById("demo");
// if(a.style.display.match("block")){
//    a.style.display ="none"
// }else{
//     a.style.display="block"
// }
function changeTextAndIcon() {
    var buttonText = document.getElementById('buttonText');
    var icon = document.getElementById('icon');
if (buttonText.textContent === 'Show Less') {
    buttonText.textContent = 'Show More';
    icon.textContent = '▼'; // Change to your desired icon
  } else {
    buttonText.textContent = 'Show Less';
     icon.textContent = '▲'; // Change to your desired icon
   
  }

}
// 
document.addEventListener('DOMContentLoaded', function() {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 365); // Countdown for 365 days
  
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
  
    function updateCountdown() {
      const now = new Date().getTime();
      const difference = countdownDate - now;
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      daysElement.textContent = days + " D";
      hoursElement.textContent = hours + " H";
      minutesElement.textContent = minutes + " M";
      secondsElement.textContent = seconds + " S";
  
      if (difference < 0) {
        clearInterval(timerInterval);
        daysElement.textContent = '0 days';
        hoursElement.textContent = '0 hours';
        minutesElement.textContent = '0 minutes';
        secondsElement.textContent = '0 seconds';
      }
    }
  
    updateCountdown(); // Initial call
  
    const timerInterval = setInterval(updateCountdown, 1000); // Update every second
  });
  
