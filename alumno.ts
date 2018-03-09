export class Alumno{
   no_control:string;
   nombre:string;
   apellidos:string;
   promedio:number;
   genero:String;
   fecha_nacimiento:string;
   activo:boolean;

    constructor(no_control:string,nombre:string,apellidos:string,promedio:number,genero:string,
                fecha_nacimiento:string,activo:boolean){

                    this.no_control=no_control;
                    this.nombre=nombre;
                    this.apellidos=apellidos;
                    this.promedio=promedio;
                    this.genero=genero;
                    this.fecha_nacimiento=fecha_nacimiento;
                    this.activo=activo;
    }
}