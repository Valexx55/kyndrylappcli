export class Alumno {

    id!:number;//!non null opertador !
    nombre:string;//otra opcion, es poner en tsconfdig.json. el strictichecnull a false
    apellido:string;
    email:string;
    creadoEn:string;
    edad: number;

    constructor ()
   {
   // this.id = 0;
    this.nombre = '';
    this.apellido = '';
    this.email = '';
    this.creadoEn = '';
    this.edad = 0;

   } 

}
