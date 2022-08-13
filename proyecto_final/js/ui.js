//Interfases de usuario al hacer click en agregar o mostrar.

export const addBookUI = `
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

export const LibraryUI = `
  <table class="table table-responsive text-white mb-5 mt-3">
    <thead>
      <tr class="text-start fs-2 fst-italic">
        <th>Titulo</th>
        <th>Autor</th>
        <th>Lanzamiento</th>
      </tr>
    </thead>
    <tbody id="tbody" class="text-start">
    </tbody>
  </table>
`;