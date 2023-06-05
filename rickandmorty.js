const mainContainer = document.querySelector('.charCont')
async function fetchData(){
const response= await fetch("https://rickandmortyapi.com/api/character")
const data= await response.json()
console.log(data)

data.results.forEach(function(character){
    const container=document.createElement('div');
    container.classList.add('container');

    container.innerHTML= `
    <div class="image"><img src="${character.image}"/></div>
    <div class="details">
        <h2>Name: ${character.name}</h2>
        <h3>Character: ${character.gender}</h3>
        <p>Status: ${character.status}</p>
        <p>Type: ${character.type}</p>
        <p>Location: ${character.location.name}</p>
        

        
    </div>
        
    `;
    mainContainer.appendChild(container);
});

}
fetchData()

// const data = {
//     info: {
//         count: 826,
//         pages: 42,
//         url: 'ttps'
//     },
//     results: [
//         {
//            id: 1,
//            name: 'rick' 
//         },
//         {
//             id:2,
//             name: 'morty'
//         }
//     ]
// }

// data.results.forEach((character)=>{
//     console.log(character.name)
// })