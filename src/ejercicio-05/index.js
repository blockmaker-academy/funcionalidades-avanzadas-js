const producto = {
    nombre: 'Laptop',
    precio: 1500,
    categoria: 'Electrónica'
};

// Uso de destructuring para extraer las propiedades
const { nombre, precio, categoria } = producto;

console.log(`Nombre: ${nombre}`);
console.log(`Precio: ${precio}`);
console.log(`Categoría: ${categoria}`);
