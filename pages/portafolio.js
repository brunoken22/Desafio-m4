function mostrarDatos(result){
   let contenidos = document.querySelector(".contenido__contenful");
   
   for (let dato of result) {
      console.log(dato);
      let template = document.querySelector("#template__contenful");
      const img = template.content.querySelector(".img");
      const title = template.content.querySelector(".contenido__titulo");
      const description = template.content.querySelector(".contenido__description");
      const enlace = template.content.querySelector(".contenido__enlace a");
      
      img.src = dato.fields.linkImgPagina;
      title.textContent = dato.fields.appMisPelis;
      description.textContent  = dato.fields.description;
      enlace.href = dato.fields.linkDeArticle;

      let clone = document.importNode(template.content, true);
      contenidos.appendChild(clone);
   }
   for(let dato of result){

   }
}

function main(){

   fetch("https://preview.contentful.com/spaces/dehbm7ub5p2i/environments/master/entries?access_token=Nc9wuQJ4_aK-N9OcKM8RKUNArEGoe_EUqrxeQ2e2s5Y&content_type=cms")
   .then(result =>{
      return result.json();
   })
   .then(dato =>{
      return mostrarDatos(dato.items)
   })
}

main()