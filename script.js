document.getElementById('video-search-bar-ovoVgpt').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let videoItems = document.querySelectorAll('.video-item-ovoVgpt');

    videoItems.forEach(function(video) {
        let title = video.querySelector('.video-title-ovoVgpt').innerText.toLowerCase();
        if (title.includes(filter)) {
            video.style.display = "";
        } else {
            video.style.display = "none";
        }
    });
});

document.querySelectorAll('.video-item-ovoVgpt').forEach(function(video) {
    video.addEventListener('click', function() {
        alert('Reproduzindo ' + this.querySelector('.video-title-ovoVgpt').innerText);
    });
})
falta para completa o ;
terceirosite abaixo;
document.addEventListener('DOMContentLoaded', () => {
    const games = [
        { name: 'Jogo 1', info: '#', liked: false },
        { name: 'Jogo 2', info: '#', liked: false },
        { name: 'Jogo 3', info: '#', liked: false }
    ];

    const gameList = document.getElementById('games');

    games.forEach((game, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${game.name}</span>
            <div>
                <a href="${game.info}" target="_blank">Mais informações</a>
                <button onclick="toggleLike(${index})">${game.liked ? 'Descurtir' : 'Curtir'}</button>
            </div>
        `;
        gameList.appendChild(li);
    });

    window.toggleLike = function(index) {
        games[index].liked = !games[index].liked;
        const buttons = gameList.getElementsByTagName('button');
        buttons[index].textContent = games[index].liked ? 'Descurtir' : 'Curtir';
        buttons[index].classList.toggle('liked', games[index].liked);
    };
});
