const menuBtn = document.querySelector('.menu-btn');
const hidden = document.querySelector('.hidden');
const header = document.querySelector('header');
const fog = document.querySelector('.fog');
const content = document.querySelector(".content");
const footer=document.querySelector("footer");
let menuOpen = false;


const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");
const card6 = document.querySelector(".card6");
const card7 = document.querySelector(".card7");
const card8 = document.querySelector(".card8");

const tilt1 = document.querySelector(".tilt1");
const tilt2 = document.querySelector(".tilt2");
const tilt3 = document.querySelector(".tilt3");
const tilt4 = document.querySelector(".tilt4");
const tilt5 = document.querySelector(".tilt5");
const tilt6 = document.querySelector(".tilt6");
const tilt7 = document.querySelector(".tilt7");
const tilt8 = document.querySelector(".tilt8");

tilt1.addEventListener("click", () => {
    card1.style.transform = "rotateY(180deg)";
})

card1.addEventListener("mouseleave", () => {
    card1.style.transform = "rotateY(0deg)";
})



tilt2.addEventListener("click", () => {
    card2.style.transform = "rotateY(180deg)";
})

card2.addEventListener("mouseleave", () => {
    card2.style.transform = "rotateY(0deg)";
})


tilt3.addEventListener("click", () => {
    card3.style.transform = "rotateY(180deg)";
})

card3.addEventListener("mouseleave", () => {
    card3.style.transform = "rotateY(0deg)";
})


tilt4.addEventListener("click", () => {
    card4.style.transform = "rotateY(180deg)";
})

card4.addEventListener("mouseleave", () => {
    card4.style.transform = "rotateY(0deg)";
})


tilt5.addEventListener("click", () => {
    card5.style.transform = "rotateY(180deg)";
})

card5.addEventListener("mouseleave", () => {
    card5.style.transform = "rotateY(0deg)";
})


tilt6.addEventListener("click", () => {
    card6.style.transform = "rotateY(180deg)";
})

card6.addEventListener("mouseleave", () => {
    card6.style.transform = "rotateY(0deg)";
})


tilt7.addEventListener("click", () => {
    card7.style.transform = "rotateY(180deg)";
})

card7.addEventListener("mouseleave", () => {
    card7.style.transform = "rotateY(0deg)";
})


tilt8.addEventListener("click", () => {
    card8.style.transform = "rotateY(180deg)";
})

card8.addEventListener("mouseleave", () => {
    card8.style.transform = "rotateY(0deg)";
})






window.addEventListener('mouseup', () => {

    if(event.target != header){
    menuBtn.classList.remove('open');
        header.style.background = "none";
        hidden.style.display="none";
        fog.style.display="none";
        fog.style.transition = "all 0.5s";
        footer.style.zIndex = "1";
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
            footer.style.zIndex = "-2";
            menuOpen = true;
        }else{
            menuBtn.classList.remove('open');
            header.style.background = "none";
            hidden.style.display="none";
            fog.style.display="none";
            fog.style.transition = "all 0.5s";
            document.body.style.overflow = "visible";
            content.style.zIndex = "1";
            footer.style.zIndex="1";
            menuOpen = false;
        }
    
    });

    
    })




const check = document.querySelector(".checkbox-check");
const checkboxText = document.querySelector('p');
const actualCheckbox = document.getElementById("my-checkbox");
var toggle = false;
var zebra = document.getElementById("zebra");
var turtle = document.getElementById("turtle");
var sparrow = document.getElementById("sparrow");
var unicorn = document.getElementById("unicorn");
var tiger = document.getElementById("tiger");
var hedgehog = document.getElementById("hedgehog");
var dolphin = document.getElementById("dolphin");
var hamster = document.getElementById("hamster");

if(toggle === false){

card1.addEventListener('click', ()=> {
    zebra.play();
})

card2.addEventListener('click', ()=>  {

turtle.play();
})


card3.addEventListener('click', ()=>   {

sparrow.play();
})

card4.addEventListener('click', ()=>  {

unicorn.play();
})

card5.addEventListener('click', ()=>  {
tiger.play();
})

card6.addEventListener('click', ()=>  {
hedgehog.play();
})

card7.addEventListener('click', ()=>  {
dolphin.play();
})

card8.addEventListener('click', ()=>   {
hamster.play();
})
}


const zebraText = document.querySelector(".zebra-text");
const turtleText = document.querySelector(".turtle-text");
const sparrowText = document.querySelector(".sparrow-text");
const unicornText = document.querySelector(".unicorn-text");
const tigerText = document.querySelector(".tiger-text");
const hedgehogText = document.querySelector(".hedgehog-text");
const dolphinText = document.querySelector(".dolphin-text");
const hamsterText = document.querySelector(".hamster-text");



function isChecked(){


    if(document.getElementById("my-checkbox").checked){
        checkboxText.textContent="Play:";
        footer.style.right="0";
        toggle = true;
        
        zebraText.style.display="none";
        turtleText.style.display="none";
        sparrowText.style.display="none";
        unicornText.style.display="none";
        tigerText.style.display="none";
        hedgehogText.style.display="none";
        dolphinText.style.display="none";
        hamsterText.style.display="none";

        
        card2.style.transform="rotateY(0deg)";
        card3.style.transform="rotateY(0deg)";
        card4.style.transform="rotateY(0deg)";
        card5.style.transform="rotateY(0deg)";
        card6.style.transform="rotateY(0deg)";
        card7.style.transform="rotateY(0deg)";
        card8.style.transform="rotateY(0deg)";
        

        card1.addEventListener('click', ()=> {
            zebra.pause();
        })
        
        card2.addEventListener('click', ()=>  {
        
        turtle.pause();
        })
        
        
        card3.addEventListener('click', ()=>   {
        
        sparrow.pause();
        })
        
        card4.addEventListener('click', ()=>  {
        
        unicorn.pause();
        })
        
        card5.addEventListener('click', ()=>  {
        tiger.pause();
        })
        
        card6.addEventListener('click', ()=>  {
        hedgehog.pause();
        })
        
        card7.addEventListener('click', ()=>  {
        dolphin.pause();
        })
        
        card8.addEventListener('click', ()=>   {
        hamster.pause();
        })
    }else{
        checkboxText.textContent="Train:";
        footer.style.right="-200px";
        icon.src="../start-1438842-1214529.png";

        zebraText.style.display="block";
        turtleText.style.display="block";
        sparrowText.style.display="block";
        unicornText.style.display="block";
        tigerText.style.display="block";
        hedgehogText.style.display="block";
        dolphinText.style.display="block";
        hamsterText.style.display="block";

       tilt1.addEventListener("click", () => {
            card1.style.transform = "rotateY(180deg)";
        })

        card1.addEventListener("mouseleave", () => {
            card1.style.transform = "rotateY(0deg)";
        })

        tilt2.addEventListener("click", () => {
            card2.style.transform = "rotateY(180deg)";
        })

        card2.addEventListener("mouseleave", () => {
            card2.style.transform = "rotateY(0deg)";
        })

        card1.addEventListener('click', ()=> {
            zebra.play();
        })
        
        card2.addEventListener('click', ()=>  {
        
        turtle.play();
        })
        
        
        card3.addEventListener('click', ()=>   {
        
        sparrow.play();
        })
        
        card4.addEventListener('click', ()=>  {
        
        unicorn.play();
        })
        
        card5.addEventListener('click', ()=>  {
        tiger.play();
        })
        
        card6.addEventListener('click', ()=>  {
        hedgehog.play();
        })
        
        card7.addEventListener('click', ()=>  {
        dolphin.play();
        })
        
        card8.addEventListener('click', ()=>   {
        hamster.play();
        })
        toggle = false;
    }

}




//   card9.addEventListener('click', ()=>  {
//     var correct=document.getElementById("correct");
//     correct.play();
//   })

var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");


  var icon = document.getElementById("imgClickAndChange");
  var icon2 = document.getElementById("repeat");

  icon2.style.display="none";


  const zeb = document.getElementById("zeb");
  const zebUnder = document.getElementById("zeb-under");
  const tur = document.getElementById("tur");
  const turUnder = document.getElementById("tur-under"); 
  const spar = document.getElementById("spar");
  const sparUnder = document.getElementById("spar-under");
  const uni = document.getElementById("uni");
  const uniUnder = document.getElementById("uni-under");
  const tig = document.getElementById("tig");
  const tigUnder = document.getElementById("tig-under");
  const hed = document.getElementById("hed");
  const hedUnder = document.getElementById("hed-under");
  const dol = document.getElementById("dol");
  const dolUnder = document.getElementById("dol-under");
  const ham = document.getElementById("ham");
  const hamUnder = document.getElementById("ham-under");


var random = 0; 



var music = [];
music.push(zebra);
music.push(turtle);
music.push(sparrow);
music.push(unicorn);
music.push(tiger);
music.push(hedgehog);
music.push(dolphin);
music.push(hamster);

var cards = [];
cards.push[card1];
cards.push[card2];
cards.push[card3];
cards.push[card4];
cards.push[card5];
cards.push[card6];
cards.push[card7];
cards.push[card8];



function start(){

    var minus = 2; 
    random = Math.floor(Math.random()*10)-minus;

    for(var i = music.length; i >= 0; i--){

        music[i].play();
        
}
}