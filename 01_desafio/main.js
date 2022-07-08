let frase = '';
let cantidad = parseInt(prompt('Ingresa la cantidad de palabras que quieres que tenga tu frase'));

for (i = 0; i < cantidad; i++){
  frase += prompt(`Ingresa una palabra.\nSon ${cantidad} palabras en total.`) + " ";
}

document.write(`<h2>${frase}</h2>`);
console.log(`Con las palabras ingresadas formamos: ${frase}`);