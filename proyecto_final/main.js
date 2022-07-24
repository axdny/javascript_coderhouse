const libros = ['El Resplandor','It','El Señor de los anillos'];
const $main = document.getElementById('main');

let seleccion = parseInt(prompt('Seleccione la opcion deseada:\n1) Ingresar libro\n2) Ver lista de Libros'));

const libroNuevo = () => {
  let libro = prompt('Ingrese un nuevo libro');
  libros.push(libro);
};

const Verlista = () => {
  $main.innerHTML = `La lista de libros es la siguiente: ${libros.join(' - ')}`;
}

if (seleccion === 1) {
  libroNuevo();
  Verlista();
} else if (seleccion === 2) {
  Verlista();
}