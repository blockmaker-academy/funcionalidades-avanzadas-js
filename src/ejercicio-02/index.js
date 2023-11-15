// Escribe tu código aquí:
const person = {
    name:'John',
    greet: function() {
        console.log(`hola, soy ${this.name}`)
    }
}

person.greet()//jpla, soy John
//Cambiando a u arrow function
const person2 = {
    name:'alice',
    greet:()=> {
        console.log(`Hola, soy ${This.name}`)
    }
}

persone2.greet //hola, soy undefined ( no cambia el valor de `this^)
