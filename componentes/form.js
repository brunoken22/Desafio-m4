function main() {
   const forms = document.querySelector(".formulario");
   forms.innerHTML = `
      <form action="" class="form">
      <div class="form__title">
      <h1>Escribime</h1>
      </div>
      <div class="form__complet">
      <label for="name" >Nombre</label>
      <input type="text" name="name" id="name" class="form__name"required>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" class="form__email" required>
      <label for="mensaje">Mensaje</label>
      <textarea name="mensaje" id="mensaje" class="form__mensaje" required></textarea>
      <div class="form__btn">
      <button>Enviar</button>
      </div>
      </div>
      <div class="form__mensaje-enviado">
      <figure class="mensaje-enviado-img">
      <img src="./imagenes/check.png" alt="" class="">
      </figure>
      <p class="mensaje-enviado-texto">Mensaje Enviado</p>
      <button class="btn__aceptar">Aceptar</button>
      </div>
      </form>
   `;
   let name = forms.querySelector(".form__name");
   let email = forms.querySelector(".form__email");
   let mensaje = forms.querySelector(".form__mensaje");
   let formMensaje = forms.querySelector(".form__mensaje-enviado")
   let btn = forms.querySelector(".btn__aceptar")
   forms.addEventListener("submit", (e) => {
      e.preventDefault()
      const mensaj = {
         to: "bruno_am_22@hotmail.com",
         message: `Nombre: ${name.value}\n Email: ${email.value}\n Mensaje: "${mensaje.value}".`,
      };
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
         method: "POST",
         body: JSON.stringify(mensaj),
         headers: { "content-type": "application/json" },
      });
      formMensaje.style.display="flex";
   });
   btn.addEventListener("click",(e)=>{
      e.preventDefault();
      formMensaje.style.display = "none";
      name.value = "";
      email.value = "";
      mensaje.value = "";
   })
}

main();
