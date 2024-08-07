/************************************
 * Lektion 2 - Objects & functions  *
 ************************************/

// Opgave 1
// I denne opgave skal du lave en funktion der kan tjekke længden på en given string.
// Din funktion skal altså tage imod et argument (din string der skal tjekkes) og returnere et resultat i form af et tal.
// Funktionen skal kaldes og du skal gemme resultatet, hvorefter string + resultat skal printes i en console.log,
// så der står i konsollen: "Relativitetsteori er 17 bogstaver langt".
//________________________________________________________________________________________________
function wordCheck(word){
    let stringLength = word.length;
    console.log(word + ' er ' + stringLength + ' bogstaver langt');
}

wordCheck('havregryn');

// Opgave 2
// Du skal i denne opgave lave et objekt der indeholde følgende:
// - Fornavn, Efternavn, Email, Telefonnummer, Adresse og Postnummer.
// Objektet skal printes ud i en console.log
//________________________________________________________________________________________________
let person = {
    Fornavn: "Mathias",
    Efternavn: "Arenfeldt",
    Email: "math77@gmail.com",
    Telefonnummer: 7777777,
    Adresse: "Nørrebro 38",
    Postnummer: 9000,
}

console.log(person);


// Opgave 3
// Du skal nu lave en funktion der kan ændre på en værdi i et objekt.
// Funktionen skal kunne tage imod tre argumenter; objektet der skal ændres, hvilken "key" der skal ændres på,
// og til sidst hvad den nye "value" skal være.
// Til slut skal din funktion returnere det nye modificerede objekt og printe dette i en console.log.
// Du kan med fordel bruge objektet du lavede i opgave 2 til at ændre på en value.
//_________________________________________________________________________________________________
function changeValue(object, key, newValue){
    let changedValue = object[key] = newValue;
    console.log('The value of the key "' + key + '", has been changed to: "' + changedValue + '"');
    return changedValue;
}

changeValue(person, 'Postnummer', 9300);


// Opgave 4
// Du skal i denne opgave lave en funktion der kan tjekke typeof på alle key value pairs i et objekt.
// Funktionen skal console.logge typen af hver eneste value i et objekt.
// Objektet der skal tjekkes skal kunne sendes ind i funktionen som argument.
//__________________________________________________________________________________________________
function checkTypes(object) {
    for (const key in object) {
            console.log(`${key} er af typen: ${typeof object[key]}`);
    }
}

checkTypes(person);

// Opgave 5
// I denne opgave skal du lave en "DOM Element generator" funktion.
// Din funktion skal kunne returnere et givent DOM element når den kaldes.
// Funktionen skal indeholde så mange af de gængse HTML elementers argumenter som du kan komme i tanke om.
// Den skal som minimum være i stand til at tage imod argumenterne; type, classname og id.
// Et eks. på at kalde en sådan funktion kunne se således ud: GenerateElement('div', 'someClassName', 'myID')
//__________________________________________________________________________________________________
function generateElement(type, id, classname, text, parrent, href, src, alt, value, placeholder){
    let newElement = document.createElement(type);

    if(id){
        newElement.id = id;
    }
    if(classname){
        newElement.className = classname;
    }
    if(text){
        newElement.innerText = text;
    }

    let newParrent = document.getElementById(parrent)
    if(parrent){
        newParrent.appendChild(newElement);
    }

    if(href){
        newElement.href = href;
    }
    if(src){
        newElement.src = src;
    }
    if(alt){
        newElement.alt = alt;
    }
    if(value){
        newElement.value = value;
    }
    if(placeholder){
        newElement.palceholder = placeholder;
    }
    return newElement;
}
generateElement('p','testText','', 'Hello i am test Text', 'lection2Opg5')

// Opgave 6 Bonus:
// Brug din nye HTML kodegenerator funktion til at bygge et 3x3 Grid layout af div.
// Hver div skal have en forskellige background-color og inde i hver div skal der ligge et P tag.
// P taggets innerText skal være forskelligt på dem alle. Øvelsen går ud på at lave dette med så lidt kode som muligt.
function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
function createGridLayout(){
    for (let i = 0; i < 9; i++) {
        let uniqueId = 'uniqueId' + i;
        let newElement = generateElement('div', uniqueId, 'boxes', '', 'lection2Opg6');
        newElement.style.backgroundColor = randColorNum();
        generateElement('p', '', '', makeId(5), uniqueId);
    }
    
}
createGridLayout();