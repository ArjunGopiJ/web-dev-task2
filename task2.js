var s=document.getElementById("s")
var y=document.querySelector(".y")
var h=document.getElementById("h")
let heroBg = document.querySelector('.image img.v');
s.addEventListener("click",function(){
    y.style.display="block"
    h.style.display="block"
})
var can=document.getElementById("can")
var y=document.querySelector(".y")
var h=document.getElementById("h")
can.addEventListener("click",function(event){
    event.preventDefault()
    h.style.display="none"
    y.style.display="none"
})
var ad=document.getElementById("ad")
var y=document.querySelector(".y")
var h=document.getElementById("h")
ad.addEventListener("click",function(event){
    event.preventDefault()
    alert("Thank You For Booking Enjoy Your Ride!!!!")
    h.style.display="none"
    y.style.display="none"
})
setInterval(() => {
    heroBg.src = "c:/Users/JAGAN/Desktop/bg-light.jpg";
    
    setTimeout(() => {
        heroBg.src = "c:/Users/JAGAN/Desktop/bg.jpg";
    }, 1000);
}, 2200);