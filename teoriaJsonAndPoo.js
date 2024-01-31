//1. Creamos un arreglo de objetos para nuestras trareas, estas tareas tendrán atributos como id, título, estatus de completada o no completada

//Esta información se está ejecutando del lado del cliente.

let tareas = [ //Este es un arreglo [] con objetos{}
    {
        id : 1,
        título : "Baniar al perro",
        estatus : true,

    }, //también se separa con una coma este nuevo objeto porque va dentro del arreglo

    { //se pueden poner varios objetos dentro del arreglo

        id : 2,
        títulos : "Preparar la comida",
        estatus : false,
        //Se tienes tres atributos, uno de id, uno de texto y un booleano

    }
]

//Si queremos enviar este arreglo al servidor
let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);


//Ejemplo el carrito de compras

//Declaramos un arreglo de objetos vacío

let carritoDeCompras = [];

//Productode mi catálogo
let producto = {
    id : 1,
    nombre : "Camisa de Pokemon",
    precio : 299.99,
    cantidad : 1,
};

//Mostrar información del carrito de compras
console.log("Tienes",carritoDeCompras.length, " productos(s) en tu carrito"); //Aquí le estoy pidiendo que me diga cuántos productos tengo en el carrito de compras. Me aparecerá 0

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto); //Nota: El arreglo es una colección de datos por lo que se puede agregar otros objetos al momento de usar los métodos.

//Muesto la nueva información de mi carrito
console.log("Tienes",carritoDeCompras.length, " producto(s) en tu carrito"); //Ahora me aparecerá 1 producto en mi carrito de compras

//Actualizar la cantidad de productos en el carrito
//Se puede utilizar la lógica de negocio deseada. En este caso estamos sobre escribiendo
let idProductoModificar = 1; //producto a actualizar
let nuevaCantidad = 3; //cantidad nueva de productos que voy a comprar

let productoExiste = carritoDeCompras.find(function(producto) {return producto.id === idProductoModificar;
}); //Debo asegurarme que el producto existe. El método llamado find va a buscar uno por uno en dentro del arreglo para modificarlo si lo encuentra se actualiza la cantidad, y si no marca undefinied si este no está.
/*Sin usar la función flecha se habría hecho:

 */

if(productoExiste){
    productoExiste.cantidad = nuevaCantidad;
} //Si existe el producto entonces va a sobreescribir  la nueva cantidad.

console.log("Tienes",carritoDeCompras.length, " producto(s) en tu carrito");

console.log(producto);

//Eliminar un producto del carrito
let productoEliminar = 1;

//Reviso el id del producto a eliminar en cada uno de los indices de mi arreglo, si encuentro un indice que dentro tenga un objeto que coincida con elid que quiero borrar, entonces lo elimino.
let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){
    return producto.id === productoEliminar; //findIndex es par buscar en el índice.
    //Aquí va a buscar el elemento que es estrictamente igual de producto.id al productoEliminar y nos dará true o false.
}) 

// Aquí se verifica si el índice del elemento que se encontró es válido. Con el findIndex que usamos voy a devolver el primer indice del elemento que cumpla con la condición. Entonces recibe la indicación: Si no se encuentra el elemento que coincida con la condición entonces vamos a devolver -1, esto para evitar borrar un elemento que no sea (pensando que empecemos en un índice 0)
if(indiceProductoAEliminar !== -1){ //0,1,2, 3 dispararían un true y se activa el if. Lo que quiere decir que el -1 dispara un false y no se activa el if. Es importante usar el -1 para diferenciar del resto de los indices reales, ya que los arreglos no usan números negativos, entonces para que no se elimine el 0 que sería el indice 1, se debe poner -1, para que sepa que no queremos borrar el 0.
    carritoDeCompras.splice(indiceProductoAEliminar, 1); //El splice va a encontrar ese valor del indice y a partir de ahí va a borrar el primer índice.
}

console.log(carritoDeCompras.length); //En el indice 0 encontró el valor que estaba buscando y le aplicó el splice (borró el producto).


//Comprar productos (pagar carrito de compras)
/*
El método forEach es un método de array de JS, que nos va a ayudr a poder ejecutar una función en cada elemento de nuestro arry.

Sintáxis de un forEach

array.forEach(function(elemento, indice, arreglo){})
*/

let total = 0;

//Vamos a agregar un nuevo producto a mi carrito de compras porque borré uno y tendría 0 si no lo agregara
carritoDeCompras.push(producto);
    

carritoDeCompras.forEach(function(prducto){ //Aquí le estamos indicando para mi carrito de compra va a utilizar la siguiente funcion para cada uno (forEach) de los productos del carrito de compras que encuentre.

    
    total += producto.precio * producto.cantidad; 
    //De mi producto vas a tomar el precio y vas a multiplicar el precio de ese producto por la cantidad del producto. Lo cual va a resultar en que se sume o reasigne a la variable total
});


//Reviso el total de mi carrito de compras
console.log("El total de tu carrito de compras es de: ", total);

//Para mandarlo al servidor
let carritoJSON = JSON.stringify(carritoDeCompras);
console.log(carritoJSON);







/*
Lo dejaremos para el final
Este sirve cuando queremos borrar todo el carrito
function vaciarCarritoCompleto(){
    //Para vaciar todo el carrito
    carritoDeCompras();
}
*/

/*Con función flecha en la línea 56: 

let productoExiste = carritoDeCompras.find(producto => producto.id === idProductoModificar);

la función flecha se utiliza para encontrar un producto específico en el arreglo carritoDeCompras que tenga un id igual al valor de productoId.
Aqupi se está utilizando para buscar un producto específico en el arreglo carritoDeCompras y asignarlo a la variable productoExiste. Si el producto se encuentra, productoExiste contendrá el producto; de lo contrario, será undefined, lo que significa que no se encontró el producto.
*/

