// Creación de un Map llamado 'personas'
let personas = new Map();

// Agregando personas al Map
personas.set('Juan', 30);
personas.set('Ana', 25);
personas.set('Carlos', 40);

// Obtención de la edad de una persona
let edadJuan = personas.get('Juan');
console.log(`La edad de Juan es ${edadJuan} años.`);

// Eliminación de una persona del Map
personas.delete('Ana');
console.log(`Se ha eliminado a Ana:`, personas);
