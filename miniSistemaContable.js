class empleados {

    //1.- Propiedades
    nombre = "";
    edad = 0;
    rfc = "";
    sueldo= 0;
    diasTrabajados = 0;
    isr= 0;
    sueldoBruto= 0;
    sueldoNeto= 0;
    
   
    
     //3.- Constructor
     constructor (nombre, edad, rfc, sueldo, diasTrabajados, isr, sueldoBruto, sueldoNeto) {
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.sueldo = (sueldo * diasTrabajados);
        this.diasTrabajados =diasTrabajados
        this.isr =sueldo * 31 /100;
        this.sueldoBruto = sueldo;
        this.sueldoNeto= sueldo -isr;
        
     }



    //2.- Metoodos
    imprimirInfo(){
        console.log("El nombre del empleado es  " , this.nombre);
        console.log("La edad del empleado: " , this.edad);
        console.log("El rfc del empleado es: " , this.rfc);
        console.log("cantidad de dias que trabajo el empleado",this.diasTrabajados);
        console.log("El sueldo de el empleado es : " , this.sueldo);
        console.log("El isr a deducir es: " , this.isr);
        console.log("el sueldo bruto de este empleado es :",this.sueldoBruto);
        console.log ("El sueldo neto de este empleado es :",this.sueldoNeto);
    };


}


//Instanciar
let empleado1 =new empleados("pepe",45,"holacaseroli",156.78,30,isr,sueldoBruto,sueldoNeto);

imprimirInfo()