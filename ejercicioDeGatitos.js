//Ejemplo de POO con Gatitos

class gatitos {

    //1.- Propiedades
    nombre = "";
    edad = 0;
    tamanio = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;


     //3.- Constructor
     constructor (nombre, edad, tamanio, caracter, numeroVidas, color, raza, vacunas) {
        this.nombre = nombre;
        this.edad = edad;
        this.tamanio = tamanio;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;
     }



    //2.- Metoodos
    imprimirInfo(){
        console.log("El nombre de mi gato es: " , this.nombre);
        console.log("La edad de mi gato es: " , this.edad);
        console.log("El tamanio de mi gato es: " , this.tamanio);
        console.log("El numero de vidas de mi gato es: " , this.numeroVidas);
        console.log("La raza de mi gato es: " , this.raza);
    };

    maullar(){
        console.log("Miauuu");
    };

    rasguniar(){
        console.log("El gato ha rasguniado el sillon");
    };

    ronronear(){
        console.log("Rrrrrrrr");
    };

    cuidarGato(){
        if(this.numeroVidas < 3){
            console.log("Cuida a tu gatito porque tiene pocas vidas");
        }
    }
}


//Instanciar
let juanchoDelCampo = new gatitos ("Juancho Del Campo", 5, "Grande", "Tranquilo", 7, "naranja", "angora", true);
let nenito = new gatitos ("Nenito", 3, "Mediano", "Travieso", 2, "Blanco con naranja", "desconocida", true);


juanchoDelCampo.imprimirInfo();
juanchoDelCampo.cuidarGato();
nenito.imprimirInfo();
nenito.cuidarGato();


let gogito =new gatitos ("gregorio gonzalez pikels", 5,"pequeño", "desmadroso y tierno",1,"criollo",true);
let tito =new gatitos("tito camotito", 4,"grande","desmadroso",5,"criollo",false);
let chencha =new gatitos("chencha",5,"grande","chiquiada",8,"cafe con blanco", "persa",true);
let  miau =new gatitos ("miau", 2,"mediano","vivaracho",2,"criollo",false);
let cachiti = new gatitos("cachito",2,"peuqeño", 8,  "blanco con negro", "criollo",false);
