function main() {
   const forms = document.querySelector(".formulario");
   forms.innerHTML = `
      <form action="" class="form">
      <div class="form__title">
      <h1>Escribime</h1>
      </div>
      <label for="name" >Nombre</label>
      <input type="text" name="name" id="name" class="form__name">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" class="form__email">
      <label for="mensaje">Mensaje</label>
      <textarea name="mensaje" id="mensaje" class="form__mensaje"></textarea>
      <div class="form__btn">
      <button>Enviar</button>
      </div>
      </form>
   `;
   let name = forms.querySelector(".form__name");
   let email = forms.querySelector(".form__email");
   let mensaje = forms.querySelector(".form__mensaje");
   forms.addEventListener("submit", () => {
      const mensaj = {
         to: "bruno_am_22@hotmail.com",
         message: `Nombre: ${name.value}\n Email: ${email.value}\n Mensaje: "${mensaje.value}".`,
      };
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
         method: "POST",
         body: JSON.stringify(mensaj),
         headers: { "content-type": "application/json" },
      });
   });
}

main();
