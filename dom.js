let imagen = document.querySelector('img')
let botonTurquesa = document.querySelector('#botonTurquesa')
let botonRojo = document.querySelector('#botonRojo')
let botonBlanco = document.querySelector('#botonBlanco')
let botonNegro = document.querySelector('#botonNegro')

botonTurquesa.onclick = function(){
    imagen.src = 'iphone 11 turquesa.jpg'
}

botonRojo.onclick = function(){
    imagen.src = 'ihpon 11 rojo.jfif'
}

botonBlanco.onclick = function(){
    imagen.src = 'ihpone 11 blanco.jpg'
}

botonNegro.onclick = function(){
    imagen.src = 'ihpone negro.png'
}
