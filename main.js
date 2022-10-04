
var isCollide=0;
var fighterhealth=100;
var enemyhealth=100;
function changeimage1(){
    let showimage=document.getElementById('background')
    if(showimage.src.match('img/background.jpg')){
        showimage.src='img/background2.jpg'
    }
    else{
        showimage.src='img/background.jpg'
    }
}
function changeimage2(){
    let showimage=document.getElementById('fighter')
    if(showimage.src.match('img/naruto.png')){
        showimage.src='img/narutojump.png'
    }
    
}
function changeimage3(){
    let showimage=document.getElementById('fighter')
    if(showimage.src.match('img/narutojump.png')){
        showimage.src='img/naruto.png'
    }
}
function changeimage4(){
    let showimage=document.getElementById('energyball1')
    if(showimage.src.match('img/energyball1.png')){
        showimage.src='img/energyball2.png'
    }
    else if(showimage.src.match('img/energyball3.png')){
      showimage.src='img/energyball2.png'
  }
}
function changeimage5(){
    let showimage=document.getElementById('energyball1')
    if(showimage.src.match('img/energyball1.png')){
        showimage.src='img/energyball3.png'
    }
    else if(showimage.src.match('img/energyball2.png')){
      showimage.src='img/energyball3.png'
  }
}
function changeimage6(){
  let showimage=document.getElementById('energyball1')
  if(showimage.src.match('img/energyball2.png')){
      showimage.src='img/energyball1.png'
  }
  else if(showimage.src.match('img/energyball3.png')){
    showimage.src='img/energyball1.png'
}
}



function ballmovementshow(){
    document.getElementById("energyball1").style.display = "inline-block";
    }
    var m=0;
    var n=0;
    
    
    
    function ballmovement(){
      m=0;
    
      var id = setInterval(function () {
    
              
              if (60-n-m<=0) {  
                n=0;  
                m=0;            
                document.getElementById('energyball1').style.left=0+"vw";
                document.getElementById('enemyball').style.right=0+"vw";
                document.getElementById('energyball1').style.display = "none";
                clearInterval(id);
                isCollide=1
                
              } 
              else if(m>55){
                enemyhealth-=20;
                m=0;
                document.getElementById('slider').style.width = enemyhealth + "%";
                document.getElementById("energyball1").style.left= m + "vw";
                document.getElementById('energyball1').style.display = "none";
                clearInterval(id);
              }
              else {
                
                document.getElementById("energyball1").style.left= m + "vw";
                }
              m = m + 1;
            }, 50);
        }

        function ballmovement1(){
          n=0;
    
                var id1 = setInterval(function () {
                  if (isCollide) {  
                    clearInterval(id1);
                    isCollide=0;
                  }
                  else if (n>80) {
                    n=0;
                    fighterhealth-=20;
                    document.getElementById('enemyball').style.right=0+"vw";
                    document.getElementById('slider1').style.width = fighterhealth + "%";
                    clearInterval(id1);
                    
                  } else {
                    
                    document.getElementById("enemyball").style.right= n + "vw";
                  }
                  n = n + 1;
                }, 50);
            }
const energysound=new Audio("music/rasengan.mp3");
const energysound1=new Audio("music/narutorasenshuriken.mp3");
const energysound2=new Audio("music/oodama_rasengan.mp3");
const energysound3=new Audio("music/majestic_demolisher.mp3");
window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        ballmovementshow(); 
       changeimage2();
        changeimage6(); 
        ballmovementshow();
        window.setTimeout(ballmovement,0000);
        energysound.play();
        break;
      case "ArrowUp":
        changeimage4();
        changeimage2()
        ballmovementshow();
        window.setTimeout(ballmovement,1000);
        energysound1.play();
        break;
      case "ArrowDown":
        changeimage5();
        changeimage2()
        ballmovementshow();
        window.setTimeout(ballmovement,1000);
        energysound2.play();
        break;
     
    }
  });
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        window.setTimeout(changeimage3,1000);
        
        break;
      case "ArrowUp":
        window.setTimeout(changeimage3,1000);
        break;
      case "ArrowDown":
        window.setTimeout(changeimage3,1000);
        break;
        case "ArrowRight":          
        ballmovement1();
        energysound3.play();
        break;
    }
  });
  