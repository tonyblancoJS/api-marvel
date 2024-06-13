fetch('https://gateway.marvel.com/v1/public/characters?ts=3000&apikey=1bc3d7e314f5e0cd801d3544235c7672&hash=7b79f76efd7e1255e65bfe653dfb02be')
.then (response => response.json())
.then (json => {
    
    const characterCardHTML = json.data.results.map(character => 
        `<div class="card">
            <a href="${character.urls[1].url}" target="_blank">
                <img src="${character.thumbnail.path}.${character.thumbnail.extension}">
            </a>
            <div class="info">
                <h3>${character.name}</h3>
            </div>
        </div>
        `).join('');
    document.getElementById('character-cards').innerHTML = characterCardHTML;
})
.catch(error=>console.log('Error de Marvel', error));

window.onscroll = function(){
    if(document.documentElement.scrollTop > 400){
        document.querySelector('.go-top-container')
        .classList.add('show')
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});