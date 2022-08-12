import { listaLibros } from "./listaLibros.js";

//Declaración de variables.
const $main = document.getElementById('main'),
  $addBook = document.getElementById('add-book'),
  $library = document.getElementById('library'),
  librosJSON = localStorage.setItem('libros', JSON.stringify(listaLibros)),
  addBookUI = `
    <div class="container">
      <h2 class="fw-bolder mb-4">Ingrese los siguientes datos:</h2>
        <form id="form">
          <div class="input-group input-group-lg mb-3 mt-2">
            <span class="input-group-text w-25">Autor</span>
            <input type="text" class="form-control" id="author" placeholder="Apellido y nombre del escritor." aria-label="author" aria-describedby="input-author" name="author">
          </div>
          <div class="input-group input-group-lg mb-3">
            <span class="input-group-text w-25">Titulo</span>
            <input type="text" class="form-control" id="title" placeholder="Titulo del libro." aria-label="title" aria-describedby="input-title" name="title">
          </div>
          <div class="input-group input-group-lg mb-3">
            <span class="input-group-text w-25 texto">Fecha de lanzamiento</span>
            <input type="number" class="form-control" id="release" placeholder="Fecha de la 1era edición." aria-label="release" aria-describedby="input-release" name="release" min="1600" max="2022" step="1">
          </div>
          <button type="submit" class="btn btn-light btn-outline-dark btn-lg w-50 mb-3 mt-3">Agregar</button>
        </form>
        </div>
    `;

//Función que añade al main los inputs para agregar libros.
const addBook = () => {
  $main.innerHTML = addBookUI;
  const $form = document.getElementById('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target;
    let libroNuevo = {
      'title': datos[1].value,
      'author': datos[0].value,
      'release': parseInt(datos[2].value)
    };
    listaLibros.push(libroNuevo);
    localStorage.setItem('libros', JSON.stringify(listaLibros));
    addBookOk();
    // $main.innerHTML = '';
    showLibrary();
  });
};

//Función que muestra todos los libros que tenemos guardados en la biblioteca.
const showLibrary = () => {
  $main.innerHTML = '';
  listaLibros.forEach(el => {
    //Creamos un div para mostrar la info de los libros almacenados
    const container = document.createElement('div');
    const library = document.createElement('p');
    library.innerHTML = `"${el.title}" fue escrito por ${el.author} y lanzado en ${el.release}`;
    container.append(library);
    $main.append(container);
  });
};

//Función que muestra un alert confirmando que se agrego el libro a la biblioteca.
const addBookOk = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Libro agregado con éxito!',
    showConfirmButton: false,
    timer: 1800
  });
};

//Manejadores de eventos.
$addBook.addEventListener('click', addBook);
$library.addEventListener('click', showLibrary);