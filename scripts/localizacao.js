const getListaLocalizacao = () => {
    fetch('https://rickandmortyapi.com/api/location') 
        .then(res => res.json())
        .then(data => {
            const lista = data.results;
            const container = document.getElementById('lista');

            
            lista.forEach(localizacao => {
                console.log(localizacao)
                fetch(localizacao.url)
                    .then(res => res.json())
                    .then(details => {
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.innerHTML = `
                            <div class="card-body text-center" id="card">                    
                                <p class="card-text text-success"><strong>${details.name}</strong></p>
                                <p class="card-text">Tipo: ${details.type}</p>
                                <p class="card-text">Dimensão: ${details.dimension}</p><br>
                                <a class="card-text" href='${details.residents}'><strong><Residentes: <br>${details.residents}</strong></a>
                            </div>`;

                            container.appendChild(card);

                           /* listaResidentes.forEach(residente=> {
                                console.log(residente)
                                fetch(residente)
                                    .then (res=>res.json())
                                    .then (info =>{
                                        card.innerHTML=`<p class="card-text"><strong><Residentes: <br>${info.residente}</strong> <br></p>`
                                    })
                            })*/
                        
                    });
            });
        });
};

document.addEventListener('DOMContentLoaded', getListaLocalizacao);
