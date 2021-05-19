const result = document.getElementById("#resultado")

const obtenerData = data => new Promise( resolve => {
    resolve(data);
});


document.addEventListener('DOMContentLoaded', () => {
    consultaGiphy();
})

async function consultaGiphy() {

    const url = 'http://api.giphy.com/v1/gifs/random?api_key=LdJCBTRkYlhxnLQT5A9GmjkghDMcQrpN&fbclid=IwAR1RbsfKtid8Ssth5-BNSyP29Ma3EXLEWzEFTKP7xoPNccrjgY5PS9v6PgE';

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const data = await obtenerData(resultado.data);
        mostrarData(data)
    } catch (error) {
        console.log(error);
    }
}
function mostrarData(data) {
    const {image_original_url, title } = data;

    const img = document.createElement('img');
        img.src = image_original_url;
    const h1 = document.createElement('h1')
        h1.textContent = title;

    resultado.appendChild(img)
    resultado.appendChild(h1)
    
}