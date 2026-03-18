let slides = document.getElementsByClassName('slides');
let currentslide=0;

function changeslide(moveTo){
    if(moveTo>=slides.length){
        moveTo=0;
    }
    else if(moveTo<0){
        moveTo = slides.length-1;

    }
        slides[currentslide].classList.toggle("active");
        slides[moveTo].classList.toggle("active");
        currentslide=moveTo;

        
    }


window.onload=setInterval(function(){
    changeslide(currentslide+1)
}, 3000);

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})