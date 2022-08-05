const  sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const  sectionReiniciar = document.getElementById('reiniciar')
const  botonMascotaJugador = document.getElementById('boton-mascota')
const  botonFuego = document.getElementById('boton-fuego')
const  botonAgua = document.getElementById('boton-agua')
const  botonTierra = document.getElementById('boton-tierra')
const  botonReiniciar = document.getElementById('boton-reiniciar')

const  sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const  spanMascotaJugador = document.getElementById('mascota-jugador')

const  spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const  spanVidasJugador = document.getElementById('vidas-jugador')
const  spanVidasEnemigo = document.getElementById('vidas-enemigo')

const  sectionMensajes = document.getElementById('resultado')
const  ataquesDelJugador = document.getElementById('ataques-del-jugador')
const  ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const  contenedorTarjetas = document.getElementById("contenedorTarjetas")


let mokepones = []
let  ataqueJugador
let  ataqueEnemigo
let opccionDeMokepones
let  inputHipodoge 
let  inputCapipepo 
let  inputRatigueya 
let  vidasJugador = 3
let  vidasEnemigo = 3



//CLASS!!!!!!!!
/*Usamos la palabra reservada class para crear una clase (que debe iniciar con Mayuscula) y la palabra reservada constructor para definir los atributos que tendrán nuestros futuros objetos.

Con this.atributo + atributo vamos ligando cada uno de los atributos y finalmente podemos crear variables = new ‘Clase’ y los valores de sus atributos*/


class  Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre,
        this.foto = foto,
        this.vida = vida
        this.ataque = []
    }
}
//crear un new objeto y darle las propiedades...
let hipodoge = new Mokepon("Hipodoge","./media/hipodoge.png", 5)
let capipepo = new Mokepon("Capipepo", "./media/capipepo.png", 5)
let ratigueya = new Mokepon("Ratigueya", "./media/ratigueya.png", 5)

//aca los está empujando hacia el array

//y ahora para llamarlo solo usamos la variable mokepones, ahora no hace falta llamrlos individualmente 


//ingresando ataques
hipodoge.ataque.push(
    {nombre:"💧", id: "boton-agua"},
    {nombre:"💧", id: "boton-agua"},
    {nombre:"💧", id: "boton-agua"},
    {nombre:"🔥", id: "boton-fuego" },
    {nombre: "🍃", id: "boton-tierra"},
)

capipepo.ataque.push(
    {nombre: "🍃", id: "boton-tierra"},
    {nombre: "🍃", id: "boton-tierra"},
    {nombre: "🍃", id: "boton-tierra"},
    {nombre:"💧", id: "boton-agua"},
    {nombre:"🔥", id: "boton-fuego" },
)

ratigueya.ataque.push(
    {nombre:"🔥", id: "boton-fuego" },
    {nombre:"🔥", id: "boton-fuego" },
    {nombre:"🔥", id: "boton-fuego" },
    {nombre:"💧", id: "boton-agua"},
    {nombre: "🍃", id: "boton-tierra"},
)

mokepones.push(hipodoge,capipepo,ratigueya)




function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    mokepones.forEach((mokepon)=> {//recorriendo con el forech
        opccionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `

        contenedorTarjetas.innerHTML+= opccionDeMokepones
            inputHipodoge = document.getElementById('Hipodoge')
            inputCapipepo = document.getElementById('Capipepo')
            inputRatigueya = document.getElementById('Ratigueya')





    })
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)

    sectionReiniciar.style.display = 'none'
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    
    sectionSeleccionarAtaque.style.display = 'flex'
    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {//hacerlo dinamico con el legth
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)