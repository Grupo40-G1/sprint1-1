/*Inicio Sección de noticias*/
const buscarApi = async () => {
    try {
        let urlBuscar = `https://newsapi.org/v2/top-headlines?country=co&category=science&apiKey=c850d86850874e068a5e8c024db32bd0`;
        const responseText = await fetch(urlBuscar, {
            method: 'GET'
        }); //info que llega  a la api| fecth promesa => await
        console.log(responseText);
        const responseJson = await responseText.json();
        console.log(responseJson);

        pintarNoticia(responseJson);

    } catch (error) {
        console.log(error);
    }
}


const pintarNoticia = (noticia) => {
    let tituloNoticia= document.getElementById('tituloNoticia');
    let imagenNoticia = document.getElementById('imagenNoticia');
    let descripcionNoticia = document.getElementById('descripcionNoticia');
    let enlaceNoticia = document.getElementById('enlaceNoticia');

    tituloNoticia.innerText = noticia.articles[1].title;
    imagenNoticia.src = noticia.articles[1].urlToImage;
    descripcionNoticia.innerText = noticia.articles[1].description;
    enlaceNoticia.href = noticia.articles[1].url;

    // -----------------------------------------------------------------------

    let tituloNoticia2 = document.getElementById('tituloNoticia2');
    let imagenNoticia2 = document.getElementById('imagenNoticia2');
    let descripcionNoticia2 = document.getElementById('descripcionNoticia2');
    let enlaceNoticia2 = document.getElementById('enlaceNoticia2');

    tituloNoticia2.innerText = noticia.articles[3].title;
    imagenNoticia2.src = noticia.articles[3].urlToImage;
    descripcionNoticia2.innerText = noticia.articles[3].description;
    enlaceNoticia2.href = noticia.articles[3].url;

    // --------------------------------------------------------------------------

    let tituloNoticia3 = document.getElementById('tituloNoticia3');
    let imagenNoticia3 = document.getElementById('imagenNoticia3');
    let descripcionNoticia3 = document.getElementById('descripcionNoticia3');
    let enlaceNoticia3 = document.getElementById('enlaceNoticia3');

    tituloNoticia3.innerText = noticia.articles[4].title;
    imagenNoticia3.src = noticia.articles[4].urlToImage;
    descripcionNoticia3.innerText = noticia.articles[4].description;
    enlaceNoticia3.href = noticia.articles[4].url;

    // --------------------------------------

    let tituloNoticia4 = document.getElementById('tituloNoticia4');
    let imagenNoticia4 = document.getElementById('imagenNoticia4');
    let descripcionNoticia4 = document.getElementById('descripcionNoticia4');
    let enlaceNoticia4 = document.getElementById('enlaceNoticia4');

    tituloNoticia4.innerText = noticia.articles[5].title;
    imagenNoticia4.src = noticia.articles[5].urlToImage;
    descripcionNoticia4.innerText = noticia.articles[5].description;
    enlaceNoticia4.href = noticia.articles[5].url;
    
}

buscarApi();
/*Fin sección de noticias */