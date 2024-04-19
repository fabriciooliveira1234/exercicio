function inverterString(s) {
    // Converter a string para um array de caracteres
    let caracteres = s.split('');

    // Índices para percorrer o array de caracteres
    let inicio = 0;
    let fim = caracteres.length - 1;

    // Invertendo os caracteres usando um loop while
    while (inicio < fim) {
        // Trocar os caracteres nas posições inicio e fim
        [caracteres[inicio], caracteres[fim]] = [caracteres[fim], caracteres[inicio]];
        // Avançar para o próximo par de caracteres
        inicio++;
        fim--;
    }

    // Convertendo o array de caracteres de volta para uma string
    let stringInvertida = caracteres.join('');
    return stringInvertida;
}

// Exemplo de uso:
let stringOriginal = "Hello, World!";
let stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);