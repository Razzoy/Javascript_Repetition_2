import { storeProducts } from "./storeProducts.js";
/*******************************
 * Lektion 3 - Loops & Arrays  *
 *******************************/

// Opgave 1
// Du skal i disse opgaver arbejde med et givent array. Arrayet ligger i filen: storeProducts.js
// Start med at lave en <div> som du henter ind i dit script med en getElementById metode.
// Du skal i første omgang loope igennem alle indexes i arrayet og vise alle produkterne i din div.
// Produkterne skal opstilles i et css grid eller en flexbox, med pris, billede, produkt navn, antal og popularitet (0-10).
//________________________________________________________________________________________
const lesson3 = document.getElementById('lektion3');

function renderProducts(products) {
    lesson3.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        let product = document.createElement('div');
    
        let title = document.createElement('h2');
        title.innerText = `Item: ${products[i].title}`;
    
        let price = document.createElement('p');
        price.innerText = `Price: ${products[i].price}`;
    
        let popularity = document.createElement('p');
        popularity.innerText = `Popularity: ${products[i].popularity}`;
    
        let quantity = document.createElement('p');
        quantity.innerText = `Quantity: ${products[i].quantity}`;
    
        let image = document.createElement('img');
        image.src = products[i].image;
    
        product.appendChild(title);
        product.appendChild(price);
        product.appendChild(popularity);
        product.appendChild(quantity);
        product.appendChild(image);
    
        product.onclick = function() {
            alert(`Du har tilføjet ${products[i].title} til din kurv`);
        };
    
        lesson3.appendChild(product);
    }
}



// Opgave 2
// Du skal nu lave en funktion der kan simulere at du tilføjer et af produkterne fra opgave 1 til en kurv.
// Din funktion skal derfor kunne kaldes med en onclick på hver af produkterne og kalde en alert
// med følgende tekst: Du har tilføjet "Produktets navn" til din kurv.
//________________________________________________________________________________________


// Opgave 3
// I denne opgave skal du lave en sortering af produkterne fra opgave 1 (lav til høj). Det vil sige du skal arbejde
// videre på samme side.
// Du skal først tilføje en <select> på din side. I din select skal følgende "options" være mulige at vælge;
// Pris, popularitet og alfabetisk.
// Lav en funktion der kan tage imod arrayet og modificere det, så man kan sortere efter de tre options.
// Det vil sige at funktionen skal have to argumenter; arrayet og type af sortering.
// Når arrayet er sorteret skal det returneres og vises i DOM´en med den nye sortering.
//_________________________________________________________________________________________
renderProducts(storeProducts);

let selector = document.querySelector('.dropdown');
selector.addEventListener('change', (e) => {
    let targetedValue = e.target.value;
    let sortedProducts = sortProducts(storeProducts, targetedValue);
    renderProducts(sortedProducts);
});

function sortProducts(array, option) {
    return [...array].sort((a, b) => {
        switch (option) {
            case 'Price':
                return a.price - b.price;
            case 'Popularity':
                return b.popularity - a.popularity;
            case 'Alphabetically':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });
}