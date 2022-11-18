function main(){
   const barra= document.querySelector(".barra");
   barra.addEventListener("click",function (){
      const enlaces= document.querySelector(".enlaces");
      
      if(enlaces.style.display === "block" ){
         enlaces.style.display = "none";
      }else if(enlaces.style.display = "none"){
         enlaces.style.display = "block";
      }
   })
   
}
main()