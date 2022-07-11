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
        window.location.reload();
        icon.src="../start-1438842-1214529.png";

                            zeb.style.filter ="grayscale(0%)";
                            zebUnder.style.filter= "grayscale(0%)";
                            tur.style.filter ="grayscale(0%)";
                            turUnder.style.filter= "grayscale(0%)";
                            spar.style.filter ="grayscale(0%)";
                            sparUnder.style.filter= "grayscale(0%)";
                            uni.style.filter ="grayscale(0%)";
                            uniUnder.style.filter= "grayscale(0%)";
                            tig.style.filter ="grayscale(0%)";
                            tigUnder.style.filter= "grayscale(0%)";
                            hed.style.filter ="grayscale(0%)";
                            hedUnder.style.filter= "grayscale(0%)";
                            dol.style.filter ="grayscale(0%)";
                            dolUnder.style.filter= "grayscale(0%)";
                            ham.style.filter ="grayscale(0%)";
                            hamUnder.style.filter= "grayscale(0%)";


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

  function start(){
    icon.style.display="none";
    icon2.style.display="block";
    
    random = Math.floor(Math.random()*6);  



    switch(random){
        
        case 1:
            zebra.play();

            icon2.addEventListener('click', () => {
                zebra.play();
            })
        
            card1.addEventListener ('click', () => {
                wrong.pause();
                correct.play();
                zeb.style.filter ="grayscale(100%)";
                zebUnder.style.filter= "grayscale(100%)";

                var zebra1random = 0; 
                zebra1random = Math.floor(Math.random()*7);

                                switch(zebra1random){
                                    case 0: 
                                    hamster.play(); 
            
                                        icon2.addEventListener('click', () => {
                                            zebra.pause();
                                            hamster.play();
                                        })
//hamster and zebra
                                        card8.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            ham.style.filter ="grayscale(100%)";
                                            hamUnder.style.filter= "grayscale(100%)";

                                                        var hamster2random = 0;
                                                        hamster2random = Math.floor(Math.random()*6);
                                                            switch(hamster2random){
                                                                case 0: 
                                                                dolphin.play();

                                                                    icon2.addEventListener('click', () => {
                                                                        hamster.pause();
                                                                        dolphin.play();
                                                                    })

                                                                    card7.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        dol.style.filter ="grayscale(100%)";
                                                                        dolUnder.style.filter= "grayscale(100%)";
//hamster zebra and dolphin
sparrow.play();

                                                                    icon2.addEventListener('click', () => {
                                                                        dolphin.pause();
                                                                        sparrow.play();
                                                                    })

                                                                    card3.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        spar.style.filter ="grayscale(100%)";
                                                                        sparUnder.style.filter= "grayscale(100%)";

//hamster zebra sparrow and dolphin                                         
hedgehog.play();
icon2.addEventListener('click', () => {
    sparrow.pause();
    hedgehog.play();
})

card6.addEventListener ('click', () => {
    correct.play();
    wrong.pause();
    hed.style.filter ="grayscale(100%)";
    hedUnder.style.filter= "grayscale(100%)";
//hamster zebra sparrow dolphin and hedgehog

turtle.play();
icon2.addEventListener('click', () => {
    hedgehog.pause();
    turtle.play();
})

card2.addEventListener ('click', () => {
    correct.play();
    wrong.pause();
    tur.style.filter ="grayscale(100%)";
    turUnder.style.filter= "grayscale(100%)";
//hamster zebra sparrow dolphin turtle tiger and hedgehog
tiger.play();
icon2.addEventListener('click', () => {
    turtle.pause();
    tiger.play();
})

card5.addEventListener ('click', () => {
    correct.play();
    wrong.pause();
    tig.style.filter ="grayscale(100%)";
    tigUnder.style.filter= "grayscale(100%)";
})

    
})
    
})
                                                                    })
                                                                })
//1 ending
                                                                    break; 
//zebra and hedgehog
                                                                case 1: 
                                                                hedgehog.play();

                                                                    icon2.addEventListener('click', () => {
                                                                        hamster.pause();
                                                                        hedgehog.play();
                                                                    })

                                                                    card6.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        hed.style.filter ="grayscale(100%)";
                                                                        hedUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break; 
//zebra and turtle
                                                                case 2:

                                                                    turtle.play();

                                                                    icon2.addEventListener('click', () => {
                                                                        hamster.pause();
                                                                        turtle.play();
                                                                    })

                                                                    card2.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        tur.style.filter ="grayscale(100%)";
                                                                        turUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break;

                                                                    case 3:
                                                                        sparrow.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            hamster.pause();
                                                                            sparrow.play();
                                                                        })
                            
                                                                        card3.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            spar.style.filter ="grayscale(100%)";
                                                                            sparUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
                            
                                                                        case 4:
                                                                        unicorn.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            hamster.pause();
                                                                            unicorn.play();
                                                                        })
                            
                                                                        card4.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            uni.style.filter ="grayscale(100%)";
                                                                            uniUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;

                                                                        default:
                                                                            tiger.play();

                                                                            icon2.addEventListener('click', () => {
                                                                                hamster.pause();
                                                                                tiger.play();
                                                                            })

                                                                            card5.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                tig.style.filter ="grayscale(100%)";
                                                                                tigUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;    
                                                                }

                                        })
                                        break;

                                        case 2:
                                            turtle.play();

                                            icon2.addEventListener('click', () => {
                                                zebra.pause();
                                                turtle.play();
                                            })
                                            card2.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                tur.style.filter ="grayscale(100%)";
                                                turUnder.style.filter= "grayscale(100%)";

                                                var turtle2random = 0;
                                                turtle2random = Math.floor(Math.random()*6);
                                                    switch(turtle2random){
                                                        case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                turtle.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                        
                                                        case 1:
                                                            dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                turtle.pause();
                                                                dolphin.play();
                                                            })

                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 2:
                                                            hedgehog.play();
                                                            icon2.addEventListener('click', () => {
                                                                turtle.pause();
                                                                hedgehog.play();
                                                            })

                                                            card6.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                hed.style.filter ="grayscale(100%)";
                                                                hedUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 3:
                                                            sparrow.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            turtle.pause();
                                                                            sparrow.play();
                                                                        })
                            
                                                                        card3.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            spar.style.filter ="grayscale(100%)";
                                                                            sparUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
                                                        
                                                                        case 4:
                                                                            unicorn.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                turtle.pause();
                                                                                unicorn.play();
                                                                            })
                                
                                                                            card4.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                uni.style.filter ="grayscale(100%)";
                                                                                uniUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
    
                                                                            default:
                                                                                tiger.play();
    
                                                                                icon2.addEventListener('click', () => {
                                                                                    turtle.pause();
                                                                                    tiger.play();
                                                                                })
    
                                                                                card5.addEventListener ('click', () => {
                                                                                    correct.play();
                                                                                    wrong.pause();
                                                                                    tig.style.filter ="grayscale(100%)";
                                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                                })
                                                                                break;  
                                                    }
                                            })
                                            break;

                                            case 3:
                                            sparrow.play();

                                            icon2.addEventListener('click', () => {
                                                zebra.pause();
                                                sparrow.play();
                                            })

                                            card3.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                spar.style.filter ="grayscale(100%)";
                                                sparUnder.style.filter= "grayscale(100%)";

                                                var sparrow2random = 0;
                                                sparrow2random = Math.floor(Math.random()*6);
                                                switch(sparrow2random){
                                                    case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                sparrow.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                    
                                                    case 1:
                                                        dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                sparrow.pause();
                                                                dolphin.play();
                                                            })

                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                            case 2:

                                                                turtle.play();

                                                                icon2.addEventListener('click', () => {
                                                                    sparrow.pause();
                                                                    turtle.play();
                                                                })
                                                                card2.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    tur.style.filter ="grayscale(100%)";
                                                                    turUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;

                                                                case 3:
                                                                    hedgehog.play();
                                                            icon2.addEventListener('click', () => {
                                                                sparrow.pause();
                                                                hedgehog.play();
                                                            })

                                                            card6.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                hed.style.filter ="grayscale(100%)";
                                                                hedUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                            case 4:
                                                                            unicorn.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                sparrow.pause();
                                                                                unicorn.play();
                                                                            })
                                
                                                                            card4.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                uni.style.filter ="grayscale(100%)";
                                                                                uniUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
    
                                                                            default:
                                                                                tiger.play();
    
                                                                                icon2.addEventListener('click', () => {
                                                                                    sparrow.pause();
                                                                                    tiger.play();
                                                                                })
    
                                                                                card5.addEventListener ('click', () => {
                                                                                    correct.play();
                                                                                    wrong.pause();
                                                                                    tig.style.filter ="grayscale(100%)";
                                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                                })
                                                                                break;  
                                                }
                                                
                                            })
                                            break;

                                            case 4:
                                            unicorn.play();

                                            icon2.addEventListener('click', () => {
                                                zebra.pause();
                                                unicorn.play();
                                            })

                                            card4.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                uni.style.filter ="grayscale(100%)";
                                                uniUnder.style.filter= "grayscale(100%)";

                                                var unicorn2random = 0;
                                                unicorn2random = Math.floor(Math.random()*6);
                                                    switch(unicorn2random){
                                                        case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                unicorn.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                    
                                                    case 1:
                                                        dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                unicorn.pause();
                                                                dolphin.play();
                                                            })

                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                            case 2:

                                                                turtle.play();

                                                                icon2.addEventListener('click', () => {
                                                                    unicorn.pause();
                                                                    turtle.play();
                                                                })
                                                                card2.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    tur.style.filter ="grayscale(100%)";
                                                                    turUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;

                                                            case 3:
                                                                sparrow.play();
                                                                icon2.addEventListener('click', () => {
                                                                    unicorn.pause();
                                                                    sparrow.play();
                                                                })
                                                                card3.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    spar.style.filter ="grayscale(100%)";
                                                                    sparUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;

                                                                case 4:
                                                                            hedgehog.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                unicorn.pause();
                                                                                hedgehog.play();
                                                                            })
                                
                                                                            card6.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                hed.style.filter ="grayscale(100%)";
                                                                                hedUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
    
                                                                            default:
                                                                                tiger.play();
    
                                                                                icon2.addEventListener('click', () => {
                                                                                    unicorn.pause();
                                                                                    tiger.play();
                                                                                })
    
                                                                                card5.addEventListener ('click', () => {
                                                                                    correct.play();
                                                                                    wrong.pause();
                                                                                    tig.style.filter ="grayscale(100%)";
                                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                                })
                                                                                break;  
                                                    }
                                                
                                            })
                                            break;
//zebra and tiger
                                            case 5:
                                            tiger.play();

                                            icon2.addEventListener('click', () => {
                                                zebra.pause();
                                                tiger.play();
                                            })

                                            card5.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                tig.style.filter ="grayscale(100%)";
                                                tigUnder.style.filter= "grayscale(100%)";

                                                var tiger2random = 0;
                                                tiger2random = Math.floor(Math.random()*6);

                                                switch(tiger2random){
                                                    case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                tiger.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                    
                                                    case 1:
                                                        dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                tiger.pause();
                                                                dolphin.play();
                                                            })

                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                            case 2:

                                                                turtle.play();

                                                                icon2.addEventListener('click', () => {
                                                                    tiger.pause();
                                                                    turtle.play();
                                                                })
                                                                card2.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    tur.style.filter ="grayscale(100%)";
                                                                    turUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;

                                                                case 3:
                                                                    sparrow.play();
                                                                    icon2.addEventListener('click', () => {
                                                                        tiger.pause();
                                                                        sparrow.play();
                                                                    })
                                                                    card3.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        spar.style.filter ="grayscale(100%)";
                                                                        sparUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break;

                                                                    case 4:
                                                                            unicorn.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                tiger.pause();
                                                                                unicorn.play();
                                                                            })
                                
                                                                            card4.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                uni.style.filter ="grayscale(100%)";
                                                                                uniUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
                                                                    
                                                                    default:
                                                                        hedgehog.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                tiger.pause();
                                                                                hedgehog.play();
                                                                            })
                                
                                                                            card6.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                hed.style.filter ="grayscale(100%)";
                                                                                hedUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
                                                }
                                            })
                                            break;
//zebra and dolphin

                                    case 6:
                                        dolphin.play();

                                        icon2.addEventListener('click', () => {
                                            zebra.pause();
                                            dolphin.play();
                                        })

                                        card7.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            dol.style.filter ="grayscale(100%)";
                                            dolUnder.style.filter= "grayscale(100%)";

                                            var dolphin2random = 0;
                                            dolphin2random = Math.floor(Math.random()*6);
                                            switch(dolphin2random){
                                                case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                dolphin.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                
                                                case 1:
                                                    hedgehog.play();
                                
                                                    icon2.addEventListener('click', () => {
                                                        dolphin.pause();
                                                        hedgehog.play();
                                                    })
        
                                                    card6.addEventListener ('click', () => {
                                                        correct.play();
                                                        wrong.pause();
                                                        hed.style.filter ="grayscale(100%)";
                                                        hedUnder.style.filter= "grayscale(100%)";
                                                    })
                                                    break;
                                                    case 2:

                                                        turtle.play();

                                                        icon2.addEventListener('click', () => {
                                                            dolphin.pause();
                                                            turtle.play();
                                                        })
                                                        card2.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            tur.style.filter ="grayscale(100%)";
                                                            turUnder.style.filter= "grayscale(100%)";
                                                        })
                                                        break;

                                                        case 3:
                                                            sparrow.play();
                                                            icon2.addEventListener('click', () => {
                                                                dolphin.pause();
                                                                sparrow.play();
                                                            })
                                                            card3.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                spar.style.filter ="grayscale(100%)";
                                                                sparUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                            case 4:
                                                                    unicorn.play();
                        
                                                                    icon2.addEventListener('click', () => {
                                                                        dolphin.pause();
                                                                        unicorn.play();
                                                                    })
                        
                                                                    card4.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        uni.style.filter ="grayscale(100%)";
                                                                        uniUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break;
                                                            
                                                                    default:
                                                                        tiger.play();

                                                                        icon2.addEventListener('click', () => {
                                                                            dolphin.pause();
                                                                            tiger.play();
                                                                        })

                                                                        card5.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            tig.style.filter ="grayscale(100%)";
                                                                            tigUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;  

                                            }
                                        })
                                        break; 

                                        default:
                                        hedgehog.play();

                                        icon2.addEventListener('click', () => {
                                            zebra.pause();
                                            hedgehog.play();
                                        })

                                        card6.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            hed.style.filter ="grayscale(100%)";
                                            hedUnder.style.filter= "grayscale(100%)";

                                            var hedgehog2random = 0;
                                            hedgehog2random = Math.floor(Math.random()*6);
                                                switch(hedgehog2random){
                                                    case 0:
                                                        tiger.play();
    
                                                        icon2.addEventListener('click', () => {
                                                            hedgehog.pause();
                                                            tiger.play();
                                                        })

                                                        card5.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            tig.style.filter ="grayscale(100%)";
                                                            tigUnder.style.filter= "grayscale(100%)";
                                                        })
                                                        break;  

                                                        case 1:
                                                            dolphin.play();
                                                                icon2.addEventListener('click', () => {
                                                                    hedgehog.pause();
                                                                    dolphin.play();
                                                                })
    
                                                                card7.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    dol.style.filter ="grayscale(100%)";
                                                                    dolUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;
    
                                                                case 2:
    
                                                                    turtle.play();
    
                                                                    icon2.addEventListener('click', () => {
                                                                        hedgehog.pause();
                                                                        turtle.play();
                                                                    })
                                                                    card2.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        tur.style.filter ="grayscale(100%)";
                                                                        turUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break;
    
                                                                    case 3:
                                                                        sparrow.play();
                                                                        icon2.addEventListener('click', () => {
                                                                            hedgehog.pause();
                                                                            sparrow.play();
                                                                        })
                                                                        card3.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            spar.style.filter ="grayscale(100%)";
                                                                            sparUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
    
                                                                        case 4:
                                                                                unicorn.play();
                                    
                                                                                icon2.addEventListener('click', () => {
                                                                                    hedgehog.pause();
                                                                                    unicorn.play();
                                                                                })
                                    
                                                                                card4.addEventListener ('click', () => {
                                                                                    correct.play();
                                                                                    wrong.pause();
                                                                                    uni.style.filter ="grayscale(100%)";
                                                                                    uniUnder.style.filter= "grayscale(100%)";
                                                                                })
                                                                                break;

                                                                    default:
                                                                        hamster.play(); 
            
                                                                        icon2.addEventListener('click', () => {
                                                                            hedgehog.pause();
                                                                            hamster.play();
                                                                        })
                                                                        card8.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            ham.style.filter ="grayscale(100%)";
                                                                            hamUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                    break;
                                                                
                                                }

                                        })
                                        break; 
                                }    
                
            })

            

            card8.addEventListener ('click', () => {
                wrong.play();
            })

            card2.addEventListener ('click', () => {
                wrong.play();
            })

            card3.addEventListener ('click', () => {
                wrong.play();
            })

            card4.addEventListener ('click', () => {
                wrong.play();
            })

            card5.addEventListener ('click', () => {
                wrong.play();
            })

            card6.addEventListener ('click', () => {
                wrong.play();
            })

            card7.addEventListener ('click', () => {
                wrong.play();
            })
            break;
         
        
        case 2:
            turtle.play();

            icon2.addEventListener('click', () => {
                turtle.play();
            })

            card2.addEventListener ('click', () => {
                wrong.pause();
                correct.play();
                tur.style.filter ="grayscale(100%)";
                turUnder.style.filter= "grayscale(100%)";

                                var turtle1random = 0; 
                                turtle1random = Math.floor(Math.random()*7);

                                switch(turtle1random){
                                    case 0: 
                                    hamster.play(); 

                                        icon2.addEventListener('click', () => {
                                            turtle.pause();
                                            hamster.play();
                                        })
                                        card8.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            ham.style.filter ="grayscale(100%)";
                                            hamUnder.style.filter= "grayscale(100%)";
//turtle and hamster    
                                        
                                        var hamster3random = 0;
                                        hamster3random = Math.floor(Math.random()*6);

                                        switch(hamster3random){
                                            case 0:
                                                dolphin.play();
                                                icon2.addEventListener('click', () => {
                                                    hamster.pause();
                                                    dolphin.play();
                                                })

                                                card7.addEventListener ('click', () => {
                                                    correct.play();
                                                    wrong.pause();
                                                    dol.style.filter ="grayscale(100%)";
                                                    dolUnder.style.filter= "grayscale(100%)";
                                                })
                                                break;

                                            case 1:
                                                zebra.play();
                                                icon2.addEventListener('click', () => {
                                                    hamster.pause();
                                                    zebra.play();
                                                })

                                                card1.addEventListener ('click', () => {
                                                    correct.play();
                                                    wrong.pause();
                                                    zeb.style.filter ="grayscale(100%)";
                                                    zebUnder.style.filter= "grayscale(100%)";
                                                })
                                                break;

                                                
                                                case 3:
                                                    sparrow.play();
                                                    icon2.addEventListener('click', () => {
                                                        hamster.pause();
                                                        sparrow.play();
                                                    })
                                                    card3.addEventListener ('click', () => {
                                                        correct.play();
                                                        wrong.pause();
                                                        spar.style.filter ="grayscale(100%)";
                                                        sparUnder.style.filter= "grayscale(100%)";
                                                    })
                                                    break;

                                                    case 4:
                                                            unicorn.play();
                
                                                            icon2.addEventListener('click', () => {
                                                                hamster.pause();
                                                                unicorn.play();
                                                            })
                
                                                            card4.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                uni.style.filter ="grayscale(100%)";
                                                                uniUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                    default:

                                                        tiger.play();
    
                                                        icon2.addEventListener('click', () => {
                                                            hamster.pause();
                                                            tiger.play();
                                                        })

                                                        card5.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            tig.style.filter ="grayscale(100%)";
                                                            tigUnder.style.filter= "grayscale(100%)";
                                                        })
                                                        break;  

                                        }    
                                        })
                                        break;
//zebra and turtle
                                        case 1: 
                                        zebra.play(); 

                                        icon2.addEventListener('click', () => {
                                            turtle.pause();
                                            zebra.play();
                                        })
                                        card1.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            zeb.style.filter ="grayscale(100%)";
                                            zebUnder.style.filter= "grayscale(100%)";

                                            var zebra3random = 0;
                                            zebra3random = Math.floor(Math.random()*6);
                                            switch(zebra3random){
                                                    case 0: 
                                                    dolphin.play();
                                                    icon2.addEventListener('click', () => {
                                                        zebra.pause();
                                                        dolphin.play();
                                                    })

                                                    card7.addEventListener ('click', () => {
                                                        correct.play();
                                                        wrong.pause();
                                                        dol.style.filter ="grayscale(100%)";
                                                        dolUnder.style.filter= "grayscale(100%)";
                                                    })
                                                    break;
                                                
                                                    case 1:
                                                        hamster.play(); 
            
                                                        icon2.addEventListener('click', () => {
                                                            dolphin.pause();
                                                            hamster.play();
                                                        })
                                                        card8.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            ham.style.filter ="grayscale(100%)";
                                                            hamUnder.style.filter= "grayscale(100%)";
                                                        })
                                                    break;

                                                    case 2:

                                                        hedgehog.play();
    
                                                        icon2.addEventListener('click', () => {
                                                            zebra.pause();
                                                            hedgehog.play();
                                                        })
                                                        card6.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            hed.style.filter ="grayscale(100%)";
                                                            hedUnder.style.filter= "grayscale(100%)";
                                                        })
                                                        break;

                                                        case 3:
                                                            sparrow.play();
                                                            icon2.addEventListener('click', () => {
                                                                zebra.pause();
                                                                sparrow.play();
                                                            })
                                                            card3.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                spar.style.filter ="grayscale(100%)";
                                                                sparUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;
        
                                                            case 4:
                                                                    unicorn.play();
                        
                                                                    icon2.addEventListener('click', () => {
                                                                        zebra.pause();
                                                                        unicorn.play();
                                                                    })
                        
                                                                    card4.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        uni.style.filter ="grayscale(100%)";
                                                                        uniUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break;
        
                                                            default:
        
                                                                tiger.play();
            
                                                                icon2.addEventListener('click', () => {
                                                                    zebra.pause();
                                                                    tiger.play();
                                                                })
        
                                                                card5.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    tig.style.filter ="grayscale(100%)";
                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;  
                                            }
                                        })
                                        break;

                                        case 3:
                                            sparrow.play();

                                            icon2.addEventListener('click', () => {
                                                turtle.pause();
                                                sparrow.play();
                                            })

                                            card3.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                spar.style.filter ="grayscale(100%)";
                                                sparUnder.style.filter= "grayscale(100%)";

                                                        
                                            var sparrow3random = 0;
                                            sparrow3random = Math.floor(Math.random()*6);
//sparrow and turtle
                                            switch(sparrow3random){
                                                    case 0: 
                                                    dolphin.play();
                                                    icon2.addEventListener('click', () => {
                                                        sparrow.pause();
                                                        dolphin.play();
                                                    })

                                                    card7.addEventListener ('click', () => {
                                                        correct.play();
                                                        wrong.pause();
                                                        dol.style.filter ="grayscale(100%)";
                                                        dolUnder.style.filter= "grayscale(100%)";
                                                    })
                                                    break;
                                                
                                                    case 1:
                                                        hamster.play(); 
            
                                                        icon2.addEventListener('click', () => {
                                                            sparrow.pause();
                                                            hamster.play();
                                                        })
                                                        card8.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            ham.style.filter ="grayscale(100%)";
                                                            hamUnder.style.filter= "grayscale(100%)";
                                                        })
                                                    break;

                                                    case 2:

                                                        hedgehog.play();
                                                        icon2.addEventListener('click', () => {
                                                            sparrow.pause();
                                                            hedgehog.play();
                                                        })
                                                        card6.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            hed.style.filter ="grayscale(100%)";
                                                            hedUnder.style.filter= "grayscale(100%)";
                                                        })
                                                        break;

                                                        case 3:
                                                            zebra.play();
                                                            icon2.addEventListener('click', () => {
                                                                sparrow.pause();
                                                                zebra.play();
                                                            })
                                                            card1.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                zeb.style.filter ="grayscale(100%)";
                                                                zebUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;
        
                                                            case 4:
                                                                    unicorn.play();
                        
                                                                    icon2.addEventListener('click', () => {
                                                                        sparrow.pause();
                                                                        unicorn.play();
                                                                    })
                        
                                                                    card4.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        uni.style.filter ="grayscale(100%)";
                                                                        uniUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break;
        
                                                            default:
        
                                                                tiger.play();
            
                                                                icon2.addEventListener('click', () => {
                                                                    sparrow.pause();
                                                                    tiger.play();
                                                                })
        
                                                                card5.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    tig.style.filter ="grayscale(100%)";
                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;  
                                            }
                                            })
                                            break;
//HERE
//UNICORN AND TURTLE
                                            case 4:
                                            unicorn.play();

                                            icon2.addEventListener('click', () => {
                                                turtle.pause();
                                                unicorn.play();
                                            })

                                            card4.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                uni.style.filter ="grayscale(100%)";
                                                uniUnder.style.filter= "grayscale(100%)";

                                                var unicorn3random = 0;
                                                unicorn3random = Math.floor(Math.random()*6);

                                            switch(unicorn3random){
                                                    case 0: 
                                                    dolphin.play();
                                                    icon2.addEventListener('click', () => {
                                                        unicorn.pause();
                                                        dolphin.play();
                                                    })

                                                    card7.addEventListener ('click', () => {
                                                        correct.play();
                                                        wrong.pause();
                                                        dol.style.filter ="grayscale(100%)";
                                                        dolUnder.style.filter= "grayscale(100%)";
                                                    })
                                                    break;
                                                
                                                    case 1:
                                                        hamster.play(); 
            
                                                        icon2.addEventListener('click', () => {
                                                            unicorn.pause();
                                                            hamster.play();
                                                        })
                                                        card8.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            ham.style.filter ="grayscale(100%)";
                                                            hamUnder.style.filter= "grayscale(100%)";
                                                        })
                                                    break;

                                                    case 2:

                                                        hedgehog.play();
                                                        icon2.addEventListener('click', () => {
                                                            unicorn.pause();
                                                            hedgehog.play();
                                                        })
                                                        card6.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            hed.style.filter ="grayscale(100%)";
                                                            hedUnder.style.filter= "grayscale(100%)";
                                                        })
                                                        break;

                                                        case 3:
                                                            zebra.play();
                                                            icon2.addEventListener('click', () => {
                                                                unicorn.pause();
                                                                zebra.play();
                                                            })
                                                            card1.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                zeb.style.filter ="grayscale(100%)";
                                                                zebUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;
        
                                                            case 4:
                                                                    sparrow.play();
                        
                                                                    icon2.addEventListener('click', () => {
                                                                        unicorn.pause();
                                                                        sparrow.play();
                                                                    })
                        
                                                                    card3.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        spar.style.filter ="grayscale(100%)";
                                                                        sparUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break;
        
                                                            default:
        
                                                                tiger.play();
            
                                                                icon2.addEventListener('click', () => {
                                                                    unicorn.pause();
                                                                    tiger.play();
                                                                })
        
                                                                card5.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    tig.style.filter ="grayscale(100%)";
                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;  
                                            }
                                            })
                                            break;
//tiger and turtle
                                            case 5:
                                            tiger.play();

                                            icon2.addEventListener('click', () => {
                                                turtle.pause();
                                                tiger.play();
                                            })

                                            card5.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                tig.style.filter ="grayscale(100%)";
                                                tigUnder.style.filter= "grayscale(100%)";

                                                var tiger3random = 0;
                                            tiger3random = Math.floor(Math.random()*6);
                                            switch(tiger3random){
                                                    case 0: 
                                                    dolphin.play();
                                                    icon2.addEventListener('click', () => {
                                                        tiger.pause();
                                                        dolphin.play();
                                                    })

                                                    card7.addEventListener ('click', () => {
                                                        correct.play();
                                                        wrong.pause();
                                                        dol.style.filter ="grayscale(100%)";
                                                        dolUnder.style.filter= "grayscale(100%)";
                                                    })
                                                    break;
                                                
                                                    case 1:
                                                        hamster.play(); 
            
                                                        icon2.addEventListener('click', () => {
                                                            tiger.pause();
                                                            hamster.play();
                                                        })
                                                        card8.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            ham.style.filter ="grayscale(100%)";
                                                            hamUnder.style.filter= "grayscale(100%)";
                                                        })
                                                    break;

                                                    case 2:

                                                        hedgehog.play();
                                                        icon2.addEventListener('click', () => {
                                                            tiger.pause();
                                                            hedgehog.play();
                                                        })
                                                        card6.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            hed.style.filter ="grayscale(100%)";
                                                            hedUnder.style.filter= "grayscale(100%)";
                                                        })
                                                        break;

                                                        case 3:
                                                            zebra.play();
                                                            icon2.addEventListener('click', () => {
                                                                tiger.pause();
                                                                zebra.play();
                                                            })
                                                            card1.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                zeb.style.filter ="grayscale(100%)";
                                                                zebUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;
        
                                                            case 4:
                                                                    unicorn.play();
                        
                                                                    icon2.addEventListener('click', () => {
                                                                        tiger.pause();
                                                                        unicorn.play();
                                                                    })
                        
                                                                    card4.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        uni.style.filter ="grayscale(100%)";
                                                                        uniUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break;
        
                                                            default:
        
                                                                sparrow.play();
            
                                                                icon2.addEventListener('click', () => {
                                                                    tiger.pause();
                                                                    sparrow.play();
                                                                })
        
                                                                card3.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    spar.style.filter ="grayscale(100%)";
                                                                    sparUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;  
                                            }
                                            })
                                            break;
//turtle and dolphin

                                        case 6:
                                            dolphin.play();
    
                                            icon2.addEventListener('click', () => {
                                                turtle.pause();
                                                dolphin.play();
                                            })
    
                                            card7.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                dol.style.filter ="grayscale(100%)";
                                                dolUnder.style.filter= "grayscale(100%)";
                                                var dolphin3random = 0;
                                                dolphin3random = Math.floor(Math.random()*6);
                                                switch(dolphin3random){
                                                        case 0: 
                                                        sparrow.play();
                                                        icon2.addEventListener('click', () => {
                                                            sparrow.play();
                                                            dolphin.pause();
                                                        })
    
                                                        card3.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            spar.style.filter ="grayscale(100%)";
                                                            sparUnder.style.filter= "grayscale(100%)";
                                                        })
                                                        break;
                                                    
                                                        case 1:
                                                            hamster.play(); 
                
                                                            icon2.addEventListener('click', () => {
                                                                dolphin.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
    
                                                        case 2:
    
                                                            hedgehog.play();
                                                            icon2.addEventListener('click', () => {
                                                                dolphin.pause();
                                                                hedgehog.play();
                                                            })
                                                            card6.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                hed.style.filter ="grayscale(100%)";
                                                                hedUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;
    
                                                            case 3:
                                                                zebra.play();
                                                                icon2.addEventListener('click', () => {
                                                                    dolphin.pause();
                                                                    zebra.play();
                                                                })
                                                                card1.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    zeb.style.filter ="grayscale(100%)";
                                                                    zebUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;
            
                                                                case 4:
                                                                        unicorn.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            dolphin.pause();
                                                                            unicorn.play();
                                                                        })
                            
                                                                        card4.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            uni.style.filter ="grayscale(100%)";
                                                                            uniUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
            
                                                                default:
            
                                                                    tiger.play();
                
                                                                    icon2.addEventListener('click', () => {
                                                                        dolphin.pause();
                                                                        tiger.play();
                                                                    })
            
                                                                    card5.addEventListener ('click', () => {
                                                                        correct.play();
                                                                        wrong.pause();
                                                                        tig.style.filter ="grayscale(100%)";
                                                                        tigUnder.style.filter= "grayscale(100%)";
                                                                    })
                                                                    break;  
                                                }
                                            })

                                            break;

                                            default:
                                        hedgehog.play();

                                        icon2.addEventListener('click', () => {
                                            turtle.pause();
                                            hedgehog.play();
                                        })

                                        card8.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            hed.style.filter ="grayscale(100%)";
                                            hedUnder.style.filter= "grayscale(100%)";
                                        })

                                        var hedgehog3random = 0;
                                        hedgehog3random = Math.floor(Math.random()*6);
//turtle and hedgehog
                                        switch(hedgehog3random){
                                                case 0: 
                                                dolphin.play();
                                                icon2.addEventListener('click', () => {
                                                    hedgehog.pause();
                                                    dolphin.play();
                                                })

                                                card7.addEventListener ('click', () => {
                                                    correct.play();
                                                    wrong.pause();
                                                    dol.style.filter ="grayscale(100%)";
                                                    dolUnder.style.filter= "grayscale(100%)";
                                                })
                                                break;
                                            
                                                case 1:
                                                    hamster.play(); 
        
                                                    icon2.addEventListener('click', () => {
                                                        hedgehog.pause();
                                                        hamster.play();
                                                    })
                                                    card8.addEventListener ('click', () => {
                                                        correct.play();
                                                        wrong.pause();
                                                        ham.style.filter ="grayscale(100%)";
                                                        hamUnder.style.filter= "grayscale(100%)";
                                                    })
                                                break;

                                                case 2:

                                                    sparrow.play();
                                                    icon2.addEventListener('click', () => {
                                                        sparrow.play();
                                                        hedgehog.pause();
                                                    })
                                                    card3.addEventListener ('click', () => {
                                                        correct.play();
                                                        wrong.pause();
                                                        spar.style.filter ="grayscale(100%)";
                                                        sparUnder.style.filter= "grayscale(100%)";
                                                    })
                                                    break;

                                                    case 3:
                                                        zebra.play();
                                                        icon2.addEventListener('click', () => {
                                                            hedgehog.pause();
                                                            zebra.play();
                                                        })
                                                        card1.addEventListener ('click', () => {
                                                            correct.play();
                                                            wrong.pause();
                                                            zeb.style.filter ="grayscale(100%)";
                                                            zebUnder.style.filter= "grayscale(100%)";
                                                        })
                                                        break;
    
                                                        case 4:
                                                                unicorn.play();
                    
                                                                icon2.addEventListener('click', () => {
                                                                    hedgehog.pause();
                                                                    unicorn.play();
                                                                })
                    
                                                                card4.addEventListener ('click', () => {
                                                                    correct.play();
                                                                    wrong.pause();
                                                                    uni.style.filter ="grayscale(100%)";
                                                                    uniUnder.style.filter= "grayscale(100%)";
                                                                })
                                                                break;
    
                                                        default:
    
                                                            tiger.play();
        
                                                            icon2.addEventListener('click', () => {
                                                                hedgehog.pause();
                                                                tiger.play();
                                                            })
    
                                                            card5.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                tig.style.filter ="grayscale(100%)";
                                                                tigUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;  
                                        }
                                        break; 
                                
                                }
                                            
            })
            
            card1.addEventListener ('click', () => {
                wrong.play();
            })

            card8.addEventListener ('click', () => {
                wrong.play();
            })

            card3.addEventListener ('click', () => {
                wrong.play();
            })

            card4.addEventListener ('click', () => {
                wrong.play();
            })

            card5.addEventListener ('click', () => {
                wrong.play();
            })

            card6.addEventListener ('click', () => {
                wrong.play();
            })

            card7.addEventListener ('click', () => {
                wrong.play();
            })
            break;
          
        case 3:

            sparrow.play();

            icon2.addEventListener('click', () => {
                sparrow.play();
            })

            card3.addEventListener ('click', () => {
                guess = true;
                correct.play();
                wrong.pause();
                spar.style.filter ="grayscale(100%)";
                sparUnder.style.filter= "grayscale(100%)";

                                var sparrow1random = 0; 
                                sparrow1random = Math.floor(Math.random()*7);

                                switch(sparrow1random){
                                    case 0: 
                                    hamster.play(); 
            
                                        icon2.addEventListener('click', () => {
                                            hamster.play();
                                            sparrow.pause();
                                        })
                                        card8.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            ham.style.filter ="grayscale(100%)";
                                            hamUnder.style.filter= "grayscale(100%)";
                                        })
                                        break;
//sparrow and zebra
                                        case 1: 
                                        zebra.play(); 

                                        icon2.addEventListener('click', () => {
                                            sparrow.pause();
                                            zebra.play();
                                        })
                                        card1.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            zeb.style.filter ="grayscale(100%)";
                                            zebUnder.style.filter= "grayscale(100%)";

                                            var zebra3random = 0;
                                                zebra3random = Math.floor(Math.random()*6);
                                                    switch(zebra3random){
                                                        case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                zebra.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                        
                                                        case 1:
                                                            dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                zebra.pause();
                                                                dolphin.play();
                                                            })

                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 2:
                                                            hedgehog.play();
                                                            icon2.addEventListener('click', () => {
                                                                zebra.pause();
                                                                hedgehog.play();
                                                            })

                                                            card6.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                hed.style.filter ="grayscale(100%)";
                                                                hedUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 3:
                                                            turtle.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            zebra.pause();
                                                                            turtle.play();
                                                                        })
                            
                                                                        card2.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            tur.style.filter ="grayscale(100%)";
                                                                            turUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
                                                        
                                                                        case 4:
                                                                            unicorn.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                zebra.pause();
                                                                                unicorn.play();
                                                                            })
                                
                                                                            card4.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                uni.style.filter ="grayscale(100%)";
                                                                                uniUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
    
                                                                            default:
                                                                                tiger.play();
    
                                                                                icon2.addEventListener('click', () => {
                                                                                    zebra.pause();
                                                                                    tiger.play();
                                                                                })
    
                                                                                card5.addEventListener ('click', () => {
                                                                                    correct.play();
                                                                                    wrong.pause();
                                                                                    tig.style.filter ="grayscale(100%)";
                                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                                })
                                                                                break;  
                                                    }
                                        })
                                        break;

                                        case 2:
                                            turtle.play();

                                            icon2.addEventListener('click', () => {
                                                sparrow.pause();
                                                turtle.play();
                                            })

                                            card2.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                tur.style.filter ="grayscale(100%)";
                                                turUnder.style.filter= "grayscale(100%)";
//sparrow and turtle    
                                                var turtle3random = 0;
                                                turtle3random = Math.floor(Math.random()*6);
                                                    switch(turtle3random){
                                                        case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                turtle.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                        
                                                        case 1:
                                                            dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                turtle.pause();
                                                                dolphin.play();
                                                            })

                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 2:
                                                            hedgehog.play();
                                                            icon2.addEventListener('click', () => {
                                                                turtle.pause();
                                                                hedgehog.play();
                                                            })

                                                            card6.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                hed.style.filter ="grayscale(100%)";
                                                                hedUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 3:
                                                            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            turtle.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
                                                        
                                                                        case 4:
                                                                            unicorn.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                turtle.pause();
                                                                                unicorn.play();
                                                                            })
                                
                                                                            card4.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                uni.style.filter ="grayscale(100%)";
                                                                                uniUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
    
                                                                            default:
                                                                                tiger.play();
    
                                                                                icon2.addEventListener('click', () => {
                                                                                    turtle.pause();
                                                                                    tiger.play();
                                                                                })
    
                                                                                card5.addEventListener ('click', () => {
                                                                                    correct.play();
                                                                                    wrong.pause();
                                                                                    tig.style.filter ="grayscale(100%)";
                                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                                })
                                                                                break;  
                                                    }
                                            })
                                            break;

                                            case 4:
                                            unicorn.play();

                                            icon2.addEventListener('click', () => {
                                                sparrow.pause();
                                                unicorn.play();
                                            })
//sparrow and unicorn
                                            card4.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                uni.style.filter ="grayscale(100%)";
                                                uniUnder.style.filter= "grayscale(100%)";
                                                var zebra3random = 0;
                                                zebra3random = Math.floor(Math.random()*6);
                                                    switch(zebra3random){
                                                        case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                zebra.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                        
                                                        case 1:
                                                            dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                unicorn.pause();
                                                                dolphin.play();
                                                            })

                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 2:
                                                            hedgehog.play();
                                                            icon2.addEventListener('click', () => {
                                                                unicorn.pause();
                                                                hedgehog.play();
                                                            })

                                                            card6.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                hed.style.filter ="grayscale(100%)";
                                                                hedUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 3:
                                                            turtle.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            unicorn.pause();
                                                                            turtle.play();
                                                                        })
                            
                                                                        card2.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            tur.style.filter ="grayscale(100%)";
                                                                            turUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
                                                        case 4:
                                                                        zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            unicorn.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;

    
                                                                            default:
                                                                                tiger.play();
    
                                                                                icon2.addEventListener('click', () => {
                                                                                    unicorn.pause();
                                                                                    tiger.play();
                                                                                })
    
                                                                                card5.addEventListener ('click', () => {
                                                                                    correct.play();
                                                                                    wrong.pause();
                                                                                    tig.style.filter ="grayscale(100%)";
                                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                                })
                                                                                break;  
                                                    }
                                            })
                                            break;

                                            case 5:
                                                tiger.play();
    
                                                icon2.addEventListener('click', () => {
                                                    sparrow.pause();
                                                    tiger.play();
                                                })
    
                                                card5.addEventListener ('click', () => {
                                                    correct.play();
                                                    wrong.pause();
                                                    tig.style.filter ="grayscale(100%)";
                                                    tigUnder.style.filter= "grayscale(100%)";

//sparrow and tiger

                                                var tiger4random = 0;
                                                tiger4random = Math.floor(Math.random()*6);
                                                    switch(tiger4random){
                                                        case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                tiger.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                        
                                                        case 1:
                                                            dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                tiger.pause();
                                                                dolphin.play();
                                                            })

                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 2:
                                                            hedgehog.play();
                                                            icon2.addEventListener('click', () => {
                                                                tiger.pause();
                                                                hedgehog.play();
                                                            })

                                                            card6.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                hed.style.filter ="grayscale(100%)";
                                                                hedUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 3:
                                                            turtle.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            tiger.pause();
                                                                            turtle.play();
                                                                        })
                            
                                                                        card2.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            tur.style.filter ="grayscale(100%)";
                                                                            turUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
                                                        
                                                                        case 4:
                                                                            unicorn.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                tiger.pause();
                                                                                unicorn.play();
                                                                            })
                                
                                                                            card4.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                uni.style.filter ="grayscale(100%)";
                                                                                uniUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
    
                                                                            default:
                                                                                zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            tiger.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break; 
                                                    }

                                                })
                                                break;

                                            case 6:
                                            dolphin.play();
    
                                            icon2.addEventListener('click', () => {
                                                sparrow.pause();
                                                dolphin.play();
                                            })
    //sparrow and dolphin
                                            card7.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                dol.style.filter ="grayscale(100%)";
                                                dolUnder.style.filter= "grayscale(100%)";

                                                var dolphin4random = 0;
                                                dolphin4random = Math.floor(Math.random()*6);
                                                    switch(dolphin4random){
                                                        case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                dolphin.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                        
                                                        case 1:
                                                            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            dolphin.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;

                                                        case 2:
                                                            hedgehog.play();
                                                            icon2.addEventListener('click', () => {
                                                                dolphin.pause();
                                                                hedgehog.play();
                                                            })

                                                            card6.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                hed.style.filter ="grayscale(100%)";
                                                                hedUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 3:
                                                            turtle.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            dolphin.pause();
                                                                            turtle.play();
                                                                        })
                            
                                                                        card2.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            tur.style.filter ="grayscale(100%)";
                                                                            turUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
                                                        
                                                                        case 4:
                                                                            unicorn.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                dolphin.pause();
                                                                                unicorn.play();
                                                                            })
                                
                                                                            card4.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                uni.style.filter ="grayscale(100%)";
                                                                                uniUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
    
                                                                            default:
                                                                                tiger.play();
    
                                                                                icon2.addEventListener('click', () => {
                                                                                    dolphin.pause();
                                                                                    tiger.play();
                                                                                })
    
                                                                                card5.addEventListener ('click', () => {
                                                                                    correct.play();
                                                                                    wrong.pause();
                                                                                    tig.style.filter ="grayscale(100%)";
                                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                                })
                                                                                break;  
                                                    }
                                            })

                                            break;

                                            default:
                                        hedgehog.play();

                                        icon2.addEventListener('click', () => {
                                            sparrow.pause();
                                            hedgehog.play();
                                        })
//sparrow and hedgehog
                                        card6.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            hed.style.filter ="grayscale(100%)";
                                            hedUnder.style.filter= "grayscale(100%)";

                                            var zebra3random = 0;
                                                zebra3random = Math.floor(Math.random()*6);
                                                    switch(zebra3random){
                                                        case 0:
                                                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                hedgehog.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                                                        
                                                        case 1:
                                                            dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                hedgehog.pause();
                                                                dolphin.play();
                                                            })

                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;

                                                        case 2:
                                                            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            hedgehog.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;

                                                        case 3:
                                                            turtle.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            hedgehog.pause();
                                                                            turtle.play();
                                                                        })
                            
                                                                        card2.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            tur.style.filter ="grayscale(100%)";
                                                                            turUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
                                                        
                                                                        case 4:
                                                                            unicorn.play();
                                
                                                                            icon2.addEventListener('click', () => {
                                                                                hedgehog.pause();
                                                                                unicorn.play();
                                                                            })
                                
                                                                            card4.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                uni.style.filter ="grayscale(100%)";
                                                                                uniUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
    
                                                                            default:
                                                                                tiger.play();
    
                                                                                icon2.addEventListener('click', () => {
                                                                                    hedgehog.pause();
                                                                                    tiger.play();
                                                                                })
    
                                                                                card5.addEventListener ('click', () => {
                                                                                    correct.play();
                                                                                    wrong.pause();
                                                                                    tig.style.filter ="grayscale(100%)";
                                                                                    tigUnder.style.filter= "grayscale(100%)";
                                                                                })
                                                                                break;  
                                                    }
                                        })
                                        break; 
                                }
                                
            })
            
            card1.addEventListener ('click', () => {
                wrong.play();
            })

            card2.addEventListener ('click', () => {
                wrong.play();
            })

            card8.addEventListener ('click', () => {
                wrong.play();
            })

            card4.addEventListener ('click', () => {
                wrong.play();
            })

            card5.addEventListener ('click', () => {
                wrong.play();
            })

            card6.addEventListener ('click', () => {
                wrong.play();
            })

            card7.addEventListener ('click', () => {
                wrong.play();
            })
           

            break;
            

        case 4:
            unicorn.play();

            icon2.addEventListener('click', () => {
                unicorn.play();       
            })

            card4.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                uni.style.filter ="grayscale(100%)";
                uniUnder.style.filter= "grayscale(100%)";

                var unicorn1random = 0; 
                unicorn1random = Math.floor(Math.random()*7);
                
                switch(unicorn1random){
                    case 0: 
                    hamster.play(); 

                        icon2.addEventListener('click', () => {
                            hamster.play();
                            unicorn.pause();
                        })
                        card8.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            ham.style.filter ="grayscale(100%)";
                            hamUnder.style.filter= "grayscale(100%)";
//unicorn and hamster: 
var hamster5random = 0;
hamster5random = Math.floor(Math.random()*6);
    switch(hamste5random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            hamster.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                hamster.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            hedgehog.play();
            icon2.addEventListener('click', () => {
                hamster.pause();
                hedgehog.play();
            })

            card6.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                hed.style.filter ="grayscale(100%)";
                hedUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            hamster.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                hamster.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    hamster.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    }   

                        })
                        break;
                        case 1: 
                                    zebra.play(); 

                                        icon2.addEventListener('click', () => {
                                            unicorn.pause();
                                            zebra.play();
                                        })
                                        card1.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            zeb.style.filter ="grayscale(100%)";
                                            zebUnder.style.filter= "grayscale(100%)";
//unicorn and zebra
                var zebra5random = 0;
                zebra5random = Math.floor(Math.random()*6);
                    switch(zebra5random){
                        case 0:
                            hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                zebra.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break;
                        
                        case 1:
                            dolphin.play();
                            icon2.addEventListener('click', () => {
                                zebra.pause();
                                dolphin.play();
                            })

                            card7.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                dol.style.filter ="grayscale(100%)";
                                dolUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                        case 2:
                            zebra.play();
                            icon2.addEventListener('click', () => {
                                zebra.pause();
                                hedgehog.play();
                            })

                            card6.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                hed.style.filter ="grayscale(100%)";
                                hedUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                        case 3:
                            turtle.play();

                                        icon2.addEventListener('click', () => {
                                            zebra.pause();
                                            turtle.play();
                                        })

                                        card2.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            tur.style.filter ="grayscale(100%)";
                                            turUnder.style.filter= "grayscale(100%)";
                                        })
                                        break;
                        
                                        case 4:
                                            sparrow.play();

                                            icon2.addEventListener('click', () => {
                                                zebra.pause();
                                                sparrow.play();
                                            })

                                            card3.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                spar.style.filter ="grayscale(100%)";
                                                sparUnder.style.filter= "grayscale(100%)";
                                            })
                                            break;

                                            default:
                                                tiger.play();

                                                icon2.addEventListener('click', () => {
                                                    zebra.pause();
                                                    tiger.play();
                                                })

                                                card5.addEventListener ('click', () => {
                                                    correct.play();
                                                    wrong.pause();
                                                    tig.style.filter ="grayscale(100%)";
                                                    tigUnder.style.filter= "grayscale(100%)";
                                                })
                                                break;  
                    }       
                                        })

                                        break;

                                         case 2:
                                            turtle.play();

                                            icon2.addEventListener('click', () => {
                                                unicorn.pause();
                                                turtle.play();
                                            })

                                            card2.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                tur.style.filter ="grayscale(100%)";
                                                turUnder.style.filter= "grayscale(100%)";
//unicorn and turtle
var turtle5random = 0;
turtle5random = Math.floor(Math.random()*6);
    switch(turtle5random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            turtle.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                turtle.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            hedgehog.play();
            icon2.addEventListener('click', () => {
                turtle.pause();
                hedgehog.play();
            })

            card6.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                hed.style.filter ="grayscale(100%)";
                hedUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            hamster.play(); 
            
            icon2.addEventListener('click', () => {
                turtle.pause();
                hamster.play();
            })
            card8.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                ham.style.filter ="grayscale(100%)";
                hamUnder.style.filter= "grayscale(100%)";
            })
        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                turtle.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    turtle.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
    //ENDHERE
                                            })

                                            break;

                                            case 3:
                                            sparrow.play();

                                            icon2.addEventListener('click', () => {
                                                unicorn.pause();
                                                sparrow.play();
                                            })

                                            card3.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                spar.style.filter ="grayscale(100%)";
                                                sparUnder.style.filter= "grayscale(100%)";
//unicorn and sparrow
var sparrow5random = 0;
sparrow5random = Math.floor(Math.random()*6);
    switch(sparrow5random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            turtle.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                sparrow.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            hedgehog.play();
            icon2.addEventListener('click', () => {
                sparrow.pause();
                hedgehog.play();
            })

            card6.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                hed.style.filter ="grayscale(100%)";
                hedUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            sparrow.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            hamster.play(); 
            
                            icon2.addEventListener('click', () => {
                                sparrow.pause();
                                hamster.play();
                            })
                            card8.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                ham.style.filter ="grayscale(100%)";
                                hamUnder.style.filter= "grayscale(100%)";
                            })
                        break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    sparrow.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
//ENDHERE
                                            })
                                            break;

                                            case 5:
                                            tiger.play();

                                            icon2.addEventListener('click', () => {
                                                unicorn.pause();
                                                tiger.play();
                                            })

                                            card5.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                tig.style.filter ="grayscale(100%)";
                                                tigUnder.style.filter= "grayscale(100%)";
//unicorn and tiger
var tiger6random = 0;
tiger6random = Math.floor(Math.random()*6);
    switch(tiger6random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            tiger.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
            tiger.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            hedgehog.play();
            icon2.addEventListener('click', () => {
                tiger.pause();
                hedgehog.play();
            })

            card6.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                hed.style.filter ="grayscale(100%)";
                hedUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            tiger.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                tiger.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                hamster.play(); 
            
                                                            icon2.addEventListener('click', () => {
                                                                tiger.pause();
                                                                hamster.play();
                                                            })
                                                            card8.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                ham.style.filter ="grayscale(100%)";
                                                                hamUnder.style.filter= "grayscale(100%)";
                                                            })
                                                        break; 
    } 
                                            })
                                            break;

                                            case 6:
                            dolphin.play();

                            icon2.addEventListener('click', () => {
                                unicorn.pause();
                                dolphin.play();
                            })

                            card7.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                dol.style.filter ="grayscale(100%)";
                                dolUnder.style.filter= "grayscale(100%)";
//unicorn and dolphin:
var dolphin6random = 0;
dolphin6random = Math.floor(Math.random()*6);
    switch(dolphin6random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            dolphin.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            hamster.play(); 
            
            icon2.addEventListener('click', () => {
                dolphin.pause();
                hamster.play();
            })
            card8.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                ham.style.filter ="grayscale(100%)";
                hamUnder.style.filter= "grayscale(100%)";
            })
        break;

        case 2:
            hedgehog.play();
            icon2.addEventListener('click', () => {
                dolphin.pause();
                hedgehog.play();
            })

            card6.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                hed.style.filter ="grayscale(100%)";
                hedUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            dolphin.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                dolphin.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    dolphin.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
                            })

                            break;

                            default:
                                        hedgehog.play();

                                        icon2.addEventListener('click', () => {
                                            unicorn.pause();
                                            hedgehog.play();
                                        })

                                        card6.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            hed.style.filter ="grayscale(100%)";
                                            hedUnder.style.filter= "grayscale(100%)";
//unicorn and hedgehog

var hedgehog6random = 0;
hedgehog6random = Math.floor(Math.random()*6);
    switch(hedgehog6random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            hedgehog.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                hedgehog.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            hamster.play(); 
            
            icon2.addEventListener('click', () => {
                hedgehog.pause();
                hamster.play();
            })
            card8.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                ham.style.filter ="grayscale(100%)";
                hamUnder.style.filter= "grayscale(100%)";
            })
        break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            hedgehog.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                hedgehog.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    hedgehog.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 

                                        })
                                        break; 
                }
            })

            card1.addEventListener ('click', () => {
                wrong.play();
            })

            card2.addEventListener ('click', () => {
                wrong.play();
            })

            card3.addEventListener ('click', () => {
                wrong.play();
            })

            card8.addEventListener ('click', () => {
                wrong.play();
            })

            card5.addEventListener ('click', () => {
                wrong.play();
            })

            card6.addEventListener ('click', () => {
                wrong.play();
            })

            card7.addEventListener ('click', () => {
                wrong.play();
            })
           
            break;
   
        default:
            hedgehog.play();

            icon2.addEventListener('click', () => {
                hedgehog.play();
            })

            card6.addEventListener ('click', () => {
                guess = true;
                correct.play();
                wrong.pause();
                hed.style.filter ="grayscale(100%)";
                hedUnder.style.filter= "grayscale(100%)";


                            var hedgehog1random = 0; 
                            hedgehog1random = Math.floor(Math.random()*7);
               
                            switch(hedgehog1random){
                                case 0: 
                                hamster.play(); 

                                    icon2.addEventListener('click', () => {
                                        hedgehog.pause();
                                        hamster.play();
                                    })
                                    card8.addEventListener ('click', () => {
                                        correct.play();
                                        wrong.pause();
                                        ham.style.filter ="grayscale(100%)";
                                        hamUnder.style.filter= "grayscale(100%)";
//hedgehog and hamster

var hamster6random = 0;
hamster6random = Math.floor(Math.random()*6);
    switch(hamster6random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            hamster.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                hamster.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            unicorn.play();
            icon2.addEventListener('click', () => {
                hamster.pause();
                hedgehog.play();
            })

            card4.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                uni.style.filter ="grayscale(100%)";
                uniUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            hamster.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                hamster.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    hamster.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
                                    })
                                    break;

                                    case 1: 
                                    zebra.play(); 

                                        icon2.addEventListener('click', () => {
                                            hedgehog.pause();
                                            zebra.play();
                                        })
                                        card1.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            zeb.style.filter ="grayscale(100%)";
                                            zebUnder.style.filter= "grayscale(100%)";
//hedgehog and zebra

var hamster6random = 0;
hamster6random = Math.floor(Math.random()*6);
    switch(hamster6random){
        case 0:
            hamster.play(); 
            
            icon2.addEventListener('click', () => {
                zebra.pause();
                hamster.play();
            })
            card8.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                ham.style.filter ="grayscale(100%)";
                hamUnder.style.filter= "grayscale(100%)";
            })
        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                zebra.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            unicorn.play();
            icon2.addEventListener('click', () => {
                zebra.pause();
                hedgehog.play();
            })

            card4.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                uni.style.filter ="grayscale(100%)";
                uniUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            zebra.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                zebra.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    zebra.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
    //endhere

                                        })
                                        break;

                                    case 2:
                                            turtle.play();

                                            icon2.addEventListener('click', () => {
                                                hedgehog.pause();
                                                turtle.play();
                                            })

                                            card2.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                tur.style.filter ="grayscale(100%)";
                                                turUnder.style.filter= "grayscale(100%)";
//hedgehog and turtle
var turtle7random = 0;
turtle7random = Math.floor(Math.random()*6);
    switch(turtle7random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            turtle.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                turtle.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            unicorn.play();
            icon2.addEventListener('click', () => {
                turtle.pause();
                hedgehog.play();
            })

            card4.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                uni.style.filter ="grayscale(100%)";
                uniUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            hamster.play(); 
            
            icon2.addEventListener('click', () => {
                turtle.pause();
                hedgehog.play();
            })
            card8.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                ham.style.filter ="grayscale(100%)";
                hamUnder.style.filter= "grayscale(100%)";
            })
        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                turtle.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    turtle.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
                                            })
                                            break;

                                            case 3:
                                            sparrow.play();

                                            icon2.addEventListener('click', () => {
                                                hedgehog.pause();
                                                sparrow.play();
                                            })

                                            card3.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                spar.style.filter ="grayscale(100%)";
                                                sparUnder.style.filter= "grayscale(100%)";
//hedgehog and sparrow
var hamster6random = 0;
hamster6random = Math.floor(Math.random()*6);
    switch(hamster6random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            sparrow.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                sparrow.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            unicorn.play();
            icon2.addEventListener('click', () => {
                sparrow.pause();
                hedgehog.play();
            })

            card4.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                uni.style.filter ="grayscale(100%)";
                uniUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            sparrow.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            hamster.play(); 
            
            icon2.addEventListener('click', () => {
                sparrow.pause();
                hedgehog.play();
            })
            card8.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                ham.style.filter ="grayscale(100%)";
                hamUnder.style.filter= "grayscale(100%)";
            })
        break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    sparrow.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
                                            })
                                            break;

                                            case 4:
                                            unicorn.play();

                                            icon2.addEventListener('click', () => {
                                                hedgehog.pause();
                                                unicorn.play();
                                            })

                                            card4.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                uni.style.filter ="grayscale(100%)";
                                                uniUnder.style.filter= "grayscale(100%)";
//hedgehog and unicorn 
var unicorn7random = 0;
unicorn7random = Math.floor(Math.random()*6);
    switch(unicorn7random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            unicorn.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                unicorn.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            hamster.play(); 
            
            icon2.addEventListener('click', () => {
                unicorn.pause();
                hedgehog.play();
            })
            card8.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                ham.style.filter ="grayscale(100%)";
                hamUnder.style.filter= "grayscale(100%)";
            })
        break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            unicorn.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                unicorn.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    unicorn.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
                                            })
                                            break;

                                            case 5:
                                            tiger.play();

                                            icon2.addEventListener('click', () => {
                                                hedgehog.pause();
                                                tiger.play();
                                            })

                                            card5.addEventListener ('click', () => {
                                                correct.play();
                                                wrong.pause();
                                                tig.style.filter ="grayscale(100%)";
                                                tigUnder.style.filter= "grayscale(100%)";

                                                var tiger7random = 0;
                                                tiger7random = Math.floor(Math.random()*6);
                                                    switch(tiger7random){
                                                        case 0:
                                                            zebra.play();
                                                                            
                                                                                                                        icon2.addEventListener('click', () => {
                                                                                                                            tiger.pause();
                                                                                                                            zebra.play();
                                                                                                                        })
                                                                            
                                                                                                                        card1.addEventListener ('click', () => {
                                                                                                                            correct.play();
                                                                                                                            wrong.pause();
                                                                                                                            zeb.style.filter ="grayscale(100%)";
                                                                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                                                                        })
                                                                                                                        break;
                                                        
                                                        case 1:
                                                            dolphin.play();
                                                            icon2.addEventListener('click', () => {
                                                                tiger.pause();
                                                                dolphin.play();
                                                            })
                                                
                                                            card7.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                dol.style.filter ="grayscale(100%)";
                                                                dolUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;
                                                
                                                        case 2:
                                                            unicorn.play();
                                                            icon2.addEventListener('click', () => {
                                                                tiger.pause();
                                                                hedgehog.play();
                                                            })
                                                
                                                            card4.addEventListener ('click', () => {
                                                                correct.play();
                                                                wrong.pause();
                                                                uni.style.filter ="grayscale(100%)";
                                                                uniUnder.style.filter= "grayscale(100%)";
                                                            })
                                                            break;
                                                
                                                        case 3:
                                                            turtle.play();
                                                
                                                                        icon2.addEventListener('click', () => {
                                                                            tiger.pause();
                                                                            turtle.play();
                                                                        })
                                                
                                                                        card2.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            tur.style.filter ="grayscale(100%)";
                                                                            turUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
                                                        
                                                                        case 4:
                                                                            sparrow.play();
                                                
                                                                            icon2.addEventListener('click', () => {
                                                                                tiger.pause();
                                                                                sparrow.play();
                                                                            })
                                                
                                                                            card3.addEventListener ('click', () => {
                                                                                correct.play();
                                                                                wrong.pause();
                                                                                spar.style.filter ="grayscale(100%)";
                                                                                sparUnder.style.filter= "grayscale(100%)";
                                                                            })
                                                                            break;
                                                
                                                                            default:
                                                                                hamster.play(); 
            
            icon2.addEventListener('click', () => {
                tiger.pause();
                hedgehog.play();
            })
            card8.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                ham.style.filter ="grayscale(100%)";
                hamUnder.style.filter= "grayscale(100%)";
            })
        break;
                                                    } 
                                            })
                                            break;


                                            case 6:

                                        icon2.addEventListener('click', () => {  
                                            hedgehog.pause();
                                            dolphin.play();
                                        })

                                        card7.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            dol.style.filter ="grayscale(100%)";
                                            dolUnder.style.filter= "grayscale(100%)";
//hedgehog and dolphin

var dolphin7random = 0;
dolphin7random = Math.floor(Math.random()*6);
    switch(dolphin7random){
        case 0:
hamster.play(); 
            
icon2.addEventListener('click', () => {
    dolphin.pause();
    hedgehog.play();
})
card8.addEventListener ('click', () => {
    correct.play();
    wrong.pause();
    ham.style.filter ="grayscale(100%)";
    hamUnder.style.filter= "grayscale(100%)";
})
break;
        
        case 1:
            hamster.play(); 
            
            icon2.addEventListener('click', () => {
                dolphin.pause();
                hedgehog.play();
            })
            card8.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                ham.style.filter ="grayscale(100%)";
                hamUnder.style.filter= "grayscale(100%)";
            })
        break;

        case 2:
            unicorn.play();
            icon2.addEventListener('click', () => {
                dolphin.pause();
                hedgehog.play();
            })

            card4.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                uni.style.filter ="grayscale(100%)";
                uniUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            dolphin.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                dolphin.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    dolphin.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
                                        })
                                        break;

                                        default:
                                        hamster.play();

                                        icon2.addEventListener('click', () => {
                                            hedgehog.pause();
                                            hamster.play();
                                        })

                                        card8.addEventListener ('click', () => {
                                            correct.play();
                                            wrong.pause();
                                            ham.style.filter ="grayscale(100%)";
                                            hamUnder.style.filter= "grayscale(100%)";
//hedgehog and hamster 
var hamster7random = 0;
hamster6random = Math.floor(Math.random()*6);
    switch(hamster6random){
        case 0:
            zebra.play();
                            
                                                                        icon2.addEventListener('click', () => {
                                                                            hamster.pause();
                                                                            zebra.play();
                                                                        })
                            
                                                                        card1.addEventListener ('click', () => {
                                                                            correct.play();
                                                                            wrong.pause();
                                                                            zeb.style.filter ="grayscale(100%)";
                                                                            zebUnder.style.filter= "grayscale(100%)";
                                                                        })
                                                                        break;
        
        case 1:
            dolphin.play();
            icon2.addEventListener('click', () => {
                hamster.pause();
                dolphin.play();
            })

            card7.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                dol.style.filter ="grayscale(100%)";
                dolUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 2:
            unicorn.play();
            icon2.addEventListener('click', () => {
                hamster.pause();
                hedgehog.play();
            })

            card4.addEventListener ('click', () => {
                correct.play();
                wrong.pause();
                uni.style.filter ="grayscale(100%)";
                uniUnder.style.filter= "grayscale(100%)";
            })
            break;

        case 3:
            turtle.play();

                        icon2.addEventListener('click', () => {
                            hamster.pause();
                            turtle.play();
                        })

                        card2.addEventListener ('click', () => {
                            correct.play();
                            wrong.pause();
                            tur.style.filter ="grayscale(100%)";
                            turUnder.style.filter= "grayscale(100%)";
                        })
                        break;
        
                        case 4:
                            sparrow.play();

                            icon2.addEventListener('click', () => {
                                hamster.pause();
                                sparrow.play();
                            })

                            card3.addEventListener ('click', () => {
                                correct.play();
                                wrong.pause();
                                spar.style.filter ="grayscale(100%)";
                                sparUnder.style.filter= "grayscale(100%)";
                            })
                            break;

                            default:
                                tiger.play();

                                icon2.addEventListener('click', () => {
                                    hamster.pause();
                                    tiger.play();
                                })

                                card5.addEventListener ('click', () => {
                                    correct.play();
                                    wrong.pause();
                                    tig.style.filter ="grayscale(100%)";
                                    tigUnder.style.filter= "grayscale(100%)";
                                })
                                break;  
    } 
                                        })
                                        break; 
                            }
            })
            
            card1.addEventListener ('click', () => {
                wrong.play();
            })

            card2.addEventListener ('click', () => {
                wrong.play();
            })

            card3.addEventListener ('click', () => {
                wrong.play();
            })

            card4.addEventListener ('click', () => {
                wrong.play();
            })

            card5.addEventListener ('click', () => {
                wrong.play();
            })

            card8.addEventListener ('click', () => {
                wrong.play();
            })

            card7.addEventListener ('click', () => {
                wrong.play();
            })
           
        
            break;

    }
  }


