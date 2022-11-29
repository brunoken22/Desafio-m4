function main(){
   let header = document.querySelector(".header");

   header.innerHTML = `
   <div class="header__menu">
   <div class="menu__logo">
     <h2 class="logo__title"><a href="./index.html">BRUNO</a></h2>
   </div>
   <div class="menu__enlace-large" >
     <ul class="enlaces-large">
       <li><a href="./portafolio.html" class="large__portafolio">Portafolio</a></li>
       <li><a href="./servicios.html" class="large__servicios">Servicios</a></li>
       <li><a href="./contacto.html" class="large__contacto">Contacto</a></li>
     </ul>
   </div>
   <div class="menu__enlaces">
     <ul class="enlace__barra">
       <a href="#">
         <li>
           <div></div>
           <div></div>
           <div></div>
           <div class="barra__enlace-content">
             <ul class="barra__enlaces">
               <div class="enlaces__close"><a href="#">x</a></div>
               <li><a href="./portafolio.html" class="barra__portafolio" >Portafolio</a></li>
               <li><a href="./servicios.html" class="barra__servicios" >Servicios</a></li>
               <li><a href="./contacto.html" class="barra__contacto" >Contacto</a></li>
             </ul>
           </div>
         </li>
       </a>
     </ul>
   </div>
   </div>
   <div class="header__title">
   <h1 class="title__titulo">Hola soy <span>Bruno</span></h1>
   </div>
   `
}

main()