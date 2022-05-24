const charContainer = document.querySelector(".characters__container");
const search = document.getElementById("searchBar");
const randomBtn = document.querySelector('.randomBtn');

const idTag = 826;

let arr = [];
// let page = 1;




const fetcCharacters = async () => {

        search.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
    
        const filteredCharacters = arr.filter((character) => {
            return (
                character.name.toLowerCase().includes(searchString) 
            );
        });
        displayChars(filteredCharacters).preventDefault();
    });
        await getCharacters();
    
}        







async function getCharacters() {
    for(let i = 1; i < idTag; i++) {
        const url = await fetch(`https://rickandmortyapi.com/api/character/${i}`);
        
        const res = await url.json();
        let char = res;
        arr.push(char);
    }
        console.log(arr);
        displayChars(arr);
    }
    

function displayChars(params) {
    const htmlString = params.map((character) => {
        return `<figure class="char-box">
        <div class="img-container"> 
        <img loading="lazy" src=${character.image} alt="">
        </div>
        <h1>${character.name}</h1>
        <h3>${character.status} - ${character.species}</h3>
    </figure>`
    }).join('')
    
    charContainer.innerHTML = htmlString;
}





randomBtn.addEventListener('click', () => {
        getCharacters();
})



// animalTo();
fetcCharacters();
// getCharacters();