// Ejercicio 02: Arrow Funciones y `this`

const persona = {
   name: `John`,
    greet: function  () {
        console.log(`Hola, soy ${this.name}`)
    }
}

persona.greet()

const persona2 = {
    name: 'Alice',
    greet: () =>{
        console.log(`Hola, soy ${this.name}`)
    }
}

persona2.greet()