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

let m=-19;

function ballmovementshow(){
    document.getElementById('energyball1').style.display = "inline";
    }
function ballmovement(){
    // document.getElementById('energyball1').style.transform="translatex(42vw)";
        var id = setInterval(function () {
          if (m >=40 ) {
            m = -19;
            ballmovementhide();
            document.getElementById('energyball1').style.left=m+"vw"
            clearInterval(id);
          } else {
            
            document.getElementById('energyball1').style.left=m+"vw";
          }
          m = m + 1;
        }, 25);
      
}
function ballmovementhide(){
    document.getElementById('energyball1').style.display = "none";
}

const energysound=new Audio("music/rasengan.mp3");
const energysound1=new Audio("music/narutorasenshuriken.mp3");
const energysound2=new Audio("music/oodama_rasengan.mp3");
window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        changeimage2()
        changeimage6() 
      ballmovementshow();
        window.setTimeout(ballmovement,0000);
     
        energysound.play();
        break;
      case "ArrowUp":
        changeimage4();
        ballmovementshow();
        window.setTimeout(ballmovement,1000);
        energysound1.play();
        break;
      case "ArrowDown":
        changeimage5();
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
     
    }
  });
  