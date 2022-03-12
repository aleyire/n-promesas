// Función que llama a la API y pide los datos
const getDatos = async () => { 
    const url = "https://jsonplaceholder.typicode.com/photos"
    try { 
        const response = await fetch(url) 
        const datos = await response.json()
        console.log(datos)
        // Se crea la constante que contendrá los métodos del array a trabajar (primero el filtro de la información, y luego un mapeo de títulos)
        const veamos = datos.filter(t => t.id <= 20).map(t => t.title)
        console.log(veamos)
    } catch (err) {
        console.log(err)
    }
}
getDatos()

// Se crea la función que retorna una promesa con el mensaje solicitado
const mensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información enviada!')
        }, 3000)
    })
}
// Se crea la función asíncrona que recibe la promesa para luego mostrarla
const getMensaje = async () => {
    const respuestaPromesa = await mensaje()
    console.log(respuestaPromesa)
}
getMensaje()