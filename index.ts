import {Alumno} from "./alumno";

var listalu=Array<Alumno>();

function agregarAlumno():void{
    let newAlumno:any;
    for(let i=0; i<5; i++){
        newAlumno={
            no_control:`1440000${i}`,
            nombre:`Alumno${i}`,
            apellidos:`Apellido${i}`,
            promedio:(85+i),
            genero:`M${i}`,
            fecha_nacimiento:`1${i}-03-2018`,
            activo: i%2==0?true:false
        }
        listalu.push(newAlumno);
    }
}
function eliminarAlumno(no_control:string):void{
    listalu.forEach(element =>{
        if(element.no_control==no_control){
            element.activo=false;
        }
    });
}
//agregarAlumno();
//console.log(listalu);

eliminarAlumno("14400002");
console.log(listalu);


