const numeros = [1, 2, 3, 4, 5];

// Uso de template literals para mostrar si cada número es par o impar
numeros.forEach(n => {
    let mensaje = `El número ${n} es ${n % 2 === 0 ? 'par' : 'impar'}.`;
    console.log(mensaje);
});
