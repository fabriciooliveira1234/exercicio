function verificaSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === numero) {
        return true;
    } else {
        return false;
    }
}

let numero = 20; // Você pode alterar o número aqui
let pertence = verificaSequenciaFibonacci(numero);

if (pertence) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}