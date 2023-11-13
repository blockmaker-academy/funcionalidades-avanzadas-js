const frutas = ['Manzana', 'Banana', 'Pera', 'Naranja', 'Mango'];

// Uso de destructuring para obtener el primer y último elemento
const [primeraFruta, , , , ultimaFruta] = frutas;

console.log(`Primera fruta: ${primeraFruta}`);
console.log(`Última fruta: ${ultimaFruta}`);
