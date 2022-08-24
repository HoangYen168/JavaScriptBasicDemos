const button = document.querySelector('button');
//console.log(button);
button.addEventListener('click',changeColor);
function changeColor(){
    //console.log('Clicked');
    const background = document.querySelector('background')
    const arrayColor = ['red','yellow','pink','green'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
    console.log(random)
}

function randomColor(array){
    return Math.floor(Math.random()*array.length);
}