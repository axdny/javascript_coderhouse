const $form = document.getElementById('form');
const $main = document.getElementById('main');

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('formulario enviado');
  let form = e.target;
  $main.innerHTML = `
    <h3>Autor Ingresado:</h3>
    <p>${form[0].value}</p>
    <h3>Libro Ingresado:</h3>
    <p>${form[1].value}</p>
  `;
});