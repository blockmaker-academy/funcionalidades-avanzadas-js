const objeto = {
    nombre: 'Ejemplo',
    metodoRegular: function() {
        return 'El nombre es ' + this.nombre;
    }
};

console.log(objeto.metodoRegular());

// Cambio del método a una arrow function
objeto.metodoRegular = () => {
    return 'El nombre es ' + this.nombre;
};

console.log(objeto.metodoRegular());
