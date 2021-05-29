const nombre = document.getElementById('nombre');
const form = document.getElementById('form');
const parrafo = document.getElementById('warning');
const correct = document.getElementById('correct')

form.addEventListener('submit', e=> {
	e.preventDefault()
	let warnings = '';
	let entrar = false
	parrafo.innerHTML = '';
   if (nombre.value.length <5) {
   	// statement
   	warning = 'El nombre no es valido';
   	console.log('no es valido');
   	entrar = true

   }
   if (entrar) {
   	parrafo.innerHTML = warning
   }else {
   	correct.innerHTML = 'Bienvenido';
   }
})
