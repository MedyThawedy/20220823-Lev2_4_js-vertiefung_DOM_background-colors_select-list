let selectedElement;

let optionElement;
let varColor = '';


let changeColor = () => {

    optionElement = document.getElementById("farbeAuswahlen").value;
    console.log(optionElement);
    varColor = optionElement;

    if (varColor == 'Medium Orchid') {
        console.log(' edium Orchid');
        document.body.style.background = '#BA55D3';
        console.log(document.body.style.backgroundColor);
    } else if (varColor == 'Mint Cream') {
        console.log('Mint Cream');
        document.body.style.backgroundColor = "#F5FFFA";
        console.log(document.body.style.backgroundColor);
    } else if ((varColor) == 'Dodger Blue') {
        console.log('switch Dodger Blue');
        document.body.style.backgroundColor = "#1E90FF";
        console.log(document.body.style.backgroundColor);
    } else if ((varColor) == 'Goldenrod') {
        console.log('switch Goldenrod');
        document.body.style.backgroundColor = "#daa520";
        console.log(document.body.style.backgroundColor);
    } else if ((varColor) == 'Wheat') {
        console.log('switch Wheat');
        document.body.style.backgroundColor = "#F5DEB3";
        console.log(document.body.style.backgroundColor);
    } else if ((varColor) == 'Medium Turquoise') {
        console.log('switch Medium Turquoise');
        document.body.style.backgroundColor = "#48D1CC";
        console.log(document.body.style.backgroundColor);
    } else if ((varColor) == 'Fire Brick') {
        console.log('Fire Brick');
        document.body.style.backgroundColor = "#B22222";
        console.log(document.body.style.backgroundColor);
    } else if ((varColor) == 'Lime Green') {
        console.log('Lime Green');
        document.body.style.backgroundColor = "#32CD32";
        console.log(document.body.style.backgroundColor);
    }



}

/* 

*/


