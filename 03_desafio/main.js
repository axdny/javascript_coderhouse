const libros = [];
let cantidad = parseInt(prompt('Ingrese la cantidad de libros que quiere agregar'));

const libroNuevo = () => {
  for (i = 0; i < cantidad; i++) {
    let libro = prompt('Ingrese un nuevo libro');
    libros.push(libro);
  }
};

const mostrar = () => {
  let mostrarLibros = libros.join(' - ');
  document.write(`<h2>Los libros ingresados son ${mostrarLibros}</h2>`);
};

libroNuevo();
mostrar();