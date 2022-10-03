// const button=document.getElementById('changeimage').addEventListener('click',changeimage1());


function changeimage1(){
    let showimage=document.getElementById('background')
    if(showimage.src.match('img/background.jpg')){
        showimage.src='img/background2.jpg'
    }
    else{
        showimage.src='img/background.jpg'
    }
}
