// Cotizador

let selectService = document.getElementById("selectService");

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

// Cuando cambiemos el servicio se crea y se envía una solicitud AJAX
selectService.addEventListener("change", (event) => {
    input2.value = "";
    input3.value = "";

    //  AJAX se crea

    let xhr;
    xhr = new XMLHttpRequest();
    xhr.open("GET", "servicios.json");

    // Se establece el servicio que condiciona los valores del carrito
    input1.value = event.target.value;

    let paquete = input3;
    // Se toma el elemento image de la imagen del servicio
    let imagenServicio = document.getElementById("imagen-servicio");

    
     // Se establecen los valores de los parámetros del servicio seleccionado
    xhr.addEventListener("load",  (event) => {

        let jsonObject = JSON.parse(event.target.response);

       
         if (input1.value == option1.value) {

            imagenServicio.setAttribute("src", "uploads/img-2.jpg")

            paquete.addEventListener("change", (e) => {
                if (e.target.value == 1) {
                    input2.value = jsonObject[0].Galeria[0].Precio;
                }
                else if (e.target.value == 2) {
                    input2.value = jsonObject[0].Galeria[1].Precio;
                }
                else if (e.target.value == 3) {
                    input2.value = jsonObject[0].Galeria[2].Precio;
                }
            })

        }

        else if (input1.value == option2.value) {

            imagenServicio.setAttribute("src", "uploads/img-3.jpg")

            paquete.addEventListener("change", (e) => {
                if (e.target.value == 1) {
                    input2.value = jsonObject[0].Contacto[0].Precio;
                }
                else if (e.target.value == 2) {
                    input2.value = jsonObject[0].Contacto[1].Precio;
                }
                else if (e.target.value == 3) {
                    input2.value = jsonObject[0].Contacto[2].Precio;
                }
            })

        }
        
        else if (input1.value == option3.value) {

            imagenServicio.setAttribute("src", "uploads/img-4.jpg")

            paquete.addEventListener("change", (e) => {
                if (e.target.value == 1) {
                    input2.value = jsonObject[0].Ecommerce[0].Precio;
                }
                else if (e.target.value == 2) {
                    input2.value = jsonObject[0].Ecommerce[1].Precio;
                }
                else if (e.target.value == 3) {
                    input2.value = jsonObject[0].Ecommerce[2].Precio;
                }
            })

        }
                        

    });

    xhr.send();

});









