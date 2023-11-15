// Ejercicio-05: Destructuirng de Objetos

const product = {
    name:'Smartphone',
    price: 499.99,
    categgory: 'Electronics'
}

const {name, price,
    category} = product

console.log(`Nombre: ${name}`)

console.log(`Precio: $${price}`)

console.log(`Categoria: $ {categury}`)