function main() {
   const menuEnlaces = document.querySelector(".menu__enlaces");
   let hamNone = document.querySelector(".barra__enlaces");
   let closeMenu = document.querySelector(".enlaces__close");
   hamNone.style.display = "none";

   menuEnlaces.addEventListener("click", () => {
      if (hamNone.style.display === "none") {
         hamNone.style.display = "flex";
      } else if ((hamNone.style.display = "flex")) {
         hamNone.style.display = "none";
      }  
   });
}
main();
