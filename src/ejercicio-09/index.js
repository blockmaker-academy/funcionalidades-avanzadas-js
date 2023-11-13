// Creación de un Set vacío llamado 'colors'
let colors = new Set();

// Agregando colores diferentes al Set
colors.add('Rojo');
colors.add('Azul');
colors.add('Verde');
colors.add('Amarillo');
colors.add('Rojo'); 

// Imprimiendo la lista de colores en el Set
console.log(colors);

// Verificación de la existencia de un color específico en el Set
const colorEspecifico = 'Verde';
console.log(`¿Existe el color ${colorEspecifico} en el Set?`, colors.has(colorEspecifico));
