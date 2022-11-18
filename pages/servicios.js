
function main(){
   const servicios = document.querySelector(".servicios")
   const newElDiv = document.createElement("div");
   
   newElDiv.innerHTML = `
      <p>Hola soy javascript</p>
   `;

   servicios.appendChild(newElDiv)
}  

main()   
