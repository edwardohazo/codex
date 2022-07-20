const buttonImg = document.getElementById('button-img');
const buttonPDF = document.getElementById('button-pdf');

buttonImg.addEventListener('click', () => {
    fetch('uploads/dog.jpg')
        .then(res => res.blob())
        .then(img => {
            document.getElementById('img').src = URL.createObjectURL(img);
        });
});

buttonImg.addEventListener('click', () => {
    fetch('uploadas/demo.pdf')
        .then(res => res.blob())
        .then(pdf => {
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        });
});







// Se re ejectuta con modificaciones en el DOM
// let cuerpo = document.getElementById("cuerpo");
// No re ejecuta 
let obj = document.createElement("H4");


// Se re ejectuta con modificaciones en el DOM
console.log(cuerpo);
// No re ejectuta 
console.log(cuerpo.children[8]);


// Modificaciones y re dibujo del DOM
cuerpo.appendChild(obj);


// Ejecuta por primera vez contemplando modificaciones en el DOM
console.log(cuerpo);
console.log(cuerpo.children[8]);


let span = document.querySelector(".sp");

console.log(span.hasChildNodes());




