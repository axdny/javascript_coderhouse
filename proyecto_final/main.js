const $main = document.getElementById('main');
const $addBook = document.getElementById('add-book');
const $library = document.getElementById('library');

const listaLibros = [
  {
    "title": "El resplandor",
    "author": "Stephen King",
    "release": 1977
  },
  {
    "title": "Harry Potter y el cáliz de fuego",
    "author": "J.K. Rowling",
    "release": 2000
  },
  {
    "title": "Duna",
    "author": "Frank Herbert",
    "release": 1965
  },
  {
    "title": "Rayuela",
    "author": "Julio Cortazar",
    "release": 1963
  },
  {
    "title": "Nuestra parte de noche",
    "author": "Mariana Enriquez",
    "release": 2019
  },
  {
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "release": 1944
  }
];

librosJSON = localStorage.setItem('libros', JSON.stringify(listaLibros));


const addBook = (e) => {
  $main.innerHTML = `
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
  //ACA TENGO EL PROBLEMA, NO LOGRO AGREGAR EL NUEVO ITEM AL ARRAY QUE YA TENGO CREADO.
  const $form = document.getElementById('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    let datos = e.target;
    let author = datos[0].value;
    let title = datos[1].value;
    let release = datos[2].value;
    localStorage.setItem('author', author);
    localStorage.setItem('title', title);
    localStorage.setItem('release', release);
    $main.innerHTML = `<h2>Agregado con exito</h2>`;
  });
};

const showLibrary = () => {
  console.log('Ver biblioteca');
  listaLibros.forEach(el => {
    //Creamos un div para mostrar la info de los libros almacenados
    const container = document.createElement('div');
    const seeTitle = document.createElement('h2');
    seeTitle.innerText = el.title;
    container.append(seeTitle);
    const seeAuthor = document.createElement('h2');
    seeAuthor.innerText = el.author;
    container.append(seeAuthor);
    const seeRelease = document.createElement('h2');
    seeRelease.innerText = el.release;
    container.append(seeRelease);
    $main.append(container);
  });
};

$addBook.addEventListener('click', addBook);
$library.addEventListener('click', showLibrary);