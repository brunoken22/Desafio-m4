function main() {
   const api = fetch(
      "https://cdn.contentful.com/spaces/dehbm7ub5p2i/environments/master/entries?access_token=Qf7Zb-brgliU0brmmNOEMA6joqIGxQhy3_WSoGD1B8Y&content_type=desafioM4"
   );
   api.then((result) => {
      return result.json();
   }).then((dato) => {
      for (let i = 0; i < 3; i++) {
         let template = document.querySelector("#servicios__muestra");
         let serContenful = document.querySelector(".servicios__contenful");
         let imgTemplate = template.content.querySelector(".imagen__template");
         let descriptionTemplate = template.content.querySelector(
            ".muestra__description"
         );
         let titleTemplate = template.content.querySelector(".muestra__title");
         descriptionTemplate.innerHTML = dato.items[i].fields.description;
         titleTemplate.innerHTML = dato.items[i].fields.title;
         imgTemplate.src = dato.items[i].fields.urlImage;
         let clone = document.importNode(template.content, true);
         serContenful.appendChild(clone);
      }
   });
}

main();
