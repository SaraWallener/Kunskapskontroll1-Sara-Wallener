// Element för eventlisteners
let paragraph = document.querySelector('footer article p');
let textChange = document.querySelector('.art-2 h2');
let img = document.querySelectorAll('img');
let button = document.querySelectorAll('button');

//Återställningsknappen
let btn = document.querySelectorAll('button');
let reset = btn[2];
reset.innerText = 'RESET';



// Återställer alla element till grundinställning
reset.addEventListener('click',
    function(event){
        resetAll();
        }
);

// Ändrar bakgrundsfärg till rosa i art-1
let knapp1 = btn[0];
knapp1.addEventListener('click',
    function(event){
        changeArt1toHotPink();
});
// Tar bort address element från footer
paragraph.addEventListener('click', 
    function(event){
        removeElement();
});
// Ändrar titeltext från Sinus Hoodie till Radikalt
textChange.addEventListener('click',
     function(event){
        changeH2inArt2();
});
// Ändrar hoodie bild
let newImg = img[4];
newImg.addEventListener('click',
    function(event){
        changeHoodiePicture();
});
// Ändrar färg på mittenknappen
let middleButton = button[1];
middleButton.addEventListener('click',
    function(event){
        changeButtonColor();
});
// Skapar en lista när man klickar på logo
img[0].addEventListener('click',
    function(event){
        createList();
});

// Återställer alla element
function resetAll(){
    restoreBackgroundColor();
    changeBackH2inArt2();
    resetHoodiePicture();
    resetButtonColor();
    restoreElement();
    removeList();
}

// Återställer till Sinus Hoodie text
function changeBackH2inArt2(){
        let h2 = document.querySelector('.art-2 h2');
        h2.innerText = 'Sinus Hoodie';
}
// Ändrar titletexten
function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Radikalt';
}

// ändrar art-1 balgrundsfärg till hot pink
function changeArt1toHotPink(){
    let art1 = document.querySelector('.art-1');
        art1.style.backgroundColor = 'hotpink';
}
// Återställer art-1 till vit bakgrund
function restoreBackgroundColor(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';
}
//ändrar bild och motsvarande text
function changeHoodiePicture(){
    let img = document.querySelectorAll('img');
    let imageText = document.querySelectorAll('h3');
    let newImageText = imageText[2];
    let newImg = img[4];
    newImg.src = './img/hoodie-forrest.png';
    newImageText.innerText = 'Forrest';
}
// Återställer bilden och text
function resetHoodiePicture(){
    let img = document.querySelectorAll('img');
    let imageText = document.querySelectorAll('h3');
    let newImageText = imageText[2];
    let newImg = img[4];
    newImg.src = './img/hoodie-ocean.png';
    newImageText.innerText = 'Water';
}
// ändrar färg på mitten knappen
function changeButtonColor(){
    let button = document.querySelectorAll('button');
    let middleButton = button[1];
    middleButton.style.backgroundColor = 'pink';
}
// Återställer originalfärg på knapp
function resetButtonColor(){
    let button = document.querySelectorAll('button');
    let middleButton = button[1];
    middleButton.style.background = 'rgb(34,34,34)';
}
// Tar bort paragraf element
function removeElement(){
    let element = document.querySelectorAll('footer article');
    let body = element[1];
    while (body.firstChild){
        body.removeChild(body.firstChild);
    }
}
// Återställer paragraf element
function restoreElement(){
    let element = document.querySelectorAll('footer article');
    let body = element[1];
    if (!body.hasChildNodes()){
    let title = document.createElement('h3');
    let paragraph = document.createElement('p');
    title.innerHTML = 'Where we are';
    paragraph.innerHTML = 'Sinus skateboards <br> Railsvägen 13 <br>133 37, Rampnäs';
    body.append(title);
    body.append(paragraph);
}
}
// Lägger till en lista
function createList(){
    let footer = document.querySelector('ul');
        if (footer == null){
            let colorPallet = ['Ash','Fire','Forrest','Water'];
            let ul = document.createElement('ul');
            ul.innerHTML = 'Colors available: ';
            
            for (let i = 0; i < colorPallet.length; i++) {
                let li = document.createElement('li');
                li.style.border = '1px solid black';
                li.style.listStyle = 'none';
                li.innerHTML =  colorPallet[i];
                ul.append(li);
                }
            document.querySelector('footer').appendChild(ul);
        }
}
// Tar bort listan
function removeList(){
    let ul = document.querySelector('ul');
   if (ul != null){
       ul.remove();
   }
}
