function main() {
   let menuBtn = document.querySelector(".menu__boton");

   menuBtn.addEventListener("click", () => {
      let menuEnlaces = document.querySelector(".menu__enlaces");
      menuEnlaces.style.display = "flex";
   });
}

main();
