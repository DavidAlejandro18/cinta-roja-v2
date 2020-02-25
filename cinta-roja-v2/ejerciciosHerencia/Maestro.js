class Maestro {
    constructor(materia, calificaciones) {
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    promedio() {
        var suma = 0;

        this.calificaciones.map((element) => suma += element);

        return (suma / this.calificaciones.length);
    }
}

module.exports = { Maestro };