let frase = '';

for (i = 0; i < 5; i++){
  frase += prompt('Ingresa una palabra para formar una frase.\nSon 5 palabras en total.') + " ";
}

document.write(`<h2 style=color{red};>${frase}</h2>`);
console.log(`Con las palabras ingresadas formamos: ${frase}`);