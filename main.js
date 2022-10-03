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
    if(showimage.src.match('img/Naruto_PNG_Picture.png')){
        showimage.src='img/naruto-37609.png'
    }
    
}
function changeimage3(){
    let showimage=document.getElementById('fighter')
    if(showimage.src.match('img/naruto-37609.png')){
        showimage.src='img/Naruto_PNG_Picture.png'
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
window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        changeimage2() 
      ballmovementshow();
        window.setTimeout(ballmovement,1000);
     
        energysound.play();
        break;
      case "ArrowUp":
        ballmovement1();
        break;
      case "ArrowDown":
        ballmovement2();
        break;
     
    }
  });
  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        window.setTimeout(changeimage3,2000);
        
        break;
      case "ArrowUp":
        ballmovement1();
        break;
      case "ArrowDown":
        ballmovement2();
        break;
     
    }
  });
  