const formContent = document.getElementById("formulario-content");
const formContact = document.getElementById("formulario");
const formName = document.getElementById("user");
const formEmail = document.getElementById("email");
const formisValid = {nombre: false, email: false};

// AXIOS

formContact.addEventListener("submit", (event) => {

  event.preventDefault();

  const nombre = validateUsername(formName.value);
  if (nombre && formEmail.value.trim().length > 0)
  {
  getData(formContact);
  }

});


const getData = function (data) {

const formData = new FormData(data);
axios({
    method: "POST",
    url: "form.php",
    data: formData
//     // headers: {
//     // }
}).then(res => {formContent.removeChild(formContact);

    const thanks = document.createElement("DIV");
    thanks.textContent = `¡Gracias por depositar tu confianza ${res.data.user}! Uno de nuestros colaboradores se pondrá en contacto a la brevedad posible`;
    thanks.classList.add("thanks");
    formContent.appendChild(thanks);});

}



// formContact.addEventListener("submit", (event) => {
//   event.preventDefault();
//   getDat(formContact);
// });

// const getDat = function (data) {
  
// const dataForm = {
//   nombre: "Eduardo",
//   edad: 15
// }

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(dataForm),
//   headers: {
//     "content-type": "application/json"
//   }
// }).then(res => res.json()).then(res => {console.log(res)});

// }




//                 formContact.addEventListener("submit", (event) => {
//                             event.preventDefault();
//                             getData(formContact);
//                 });
                
//                 const getData = function (data) {

//                 const formData = new FormData(data);
//                 console.log(formData);
//                 let xhr;
//                 xhr = new XMLHttpRequest();    
//                 xhr.open("POST", "form.php");
    
//                 xhr.addEventListener("load", (event) => {
//                     console.log(typeof event.target.response);
//                     let jsonObject = JSON.parse(event.target.response);
//                     console.log(jsonObject);

//                     formContent.removeChild(formContact);
//                     const thanks = document.createElement("DIV");
//                     thanks.textContent = `¡Gracias por depositar tu confianza ${jsonObject.user}! Uno de nuestros colaboradores se pondrá en contacto a la brevedad posible`;
//                     thanks.classList.add("thanks");
//                     formContent.appendChild(thanks);
//                 });
            
//                 xhr.send(formData);
// }




// FETCH

// formContact.addEventListener("submit", (event) => {
//   event.preventDefault();
//   getData(formContact);
// });


// const getData = function (data) {
// const formData = new FormData(data);
// fetch("form.php",{
//     method: "POST",
//     body: formData
// //     // headers: {
// //     // }
// }).then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
//   .then(res => res.json()).then(res => {formContent.removeChild(formContact);
    
//     const thanks = document.createElement("DIV");
//     thanks.textContent = `¡Gracias por depositar tu confianza ${res.user}! Uno de nuestros colaboradores se pondrá en contacto a la brevedad posible`;
//     thanks.classList.add("thanks");
//     formContent.appendChild(thanks);});
   
// }