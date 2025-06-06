const getListaPersonagens = () => {
    fetch(' https://rickandmortyapi.com/api/character') 
        .then(res => res.json())
        .then(data => {
            const lista = data.results;
            const container = document.getElementById('lista');

            
            lista.forEach(personagem => {
                console.log(personagem)
                fetch(personagem.url)
                    .then(res => res.json())
                    .then(details => {
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.innerHTML = `
                            <div class="card-body text-center">                                
                                <img src="${details.image}" alt="${details.name}">
                                <p class="card-text text-success"><strong>${details.name}</strong></p>
                                <p class="card-text">Status: ${details.status}</p>
                                <p class="card-text">Especies: ${details.species}</p>
                            </div>`;
                        container.appendChild(card);
                    });
            });
        });
};

document.addEventListener('DOMContentLoaded', getListaPersonagens);
