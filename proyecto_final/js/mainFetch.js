import { addBookUI, LibraryUI } from './ui.js';

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
    const datos = e.target
    const body = {
      title: datos[1].value,
      author: datos[0].value,
      release: parseInt(datos[2].value),
    };
    await fetch('https://my-json-server.typicode.com/axdny/javascript_coderhouse/books', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log('Solicitud fallida', err));
    addBookOk();
    showLibrary();
  });
};
    
//Función que muestra todos los libros que tenemos guardados en la biblioteca.
const showLibrary = () => {
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