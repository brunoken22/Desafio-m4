function main() {
   const api = fetch(
      "https://cdn.contentful.com/spaces/dehbm7ub5p2i/environments/master/entries?access_token=Qf7Zb-brgliU0brmmNOEMA6joqIGxQhy3_WSoGD1B8Y"
   );
   api.then((result) => {
      return result.json();
   }).then((dato) => {
      console.log(dato);
   });
}

main();
