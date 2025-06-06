const getListaEpisodios = () => {
    fetch('https://rickandmortyapi.com/api/episode') 
        .then(res => res.json())
        .then(data => {
            const lista = data.results;
            const container = document.getElementById('lista');

            
            lista.forEach(ep => {
                console.log(ep)
                fetch(ep.url)
                    .then(res => res.json())
                    .then(details => {
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.innerHTML = `
                            <div class="card-body text-center">                    
                                <p class="card-text text-success "><strong>${details.name}</strong></p>
                                <p class="card-text">Data: ${details.air_date}</p>
                                <p class="card-text">Episódio: ${details.episode}</p>
                            </div>`;
                        container.appendChild(card);
                    });
            });
        });
};

document.addEventListener('DOMContentLoaded', getListaEpisodios);
