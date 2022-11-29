function mostarDatos(result){
   let contenidoContenful = document.querySelector(".contenido__contenful");
   
   let template = document.querySelector("#template__contenful");
   for(let item of result.Asset){
      let img = template.content.querySelector(".contenful__contenido .img");
      let titulo = template.content.querySelector(".contenido__titulo");
      let description = template.content.querySelector(".contenido__description");
      
      img.src = item.fields.file.url;
      titulo.textContent = item.fields.title;
      description.textContent = item.fields.description;

      let clone = document.importNode(template.content,true)
      contenidoContenful.appendChild(clone)
   }
}

function main(){
   fetch("https://cdn.contentful.com/spaces/dehbm7ub5p2i/environments/master/entries?access_token=qV9IuSz_Kg1vf-fGr32-Y3rLRNDwhjGpbbEd99-JOVA&content_type=servicios")
   .then(result => {
      return result.json();
   })
   .then(dato => {
      return mostarDatos(dato.includes);
   })
}
main()