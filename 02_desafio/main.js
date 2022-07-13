let libro1 = 'El Resplandor',
  libro1Stock = 10,
  libro1Precio = 1500;

let libro2 = 'Harry Potter y la piedra filosofal',
  libro2Stock = 6,
  libro2Precio = 2800;

let libro3 = 'El Señor de los anillos',
  libro3Stock = 3,
  libro3Precio = 2000;

let libroSeleccionado = 0,
  libroStock = 0,
  libroPrecio = 0;

const seleccionLibro = () => {
  let libro = parseInt(prompt('¿De que libro queres saber el stock? Ingrese el numero.\n1) El Resplandor\n2) Harry Potter y la piedra filosofal\n3) El señor de los anillos'));
  if (libro === 1) {
    libroSeleccionado = libro1;
    libroStock = libro1Stock;
    libroPrecio = libro1Precio;
  } if (libro === 2) {
    libroSeleccionado = libro2;
    libroStock = libro2Stock;
    libroPrecio = libro2Precio;
  } if (libro === 3) {
    libroSeleccionado = libro3;
    libroStock = libro3Stock;
    libroPrecio = libro3Precio;
  }
  console.log(`libro: ${libroSeleccionado} - stock: ${libroStock} - precio: ${libroPrecio}`);
};

const detalleCompra = () => {
  document.write(`<h2>El libro "${libroSeleccionado}" sale $ ${libroPrecio}.- y tenemos ${libroStock} unidades en stock.</h2>`);
};

seleccionLibro();
detalleCompra();
