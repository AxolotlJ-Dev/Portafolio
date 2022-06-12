


//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});


//night mode
const chk = document.getElementById('chk');

// chk.addEventListener('change', () => {
//   let val = document.body.classList.toggle('dark');
//   localStorage.getItem("chk",val)

// });

let modo=document.getElementById("chk");
let body=document.body;

chk.addEventListener("click", function(){
    let val=body.classList.toggle("dark");
    localStorage.setItem("chk",val);
})

let valor=localStorage.getItem("chk");

if (valor=="true") {
    body.classList.add("dark");
    

} else {
    body.classList.remove("dark");
}


