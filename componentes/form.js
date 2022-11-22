function main() {
   const forms = document.querySelector(".formulario");
   forms.innerHTML = `
      <form action="" class="form">
      <div class="form__title">
      <h1>Escribime</h1>
      </div>
      <label for="name" class="form__name">Nombre</label>
      <input type="text" name="name" id="name">
      <label for="email">Email</label>
      <input type="email" name="email" id="email">
      <label for="mensaje">Mensaje</label>
      <textarea name="mensaje" id="mensaje"></textarea>
      <div class="form__btn">
      <button>Enviar</button>
      </div>
      </form>
   `;
}

main();
