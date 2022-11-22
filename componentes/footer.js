function main() {
   let footer = document.querySelector(".footer");

   footer.innerHTML = `
   <div class="footer__contenido">
   <div class="contenido__title">
     <h2>BRUNO</h2>
   </div>
   <div class="contenido__icon">
       <a href="#"><img src="./imagenes/instagram.png" alt="">Instagram</a>
       <a href="#"><img src="./imagenes/linkedin.png" alt="">Linkedin</a>
       <a href="#"><img src="./imagenes/github.png" alt="">GitHub</a>
   </div>
 </div>
   `;
}

main();
