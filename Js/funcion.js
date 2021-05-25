var Name = prompt('Pon tu nombre');
var Text = 'Bienvenido';
for (var Name of Name){
var doc = document.createElement('h2');
doc.textContent = Name;
document.body.appendChild(doc);
}