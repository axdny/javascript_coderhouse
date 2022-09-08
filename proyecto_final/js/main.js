import { addBookUI, LibraryUI } from './ui.js';
import { listaLibros } from "./listaLibros.js";

//Declaración de variables.
const $main = document.getElementById('main'),
  $addBook = document.getElementById('add-book'),
  $library = document.getElementById('library');

//Función que añade al main los inputs para agregar libros.
const addBook = () => {
  $main.innerHTML = addBookUI;
  const $form = document.getElementById('form');
  $form.addEventListener('submit', async (e) => {
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
    showLibrary();
  });
};

//Función que muestra los libros que vamos agregando a la biblioteca.
const showLibrary = () => {
  $main.innerHTML = LibraryUI;
  for (let libros of listaLibros) {
    const tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    tbody.append(tr);
    let tdTitle = document.createElement('td');
    tdTitle.classList.add('fs-4');
    tdTitle.innerHTML = libros.title;
    tbody.append(tdTitle);
    let tdAuthor = document.createElement('td');
    tdAuthor.classList.add('fs-4');
    tdAuthor.innerHTML = libros.author;
    tbody.append(tdAuthor);
    let tdRelease = document.createElement('td');
    tdRelease.classList.add('fs-4');
    tdRelease.innerHTML = libros.release;
    tbody.append(tdRelease);
  }
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

//Función que muestra los libros de la biblioteca por defecto utilizando Fetch.
const showLibraryDefault = () => {
  $main.innerHTML = LibraryUI;
  fetch('https://my-json-server.typicode.com/axdny/javascript_coderhouse/books')
    .then(response => response.json())
    .then(json => {
      json.forEach(el => {
        const tbody = document.getElementById('tbody');
        let tr = document.createElement('tr');
        tbody.append(tr);
        let tdTitle = document.createElement('td');
        tdTitle.classList.add('fs-4');
        tdTitle.innerHTML = el.title;
        tbody.append(tdTitle);
        let tdAuthor = document.createElement('td');
        tdAuthor.classList.add('fs-4');
        tdAuthor.innerHTML = el.author;
        tbody.append(tdAuthor);
        let tdRelease = document.createElement('td');
        tdRelease.classList.add('fs-4');
        tdRelease.innerHTML = el.release;
        tbody.append(tdRelease);
      });
    })
    .catch(err => console.log('Solicitud fallida', err));
};

//Manejadores de eventos.
$addBook.addEventListener('click', addBook);
$library.addEventListener('click', showLibraryDefault);