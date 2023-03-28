let usuario= prompt("Ingrese su edad: ");

if(usuario<18){
    alert("Error no puedes comprar sino eres mayor de edad.")
    window.location = "http://www.google.com"
} else{
    alert("Bienvenido a nuestra pagina puedes compra.")
}
function productos(){
    let cantidadDeProductos= prompt("Ingrese cuantos juegos va a llevar(maximo 5): ");
    while(cantidadDeProductos>5){
        alert("Error su compra excede la cantidad de productos");
        cantidadDeProductos= prompt("Ingrese cuantos juegos va a llevar(maximo 5): ")
    }
    for(let i=1; i<=cantidadDeProductos;i++){
       if(i==1){
         console.log("El usuario llevara: "+ i + " producto.")
        } if(i>1){
            console.log("El usuario llevara: "+ i + " productos.")
        }
    }
    
}
productos();