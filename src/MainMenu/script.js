const menuBtn = document.querySelector('.menu-btn');
const hidden = document.querySelector('.hidden');
const header = document.querySelector('header');
const fog = document.querySelector('.fog');
const content = document.querySelector(".content");
let menuOpen = false;


window.addEventListener('mouseup', () => {

    if(event.target != header){
    menuBtn.classList.remove('open');
        header.style.background = "none";
        hidden.style.display="none";
        fog.style.display="none";
        fog.style.transition = "all 0.5s";
        content.style.zIndex = "1";
        menuOpen = false;
    }


    menuBtn.addEventListener('click', () => {

        if(!menuOpen){
            menuBtn.classList.add('open');
            header.style.background = "orange";
            hidden.style.display="block";
            fog.style.display="block";
            fog.style.transition = "all 0.5s";
            document.body.style.overflow = "hidden";
            content.style.zIndex = "-2";
            menuOpen = true;
        }else{
            menuBtn.classList.remove('open');
            header.style.background = "none";
            hidden.style.display="none";
            fog.style.display="none";
            fog.style.transition = "all 0.5s";
            document.body.style.overflow = "visible";
            content.style.zIndex = "1";
            menuOpen = false;
        }
    
    });

    
    })






const check = document.querySelector(".checkbox-check");
const checkboxText = document.querySelector('p');
const actualCheckbox = document.getElementById("my-checkbox");

function isChecked(){

    if(document.getElementById("my-checkbox").checked){
        checkboxText.textContent="Play:";
    
    }else{
        checkboxText.textContent="Train:";
        led.style.background="orange";
    }

}