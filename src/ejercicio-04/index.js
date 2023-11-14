// Ejercicio -04: Expreciones en Template Literals

const numbers = [2,7,4,9,6]
numbers.forEach
((number) => {
    console.log(`El numero ${number} es ${number % 2 === 0 ?'par':'impar'}.`)
})

