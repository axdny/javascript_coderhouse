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
  let main = document.createElement('main');
  main.innerHTML = `
    <h2>Libros</h2>
    <p>Los libros ingresados son ${mostrarLibros}</p>`;
  document.body.appendChild(main);
};

libroNuevo();
mostrar();