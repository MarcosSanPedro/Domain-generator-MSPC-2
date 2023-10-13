let btn = document.querySelector('button');
let quote = document.querySelector('.phrase');


const pronouns = ['The', 'our','my'];
const adj = ['fenomenal', 'amazing','greatest']
const names = ['mendez','goat','blackcat','chocolatemc']

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * pronouns.length);
    let random1 = Math.floor(Math.random() * adj.length);
    let random2 = Math.floor(Math.random() * names.length);


    quote.innerText = pronouns[random] + adj[random1] + names[random2] + '.com';

})