function sumar(...numeros) {
    return numeros.reduce((acumulado, actual) => acumulado + actual, 0);
}

// Ejemplo de uso de la función
console.log(sumar(1, 2, 3));  // 6
console.log(sumar(10, 20, 30, 40, 50));  // 150