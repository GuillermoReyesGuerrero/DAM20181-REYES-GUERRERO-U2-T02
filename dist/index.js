"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listalu = Array();
function agregarAlumno() {
    var newAlumno;
    for (var i = 0; i < 5; i++) {
        newAlumno = {
            no_control: "1440000" + i,
            nombre: "Alumno" + i,
            apellidos: "Apellido" + i,
            promedio: (85 + i),
            genero: "M" + i,
            fecha_nacimiento: "1" + i + "-03-2018",
            activo: i % 2 == 0 ? true : false
        };
        listalu.push(newAlumno);
    }
}
function eliminarAlumno(no_control) {
    listalu.forEach(function (element) {
        if (element.no_control == no_control) {
            element.activo = false;
        }
    });
}
//agregarAlumno();
//console.log(listalu);
eliminarAlumno("14400002");
console.log(listalu);
