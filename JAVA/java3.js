n=prompt("Ingrese su edad")
ng=prompt("Ingrese su genero M o F")


 if (n<=10 && ng=="F") {
    alert("Recibes un jugo y una pizza");
 }else if(n>17 && ng=="F"){
    alert("Recibes una pizza hawaina y una cerveza");
 }else if(n<=10&& ng=="M"){
    alert("Recibes un jugo y una pizza tres carnes");
 }else if(n>17&& ng=="M"){
    alert("Recibes una cerveza y una pizza tres carnes"); 
 }else if((n<17)&&(n>10)&& ng=="F"){
   alert("Recibes una  una pizza hawaina");
 }else if((n<=17)&&(n>10)&& ng=="M"){
   alert("Recibes una  una pizza TRES CARNES");
 } else{
    alert("no recibis ni chimba");
 }