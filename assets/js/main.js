window.onerror = function (mensaje, url, linea, columna, error){

    console.error("se produjo un error:");
    console.error("mensaje:" + mensaje);
    console.error("URL:" + url);
    console.error("Linea:" + linea);
    console.error("Columna:" + columna);
    console.error("Error:" + error); // tipo de error

    return true; 
    
}


const getData = ( () => {
    let insertData = document.querySelector('#insertCard')
    return {
        mostrar: async () => {
            let respuesta = await fetch('https://randomuser.me/api/?results=12');     
            dataFinal = await respuesta.json(); 
            // desestructuro           
            const { results } = dataFinal;
            // recorro la data
            results.forEach( element => {
                const { email, name : { title, first, last }, phone, picture : {large}  } = element

                insertData.innerHTML += 
                `<div class=" col-md-3 mt-3">
                <div class="card" ">
                    <img src="${large}" class="card-img-top" alt="${title} ${first} ${last}">
                    <div class="card-body">
                    <h5 class="card-title">${title} ${first} ${last}</h5>
                    <p class="card-text">Telefono: ${phone}</p>
                    <p class="card-text">Mail: ${email}</p>
                    </div>
                </div> </div>`
            });
        }
    }

})();

getData.mostrar();